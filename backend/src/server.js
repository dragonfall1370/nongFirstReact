import express  from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/userRouter.js';


const x = dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/nong');

// app.use('/api/users', userRouter);


app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use((err, req, res, next) =>{
    res.status(500).send({ message:err.message});
});

app.use('/api/users', userRouter);


const port = process.env.PORT;
app.listen(port, () =>{
    console.log(`Server at http://localhost:${port}`);
});
