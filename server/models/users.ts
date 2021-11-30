import { Schema, model, Document} from 'mongoose';
import {SubjectModel, SubjectI} from './subject';


// 1. Create an interface representing a document in MongoDB.
 export interface UserI extends Document {                                                                     //interface o clase??
    name: string;
    email: string;
    password: string;
    age: number;
    subjects: SubjectI['_id'];     //problemas con Array<String> al ponerselo en el schema
  }


  // 2. Create a Schema corresponding to the document interface.
const UserSchema = new Schema<UserI>({
    email: { type: String, required: true },
    password: { type: String, required: true },
    age: { type: Number, required: true },
    subjects:[{ type: Schema.Types.ObjectId, ref: SubjectModel, required: true }]
  });


// 3. Create a Model.
export const UserModel =model<UserI>('User', UserSchema);                         










/*
UserSchema.pre('save', function(next){
    if(this.isNew || this.isModified('password')){

        const document = this;

        bcrypt.hash(document.password, saltRounds, (err, hashedPassword) =>{
            if(err){
                next(err);
            }else{
                document.password = hashedPassword;
                next();
            }
        });
    }else{
        next();
    }
})


UserSchema.methods.isCorrectPassword = function(password, callback){
    bcrypt.compare(password, this.password, function(err, same){
        if(err){
            callback(err);
        }else{
            callback(err, same);
        }
    })
}

var User = mongoose.model('User', UserSchema);

export default User;
*/





