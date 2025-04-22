const mongoose=require('mongoose')

const taskSchema=new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    startdate:{type:String,required:true},
    enddate:{type:String,required:true},
    status:{type:String,required:true},
    progress:{type:String,required:true},
})

const tasks=mongoose.model("tasks",taskSchema)

module.exports=tasks;