import { Schema, model, Document} from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
 export interface TutoringI extends Document {                                                                     //interface o clase??
    creatorName: string;
    subject:string;
    description: string;
    picture: string;
    price: number;
    creatorId: string;
  }


  // 2. Create a Schema corresponding to the document interface.
const TutoringSchema = new Schema<TutoringI>({
    creatorName: { type: String, required: true },
    subject: { type: String, required: true },
    description: { type: String, required: false },
    picture: { type: String, required: true },
    price: { type: Number, required: true },
    creatorId: { type: String, required: true },
  });


// 3. Create a Model.
export const TutoringModel = model<TutoringI>('Tutoring', TutoringSchema);                         //porq no me deja usar export default cuando tengo mas de un export?








