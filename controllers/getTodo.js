//import model
const Todo = require("../models/Todo")

//define route handler
exports.getTodo = async(req, res) => {
    try {
        //fetch all todo items from database
        const todos = await Todo.find({});

        //response 
        res.status(200).json({
            success: true,
            data: todos,
            message: "Entire todo data is fetched"
        })
    } 
    catch (error) {
        console.error(error);
        console.log(error);
        res.status(500).json({
            success: false,
            error: error, 
            message: "Server error"
        })
    }
}

exports.getTodoById = async(req, res) => {
    try {
        //fetch all todo items from database
        const id = req.params.id;
        const todo = await Todo.findById({_id: id})

        //data for given id not found
        if(!todo){
            return res.status(404).json({
                success: false,
                message: "No data found"
            })
        }

        //data for given id found
        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo ${id} data successfully fetched!`
        })
    } 
    catch (error) {
        console.error(error);
        console.log(error);
        res.status(500).json(
            {
                success: false,
                data: "internal server error",
                message: error.message,
            }
        )
    }
}