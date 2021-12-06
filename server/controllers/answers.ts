import { Response, Request, Router } from 'express';
import mongoose from 'mongoose';

import {AnswerI, AnswerModel} from '../models/answers';

const router = Router();

export const getAnswers = async (req:Request, res:Response) => { 
    try {
        const answers:AnswerI[] = await AnswerModel.find();               
        res.status(200).json(answers);
        
    } catch (error:any) {
        res.status(404).json({ message: error.message });
    }
}

export const getAnswer = async (req:Request, res:Response) => { 
    
    const { id } = req.params;

    try {
        const answer = await AnswerModel.findById(id);
        
        res.status(200).json(answer);
    } catch (error:any) {
        res.status(404).json({ message: error.message });
    }
}

export const createAnswer = async (req:Request, res:Response) => {

    const newAnswer:AnswerI = req.body;

    const newPostAnswer = new AnswerModel(newAnswer);

    try {
        await newPostAnswer.save();
        
        res.status(201).json(newPostAnswer );
    } catch (error:any) {
        res.status(409).json({ message: error.message });
    }
}

export const updateAnswer = async (req:Request, res:Response) => {
    const { id } = req.params;
    const updatedAnswer = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Answer with id: ${id}`);

    await AnswerModel.findByIdAndUpdate(id, updatedAnswer, { new: true });

    res.json(updatedAnswer);
}

export const deleteAnswer = async (req:Request, res:Response) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Answer with id: ${id}`);

    await AnswerModel.findByIdAndRemove(id);

    res.json({ message: "Answer deleted successfully." });
}


export default router;