import express from 'express'; 
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import tutoringsRoutes from './routes/tutoring';
import questionsRoutes from './routes/questions';
import studentsRoutes from './routes/students';
import subjectRoutes from './routes/subject';
import teacherRoutes from './routes/teacher';
dotenv.config();

const app = express();

app.use(express.json())                 
app.use(express.urlencoded({ limit: '30mb', extended: true }))            //limito el tamaño, puede q no sea necessario para nuestra aplicacions
app.use(cors());
app.use(morgan("dev"));

app.use('/tutor',tutoringsRoutes);
app.use('/question',questionsRoutes);
app.use('/students', studentsRoutes);
app.use('/subjects',subjectRoutes);
app.use('/teachers',teacherRoutes);


mongoose.connect(`${process.env.CONNECTION_URL}`)                         // have to use a template string and interpolate the environment variable.Otherwise, you’ll get an error: Type 'undefined' is not assignable to type 'string'
  .then(() => app.listen(process.env.PORT, () => console.log(`Base MongoDB conectad, servidor corriendo en el puerto: http://localhost:${process.env.PORT}`)))
  .catch((error) => console.log(`${error} no se pudo conectar`));



