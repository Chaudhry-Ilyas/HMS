import mongoose from "mongoose";
const { Schema } = mongoose;
const { ObjectId } = require('mongodb');

const attendanceSchema = new Schema({

    userId: { type: String, 
        trim: true,
        required: true
         },
         username: { type: String, 
            trim: true,
            required: true
             },

    date: {
        type: Date,
        trim: true,
        required: true
    },
    status: {
        type: [String],
        
        enum: ["Absent", "Present", "Leave"]
    },
    
   
    stripe_account_id: "",
    stipe_seller: {},
    stipeSession: {},
    passwordResetCode: {
        data: String,
        default: "",
    },
    Active:{
        type:Boolean,
        default:true
    }
 }, 
 
 {timestamps: true }

);

export default mongoose.model('Attendance', attendanceSchema);
