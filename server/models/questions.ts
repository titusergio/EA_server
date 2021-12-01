import { Schema, model, Document} from 'mongoose';
import {UserModel, UserI} from './users';



// 1. Create an interface representing a document in MongoDB.
 export interface QuestionI extends Document {                                                                     //interface o clase??
    creator: UserI['_id'],
    question: string,
    createdAt:Date,                                                                                                  //nose pq no me deja ponerle date, me da conflicto pf
    solved: boolean,
    answerCountNumber:number
        
    };
  
    


  // 2. Create a Schema corresponding to the document interface.
const QuestionSchema = new Schema<QuestionI>({
    creator: { type: Schema.Types.ObjectId, ref: UserModel, required: true },
    question: { type: String, required: true },
    createdAt: { type: Date, default: new Date() },
    solved: { type: Boolean, required: true },
    answerCountNumber: { type: Number, default: 0 }
  });


// 3. Create a Model.
export const QuestionModel = model<QuestionI>('Questions', QuestionSchema);  