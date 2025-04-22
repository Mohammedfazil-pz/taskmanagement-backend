const tasks=require('../models/taskmodel')
exports.addTask=async(req,res)=>{
    const {title,description,startdate,enddate,status,progress}=req.body
    try {
        const newTask=await tasks.insertOne({title:title,startdate:startdate,enddate:enddate,status:status,progress:progress,description:description})
        res.status(200).json(newTask)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

exports.deleteTask=async(req,res)=>{
    const _id=req.params.id

    try {
        const isTaskExists= await tasks.findById(_id)
        if(isTaskExists){
            await tasks.findByIdAndDelete(_id)
            res.status(200).json("Deleted")
        }else{
            res.status(404).json("Task not found")
        }
       
      
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }

}

exports.updateTask=async(req,res)=>{
    const _id=req.params.id
    const {title,description,startdate,enddate,status,progress}=req.body
    try {
        const updateTask=await tasks.findOneAndUpdate({_id:_id},{title:title,description:description,startdate:startdate,enddate:enddate,status:status,progress:progress},{new:true})
        res.status(200).json(updateTask)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

exports.getAllTasks=async(req,res)=>{
    try {
        const getTasks=await tasks.find()
        res.status(200).json(getTasks)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

exports.getOneTask=async(req,res)=>{
    const _id=req.params.id
    try {
        const getTask=await tasks.findById(_id)
        res.status(200).json(getTask)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}