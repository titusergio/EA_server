import { Response, Request, Router } from 'express';
import mongoose from 'mongoose';

import {SubjectI, SubjectModel} from '../models/subject';

const router = Router();

export const getSubjects = async (req:Request, res:Response) => { 
    try {
        const questions:SubjectI[] = await SubjectModel.find();               
        res.status(200).json(questions);
        
    } catch (error:any) {
        res.status(404).json({ message: error.message });
    }
}

export const getSubject = async (req:Request, res:Response) => { 
    
    const { id } = req.params;

    try {
        const question = await SubjectModel.findById(id);
        
        res.status(200).json(question);
    } catch (error:any) {
        res.status(404).json({ message: error.message });
    }
}

export const createSubject = async (req:Request, res:Response) => {

    const newSubject:SubjectI = req.body;

    const newPostSubject = new SubjectModel(newSubject);

    try {
        await newPostSubject.save();

        res.status(201).json(newPostSubject );
    } catch (error:any) {
        res.status(409).json({ message: error.message });
    }
}

export const updateSubject = async (req:Request, res:Response) => {
    const { id } = req.params;
    const updatedSubject = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No question with id: ${id}`);

    await SubjectModel.findByIdAndUpdate(id, updatedSubject, { new: true });

    res.json(updatedSubject);
}

export const deleteSubject = async (req:Request, res:Response) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No question with id: ${id}`);

    await SubjectModel.findByIdAndRemove(id);

    res.json({ message: "Subject deleted successfully." });
}


export default router;