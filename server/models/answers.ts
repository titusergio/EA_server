import { Schema, model, Document,ObjectId} from 'mongoose';
import {UserModel, UserI} from './users';



// 1. Create an interface representing a document in MongoDB.
 export interface AnswerI extends Document {                                                                     //interface o clase??
    creator: UserI['_id']
    answer: string,
    createdAt:Date,                                                                                                  //nose pq no me deja ponerle date, me da conflicto pf
    likes:Array<ObjectId>
        
    };
  
    


  // 2. Create a Schema corresponding to the document interface.
const AnswerSchema = new Schema<AnswerI>({
    creator: { type: Schema.Types.ObjectId, ref: UserModel, required: true },
    answer: { type: String, required: true },
    createdAt: { type: Date, default: new Date() },
    likes: [{ type: Schema.Types.ObjectId, ref: 'UserI',required: false}]
  });


// 3. Create a Model.
export const AnswerModel = model<AnswerI>('Answers', AnswerSchema);  