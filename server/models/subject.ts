import { Schema, model, Document, ObjectId, Mongoose} from 'mongoose';
import { StudentI } from "./student";
import mongoose from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
 export interface SubjectI extends Document {                                                                     
    name: string,
    credits:number    
    };
  
    
  // 2. Create a Schema corresponding to the document interface.
const SubjectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    credits: { type: Number, required: true }
    
  });


// 3. Create a Model.
export const SubjectModel = model('Subjects', SubjectSchema);  
