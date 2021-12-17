import { Request,Response } from 'express';
import mongoose from 'mongoose';
import { MessageModel } from '../models/message';

//Get conversation's messages
export async function getMessages(req: Request, res:Response): Promise<Response> { 
    try {
        const message = await MessageModel.find({
          conversationId:req.params.conversationId,
        });
        return res.status(200).json(message);
      } catch (err: any) {
        return res.status(404).json({ message: err.message });
      }
}

//Add message
export async function createMessage(req: Request, res:Response): Promise<Response> { 
    const {conversationId, sender, text} = req.body;

    const newMessage = {
        conversationId: conversationId,
        sender: sender,
        text: text
    };
    const mes = new MessageModel(newMessage);
    try {
        await mes.save();
        return res.status(200).json({
            message: 'message successfully saved',
            mes
        })
    } catch (err: any) {
        return res.status(404).json({ message: err.message });
    }
};
