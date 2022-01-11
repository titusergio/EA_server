import { Schema, model, Document, ObjectId} from 'mongoose';
import {UserModel, UserI} from './users';
import {ConversationModel, ConversationI} from './conversation';

export interface MessageI extends Document {                                                                     
    conversationId: ConversationI['_id'],
    sender: UserI['_id'],
    text:string
    };  

const MessageSchema = new Schema<MessageI>({
    conversationId: { type: Schema.Types.ObjectId, ref: ConversationModel, required: true },
    sender: { type: Schema.Types.ObjectId, ref: UserModel, required: true } ,
    text: { type: String, required: true }
  });

export const MessageModel = model<MessageI>('Message', MessageSchema);  