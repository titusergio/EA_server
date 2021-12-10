import { Schema, model, Document, ObjectId} from 'mongoose';
import {UserModel, UserI} from './users';
import {AnswerModel, AnswerI} from './answers';



// 1. Create an interface representing a document in MongoDB.
 export interface QuestionI extends Document {                                                                     //interface o clase??
    creator: UserI['_id'],
    question: string,
    createdAt:Date, 
    answers:Array<ObjectId>
  
        
    };
  
    


  // 2. Create a Schema corresponding to the document interface.
const QuestionSchema = new Schema<QuestionI>({
    creator: { type: Schema.Types.ObjectId, ref: UserModel, required: true },
    question: { type: String, required: true },
    createdAt: { type: Date, default: new Date() },
    answers: [{ type: Schema.Types.ObjectId, ref: 'AnswerI', required: false }]
  });


// 3. Create a Model.
export const QuestionModel = model<QuestionI>('Questions', QuestionSchema);  