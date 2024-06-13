import axios from "axios";
import express from "express";
import UsersModel from "../Models/UsersModel.js";


export const userLogIn = async(req, res) =>{
    try{
     let user = await UsersModel.findOne({email: req.body.email})
      .then(user=>{
        if(user){
            if(user.password == req.body.password){
                res.json({
                    User: user,
                    string: 'Successfull'
                })
            }else{
                res.json('Incorrect Password')
            }
        }else{
            res.json('Email not registered')
        }
      })
    }catch(error){
        console.log(error.message)
    }
}