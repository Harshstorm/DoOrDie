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
import { deleteMessage } from "../Controllers/DeleteMessage.js";

const router = express.Router()

router.post('/register/saveuser', saveUser)
router.post('/login/userlogin', userLogIn)
router.post('/login/getuser', getUser)
router.post('/register/setavatar', setAvatar )
router.post('/register/getavatar', getAvatar )
router.get('/convo/getallusers', getallUsers )
router.post('/message/setmessage', saveMessage )
router.post('/message/getmessages', getMessages )
router.post('/conversation/setconvo', setConvo )
router.post('/message/deletemessage', deleteMessage )

export default router