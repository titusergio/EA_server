import { Response, Request, Router } from 'express';
import mongoose from 'mongoose';
import {UserI, UserModel} from '../models/users';

const router = Router();

export const getUsers = async (req:Request, res:Response) => { 
    try {
        const users:UserI[] = await UserModel.find();               
        res.status(200).json(users);
        
    } catch (error:any) {
        res.status(404).json({ message: error.message });
    }
}

export const getUser = async (req:Request, res:Response) => { 
    
    const { id } = req.params;

    try {
        const user = await UserModel.findById(id);
        
        res.status(200).json(user);
    } catch (error:any) {
        res.status(404).json({ message: error.message });
    }
}

export const createUser = async (req:Request, res:Response) => {

    const newUser:UserI = req.body;

    const newPostUser = new UserModel(newUser);

    try {
        await newPostUser.save();
        
        res.status(201).json(newPostUser );
    } catch (error:any) {
        res.status(409).json({ message: error.message });
    }
}

export const updateUser= async (req:Request, res:Response) => {
    const { id } = req.params;
    const updatedUser = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No User with id: ${id}`);

    await UserModel.findByIdAndUpdate(id, updatedUser, { new: true });

    res.json(updatedUser);
}

export const deleteUser = async (req:Request, res:Response) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Userwith id: ${id}`);

    await UserModel.findByIdAndRemove(id);

    res.json({ message: "User deleted successfully." });
}


export default router;