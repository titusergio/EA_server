import { Response, Request, Router } from 'express';
import {UserI, UserModel} from '../models/users';


import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//const router = Router();

const secret = 'test';


export const signUp = async (req:Request, res:Response) => {
    const { email, password, firstName, lastName } = req.body;
  
    try {
      const oldUser = await UserModel.findOne({ email });
  
      if (oldUser) return res.status(400).json({ message: "User already exists" });
  
      const hashedPassword = await bcrypt.hash(password, 12);
  
      const result = await UserModel.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

      console.log(result);
  
      const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );
  
      res.status(201).json({ result, token });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
      
      console.log(error);
    }
  };





export const getUsers = async (req:Request, res:Response) => { 
    try {
        const users:UserI[] = await UserModel.find();               
        res.status(200).json(users);
        
    } catch (error:any) {
        res.status(404).json({ message: error.message });
    }
}

export const getUser = async (req:Request, res:Response) => { 
    
    const { id } = req.params;

    try {
        const user = await UserModel.findById(id);
        
        res.status(200).json(user);
    } catch (error:any) {
        res.status(404).json({ message: error.message });
    }
}