import mongoose from "mongoose";
const { Schema } = mongoose;
const { ObjectId } = require('mongodb');

const attendanceSchema = new Schema({

    UserID: ObjectId,
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
