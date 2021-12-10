import { Request,Response } from 'express';
import mongoose from 'mongoose';
import { ConversationModel } from '../models/conversation';

//Get conversations of a user
export async function getConversation(req: Request, res:Response): Promise<Response> { 
    try {
        const conversation = await ConversationModel.find({
            members: { $in: req.params.id}
        });
        return res.status(200).json(conversation);
    } catch (err:any) {
        return res.status(404).json({ message: err.message });
    }
}   

//Create new conversation
export async function createConversation(req: Request, res:Response): Promise<Response> { 
    const {members} = req.body;

    const newConversation = {
        members: members
    };

    const conv = new ConversationModel(newConversation);
    try {
      await conv.save();
      return res.status(200).json({
        message: 'Conversation successfully saved',
        conv
    });
    } catch (err:any) {
      return res.status(500).json({ message: err.message });
    }
};
