import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
    title: { type: string,required: true},
    completed:{type:Boolean,default:false},
    });
const Todo= mongose.model('Todo',TodoSchema);
export default Todo;
