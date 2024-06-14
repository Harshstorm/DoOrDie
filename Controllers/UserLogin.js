import axios from "axios";
import express from "express";
import UsersModel from "../Models/UsersModel.js";


export const userLogIn = async(req, res) =>{
    try{
     let data = await UsersModel.findOne({email: req.body.email})

     if(data){
            if(data.password == req.body.password){
                res.json({
                    User: data,
                    string: 'Successfull'
                })
            }else{
                res.json('Incorrect Password')
            }
        }else{
            res.json('Email not registered')
        }

    }catch(error){
        console.log(error.message)
    }
}