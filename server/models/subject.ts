import { Schema, model, Document, ObjectId, Mongoose} from 'mongoose';
import { StudentI } from "./student";


// 1. Create an interface representing a document in MongoDB.
 export interface SubjectI extends Document {                                                                     
    name: string,
    numberStudents: number     
    };
  
    
  // 2. Create a Schema corresponding to the document interface.
const SubjectSchema = new Schema<SubjectI>({
    name: { type: String, required: true },
    numberStudents: { type: Number, required: true }
    
  });


// 3. Create a Model.
export const SubjectModel = model<SubjectI>('Subjects', SubjectSchema);  