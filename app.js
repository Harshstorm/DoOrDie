import 'dotenv/config'

import express from "express";
import cors from "cors"
import bodyParser from "body-parser";
import http from "http"
import Connection  from "./Database/DB.js";
import route from "./Routes/Route.js";
import { Server } from "socket.io";

const app = express()
app.use(cors())
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', route )

Connection()

const server = http.createServer(app)
const io = new Server(server, {
    cors:{
        origin: 'http://localhost:3000'
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