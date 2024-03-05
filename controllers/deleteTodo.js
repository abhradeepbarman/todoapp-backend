//import model
const Todo = require("../models/Todo")

//define route handler
exports.deleteTodo = async(req, res) => {
    try {
        const {id} = req.params;

        const todo = await Todo.findByIdAndDelete({_id: id})

        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo ${id} data deleted    successfully!`
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