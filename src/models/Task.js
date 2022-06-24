import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
    {
        id: {type: String},
        description: {type: String, required: true},
        date: {type: String, required: true},
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true},
    }
);

const task = mongoose.model('task', taskSchema);

export default task;