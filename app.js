import 'dotenv/config'

import express from "express";
import cors from "cors"
import bodyParser from "body-parser";
import http from "http"
import Connection  from "./Database/DB.js";
import route from "./Routes/Route.js";
import { Server } from "socket.io";

const app = express()

app.use(cors({
    origin: 'https://resplendent-kataifi-ca7e6a.netlify.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
  }));

app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))

app.use('https://resplendent-kataifi-ca7e6a.netlify.app', route )

Connection()

const server = http.createServer(app)
const io = new Server(server, {
    cors: {
    origin: 'https://resplendent-kataifi-ca7e6a.netlify.app',
    methods: ['GET', 'POST'],
    credentials: true
  }
})

io.on('connection', (socket)=>{
    console.log('user connnected',socket.id)
    socket.on("join_room", (data)=>{
        socket.join(data)
    })
    socket.on("send_message", (data)=>{
        socket.to(data.conversationID).emit("receive_message", data.lastMessage)
    })
})

const PORT = process.env.PORT || 8000

server.listen(PORT, ()=>{
    console.log('Port is running on:', PORT)
})