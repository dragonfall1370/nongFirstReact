import bcrypt from "bcryptjs";
import express from "express";
import expressAsynceHandler from 'express-async-handler';
import data from "../data.js";
import User from "../model/userModel.js";
import { generateToken, isAuth } from "../util.js";



const userRouter = express.Router();

userRouter.get('/seed', expressAsynceHandler(async (req, res) => {
    await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
}));



userRouter.post('/signin', expressAsynceHandler(async (req, res) => {
    const user= await User.findOne({email:req.body.email});
    if(user){
        if(bcrypt.compareSync(req.body.password, user.password)){
            res.send({
                _id: user._id,
                name: user.name,
                email:user.email,
                isAdmin: user.isAdmin,
                token:generateToken(user),
            });
            return;
        }
    }
        res.status(401).send({message: 'Invalid email or password!'});
}));



userRouter.post('/register', expressAsynceHandler(async(req,res) => {
    const user = new User({name: req.body.name,
                           email: req.body.email,
                           password: bcrypt.hashSync(req.body.password, 8),
                        });
    const createdUser = await user.save();
    res.send({
        _id: createdUser._id,
        name: createdUser.name,
        email:createdUser.email,
        isAdmin: createdUser.isAdmin,
        token:generateToken(user),
    });
}));

userRouter.post('/checktoken', isAuth, (req,res) => {
    res.status(200).send({ message:"token is valid" })
});

export default userRouter;