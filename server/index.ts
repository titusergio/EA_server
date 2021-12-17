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
import userRoutes from './routes/user';
import messageRoutes from './routes/message';
import conversationRoutes from './routes/conversation';
import { Socket } from 'socket.io';
import { UserI } from './models/users';

import flatsRoutes from './routes/flats';
import markersRoutes from './routes/markers';
dotenv.config();

let users =Array<any>();

const app = express();

app.use(express.json())                 
app.use(express.urlencoded({ limit: '30mb', extended: true }))            //limito el tamaño, puede q no sea necessario para nuestra aplicacions
app.use(cors());
app.use(morgan("dev"));

app.use('/tutor',tutoringsRoutes);
app.use('/questions',questionsRoutes);
app.use('/students', studentsRoutes);
app.use('/subjects',subjectRoutes);
app.use('/teachers',teacherRoutes);
app.use('/users',userRoutes);
app.use('/message',messageRoutes);
app.use('/conversation',conversationRoutes);
app.use('/flats',flatsRoutes);
app.use('/markers',markersRoutes);

mongoose.connect(`${process.env.CONNECTION_URL}`)                         // have to use a template string and interpolate the environment variable.Otherwise, you’ll get an error: Type 'undefined' is not assignable to type 'string'
  .then(() => app.listen(process.env.PORT, () => console.log(`Base MongoDB conectado, servidor corriendo en el puerto: http://localhost:${process.env.PORT}`)))

  .catch((error) => console.log(`${error} no se pudo conectar`));

const io = require("socket.io")(8900,{
  cors:{
      origin:"http://localhost:3000",
  },
});

const addUser = (userId: string, socketId:string ) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId:string) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId: string) => {
  return users.find((user) => user.userId === userId);
};

io.on("connection", (socket:Socket) => {
  //when connect
  console.log("user connected");
  
  //take userId and socketId from user
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
  });

  //send and get message
  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    const user = getUser(receiverId);
    io.to(user.socketId).emit("getMessage", {
      senderId,
      text,
    });
});

  //when disconnect
  socket.on("disconnect", () => {
    console.log("a user disconnected!");
    removeUser(socket.id);
  });
});
