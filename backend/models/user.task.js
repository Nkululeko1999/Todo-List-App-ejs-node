import mongoose from "mongoose";

const {Schema} = mongoose;

const taskSchema = new Schema({
    tasks: [
        {
          dayOfTask: {
              type: Date,
          },
          description: {
              type: String,
              unique: true,
              required: true,
          },
          dueDate: Date,
          taskStatus: {
              type: String,
              required: true,
          },
        },
      ]
});

export const Task = mongoose.model('Task', taskSchema);