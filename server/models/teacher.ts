import {Schema, model, Document, ObjectId} from 'mongoose';
import { SubjectI } from './subject';
import mongoose from 'mongoose';

const TeacherSchema = new mongoose.Schema({
    name:{ type: String, required: true },
    email:{ type: String, required: true },
    office:{ type: String, required: true },
    puntuation:{ type: Number, required: true },
    likes: { type: Array, required: false },
    subjects: [{type: mongoose.Schema.Types.ObjectId, ref:'Subjects',required:false}]
});


export interface TeacherI extends Document {
    name:string,
    email:string,
    office:string,
    puntuation:number,
    subjects: Array<ObjectId>  
}

export const TeacherModel = model('Teacher', TeacherSchema);  