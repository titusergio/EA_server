import {Schema, model, Document, ObjectId} from 'mongoose';

export interface TeacherI extends Document {
    name:string,
    email:string,
    office:string,
    puntuation:string,
    subjects: Array<ObjectId>  
}


const TeacherSchema = new Schema({
    name:{ type: String, required: true },
    email:{ type: String, required: true },
    office:{ type: String, required: true },
    puntuation:{ type: String, required: true },
    subjects: [{type: Schema.Types.ObjectId, ref:'SubjectI',required:false}]
});

export const TeacherModel = model<TeacherI>('Teacher', TeacherSchema);  