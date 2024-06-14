import axios from "axios";
import express from "express";
import UsersModel from "../Models/UsersModel.js";

export const saveUser = async(req, res)=>{
    try{
        await UsersModel.findOne({email: req.body.email})
        .then((user)=>{
            if(user){
                res.json('Exists')
            }else{

        const User = new UsersModel(req.body)
                User.save()
                res.json("User Registered Successfully")
            }
        })
        
    }catch(error){
        console.log(error.message)
    }
}