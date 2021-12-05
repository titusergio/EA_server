import {Schema, model, Document, ObjectId} from 'mongoose';
import { SubjectI } from './subject';

const TeacherSchema = new Schema({
    name:{ type: String, required: true },
    email:{ type: String, required: true },
    office:{ type: String, required: true },
    puntuation:{ type: Number, required: true },
    subjects: [{type: Schema.Types.ObjectId, ref:'SubjectI',required:false}]
});


export interface TeacherI extends Document {
    name:string,
    email:string,
    office:string,
    puntuation:number,
    subjects: Array<ObjectId>  
}

export const TeacherModel = model<TeacherI>('Teacher', TeacherSchema);  