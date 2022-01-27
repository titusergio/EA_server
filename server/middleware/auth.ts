import { Request, Response, NextFunction } from 'express';
import * as  jwt from "jsonwebtoken";

const secret = 'test';            //same string as inthe signup ,  To generate and validate a jwt token we need a secret key. We will be storing it on a config file                  

const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    
    const token = <string>req.headers.authorization?.split(" ")[1]; // i dont know if is better put '?' or '!' in this case
    
    //const token = <string>req.headers["auth"];              // is the same result?
    const isCustomAuth = token.length < 500;                  //to distinguis google auth
    ;

    let decodedData;

    if (token && isCustomAuth) {      
      decodedData = <any>jwt.verify(token, secret);
      
      //we know wich user is log them and wich user is comenting for example                                    
      req.userId = decodedData?.id;       //by default request not has userId, so in order to solve it I have use a Typescript feature called Declaration Mergin. see new directory @types!
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;     // sub is simply googles name for a specific id  
      
    }    

    next();
  } catch (error) {
    console.log(error); //asdf
  }
};

export default auth;

