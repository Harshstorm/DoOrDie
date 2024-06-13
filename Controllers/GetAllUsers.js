import axios from "axios";
import express from "express";
import UsersModel from "../Models/UsersModel.js";

export const getallUsers = async(req, res) =>{
    try{
        let data = await UsersModel.find({})
        res.json(data)
    }catch(error){
        console.log(error.message)
    }
}