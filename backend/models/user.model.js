import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema({
        username:{
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
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

export const User = mongoose.model('User', userSchema);