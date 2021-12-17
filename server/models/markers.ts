import { Schema, model, Document } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export interface MarkersI extends Document {
    name: string;
    address: string;
    lat: number;
    lng: number;
}

// 2. Create a Schema corresponding to the document interface.
const MarkersSchema = new Schema<MarkersI>({
    name: { type: String, required: true },
    address: { type: String, required: true },
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
});


// 3. Create a Model.
export const MarkersModel = model<MarkersI>('Markers', MarkersSchema);                         //porq no me deja usar export default cuando tengo mas de un export?
