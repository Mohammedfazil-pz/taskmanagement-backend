const mongoose=require('mongoose')
const CONNECTIONSTRING=process.env.CONNECTIONSTRING

 mongoose.connect(CONNECTIONSTRING).then(()=>console.log("DatabaseConnected")).catch((err)=>console.log(err))



