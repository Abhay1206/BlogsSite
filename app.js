import express from 'express';
import mongoose from 'mongoose';
import {blogrouter} from './routes/blog-route';

import {router} from './routes/user-route';


const app =express();
app.use(express.json());


mongoose.set('strictQuery',false);

app.use("/api/user",router);
app.use("/api/blog",blogrouter);

mongoose.connect(
    "mongodb+srv://admin:fUwSFiLB67dKLjWw@cluster0.uvudejt.mongodb.net/?retryWrites=true&w=majority"
    ).then(()=>app.listen(5000)).then(()=>console.log('Connected to the database')).catch((err)=>console.log(err));


