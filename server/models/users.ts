import { Schema, model, Document, ObjectId} from 'mongoose';
import {SubjectModel, SubjectI} from './subject';


// 1. Create an interface representing a document in MongoDB.
 export interface UserI extends Document {                                                                     //interface o clase??
    name: string;
    lastName: string;
    email: string;
    password: string;
    picture: string;
    age: number;
    subjects: Array<ObjectId>;
  }


  // 2. Create a Schema corresponding to the document interface.
const UserSchema = new Schema<UserI>({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    picture: { type: String, required: true },
    age: { type: Number, required: false },
    subjects:[{ type: Schema.Types.ObjectId, ref: SubjectModel, required: false }]
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





