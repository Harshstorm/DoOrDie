import axios from "axios";
import express from "express";
import UsersModel from "../Models/UsersModel.js";

export const getUser = async(req, res) =>{
    try{
        let data = await UsersModel.findOne({userId:  req.body.userId})
        res.json(data)
    }catch(error){
        console.log(error.message)
    }
}