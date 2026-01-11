import mongoose from "mongoose";
import { title } from "node:process";

const TodoSchema = new mongoose.Schema({
    title: String,
    desc: String,
    isDone: Boolean
});

export const Todo = mongoose.model('Todo', TodoSchema);