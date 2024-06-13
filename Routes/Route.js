import axios from "axios";
import express from "express";
import UsersModel from "../Models/UsersModel.js";
import { saveUser } from "../Controllers/SavingUser.js";
import { userLogIn } from "../Controllers/UserLogin.js";
import { getUser } from "../Controllers/GetUser.js";
import { setAvatar } from "../Controllers/SetAvatar.js";
import { getAvatar } from "../Controllers/GetAvatar.js";
import { getallUsers } from "../Controllers/GetAllUsers.js";
import { saveMessage } from "../Controllers/SaveMessage.js";
import { getMessages } from "../Controllers/GetMessages.js";
import { setConvo } from "../Controllers/SetConvo.js";
import { getConvo } from "../Controllers/GetConvo.js";
import { deleteMessage } from "../Controllers/DeleteMessage.js";

const router = express.Router()

router.post('/saveuser', saveUser)
router.post('/userlogin', userLogIn)
router.post('/getuser', getUser)
router.post('/setavatar', setAvatar )
router.post('/getavatar', getAvatar )
router.get('/getallusers', getallUsers )
router.post('/setmessage', saveMessage )
router.post('/getmessages', getMessages )
router.post('/setconvo', setConvo )
router.post('/getconvo', getConvo )
router.post('/deletemessage', deleteMessage )

export default router