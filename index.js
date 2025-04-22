require('dotenv').config()
const express=require('express')
const cors =require('cors')


require('./databaseconnection/db')
const Router=require('./routes/taskRoute')

const server=express()

server.use(cors())
server.use(express.json())
server.use(Router)

const PORT=3000||process.env.PORT

server.listen(PORT,()=>{
    console.log('Server succesfully Running!')
})
