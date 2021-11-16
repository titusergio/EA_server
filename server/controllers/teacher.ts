import { Request,Response } from 'express';
import mongoose from 'mongoose';
import {TeacherModel} from '../models/teacher';

export async function getTeachers(req: Request, res:Response): Promise<Response> { 
    try {
        const teacher = await TeacherModel.find();  
        return res.status(200).json(teacher);
        
    } catch (error:any) {                                                  

        return res.status(404).json({message: error.message});
    }
}

export async function getTeacher(req: Request, res:Response): Promise<Response> { 
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send(`No post with id: ${id}`);
    }
    else{
        const teacher = await TeacherModel.findById(id);
        return res.status(200).json(teacher);
    }    
}

export async function createTeacher(req: Request, res:Response): Promise<Response> { 
    const {name, email, office, subjects, puntuation} = req.body;

    const newTeacher = {
        name: name,
        email: email,
        office: office,
        puntuation: puntuation,
        subjects: subjects
    };

    const teacher = new TeacherModel(newTeacher);
    try{
        await teacher.save();
        return res.status(200).json({
            message: 'Teacher successfully saved',
            teacher
        })
    } catch (error:any) {
    return res.status(409).json({ message: error.message });
    }

};

export async function deleteTeacher(req: Request, res:Response): Promise<Response> { 
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send(`No teacher with id: ${id}`);
    }
    else{
        const teacher = await TeacherModel.findByIdAndRemove(id);
        
        return res.json({
            message: 'Teacher Deleted',
            teacher
        });
    }
}

export async function updateTeacher(req: Request, res:Response): Promise<Response> { 
    const {id} = req.params;
    const {name, email, office, puntuation, subjects} = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send(`No teacher with id: ${id}`);
    }
    else{
        const updatedTeacher = await TeacherModel.findByIdAndUpdate(id,{
            name: name,
            email: email,
            office: office,
            puntuation: puntuation,
            subjects: subjects
        }, {new:true});
        return res.json({
            message: 'Teacher successfully updated',
            updatedTeacher
        });
    }    
}