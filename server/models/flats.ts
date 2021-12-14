import { Schema, model, Document} from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
 export interface FlatsI extends Document {                                                                     //interface o clase??
    name: string;
    address: string;
    description: string;
    creator: string;
    picture?: string;
    price: number;
    lat: number;
    lng: number;
  }

// 2. Create a Schema corresponding to the document interface.
const FlatsSchema = new Schema<FlatsI>({
    name: { type: String, required: true },
    address: { type: String, required: true },
    description: { type: String, required: true },
    creator: { type: String, required: true },
    picture: String,
    price: { type: Number, required: true },
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  });


// 3. Create a Model.
export const FlatsModel = model<FlatsI>('Flats', FlatsSchema);                         //porq no me deja usar export default cuando tengo mas de un export?
