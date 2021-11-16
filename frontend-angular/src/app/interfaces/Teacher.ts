import { Subject } from "./Subject";
export interface Teacher{
    _id?: string;
    name: string;
    subjects: Subject['_id'];
    age: number
}