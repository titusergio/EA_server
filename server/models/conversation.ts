import { Schema, model, Document, ObjectId} from 'mongoose';
import {UserModel, UserI} from './users';

export interface ConversationI extends Document {                                                                     
    members:Array<any>  
    };  

const ConversationSchema = new Schema<ConversationI>({
    members: [{type: Schema.Types.ObjectId, ref:UserModel ,required:false}]
  });

export const ConversationModel = model<ConversationI>('Conversation', ConversationSchema);  