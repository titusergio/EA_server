import { Response, Request, Router } from 'express';
import mongoose from 'mongoose';
import {FlatsI, FlatsModel} from '../models/flats';


const router = Router();

//creating CRUD methods


//GET all
export const getFlats = async (req:Request, res:Response) => { 
    try {
        const flats: FlatsI[] = await FlatsModel.find();               
        res.status(200).json(flats);
        
    } catch (error:any) {                                                                    
         res.status(404).json({message: error.message
        
        });
    }
}

//GET by ID

export const getFlat = async (req:Request, res:Response) => {

    const id = req?.params?.id;
    
    try {
        const flat = await FlatsModel.findById(id); 
        console.log(flat);              
        res.status(200).json(flat);
        
    } catch (error:any) {                                                                       

         res.status(404).json({message: error.message
        
        });
    }
}


//CREATE
export const createFlat = async (req:Request, res:Response) => { 
    
        const newFlat:FlatsI = req.body ;                                               
        const newPostFlat = new FlatsModel(newFlat);

    try{
        await newPostFlat.save();
        res.status(201).json(newPostFlat);

    } catch (error:any) {
        res.status(409).json({ message: error.message });
    }
    
}

//UPDATE
export const updateFlat = async (req:Request, res:Response) => {

    
    const { id } = req.params;                                                 
    const updatedFlat = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await FlatsModel.findByIdAndUpdate(id, updatedFlat, { new: true });

    res.json(updatedFlat);
}


//DELETE
export const deleteFlat = async (req:Request, res:Response) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await FlatsModel.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export default router;