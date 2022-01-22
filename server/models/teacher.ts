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

const orderSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, default: 1 }
});

export const TeacherModel = model('Teacher', TeacherSchema);  