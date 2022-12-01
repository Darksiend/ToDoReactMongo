import mongoose from "mongoose";
const ToDoSchema = new mongoose.Schema(
    {
        todoName: { type: String, required: true },
        todoDescription: { type: String, required: true, unique: true },

    },
    { timestamps: true }
);

export default mongoose.model("ToDo", ToDoSchema);
