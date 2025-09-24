import mongoose from "mongoose"

// 1- create a schema
// 2- model based off of that schema

// scheme object
const noteSchema=new mongoose.Schema(
    {
        title:{
            type:String,
            required: true,
        },
        content:{
            type:String,
            required: true,
        },
    },
    {timestamps: true} //mongodb will automatically provide with the createdAt, updatedAt
)

const Note=mongoose.model("Note", noteSchema); // create a "Note" model based off of the schema
export default Note;