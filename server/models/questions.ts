import { Schema, model, Document, ObjectId} from 'mongoose';
import {UserModel, UserI} from './users';
import {SubjectModel, SubjectI} from './subject';
import mongoose from 'mongoose';


// 1. Create an interface representing a document in MongoDB.
 export interface QuestionI extends Document {                                                                     //interface o clase??
    creator: UserI['_id'],
    question: string,
    createdAt:Date, 
    subject:SubjectI['_id'],
    answers:Array<ObjectId>
  
    };
  
    


  // 2. Create a Schema corresponding to the document interface.
  const QuestionSchema = new mongoose.Schema({
    creator: { type: Schema.Types.ObjectId, ref: UserModel, required: true },
    question: { type: String, required: true },
    createdAt: { type: Date, default: new Date() },
    subject: { type: Schema.Types.ObjectId, ref: SubjectModel, required: true  },
    answers: [{type: mongoose.Schema.Types.ObjectId, ref:'Answers',required:false}]
  });


// 3. Create a Model.
export const QuestionModel = model<QuestionI>('Questions', QuestionSchema);  