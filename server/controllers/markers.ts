import { Response, Request, Router } from 'express';
import mongoose from 'mongoose';
import {MarkersI, MarkersModel} from '../models/markers';


const router = Router();

//creating CRUD methods


//GET all
export const getMarkers = async (req:Request, res:Response) => { 
    try {
        const markers: MarkersI[] = await MarkersModel.find();               
        res.status(200).json(markers);
        
    } catch (error:any) {                                                                    
         res.status(404).json({message: error.message
        
        });
    }
}


//CREATE
export const createMarker = async (req:Request, res:Response) => { 
    
    const newMarker:MarkersI = req.body ;                                               
    const newPostMarker = new MarkersModel(newMarker);

try{
    await newPostMarker.save();
    res.status(201).json(newPostMarker);

} catch (error:any) {
    res.status(409).json({ message: error.message });
}

}

export default router;