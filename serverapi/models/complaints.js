import mongoose from "mongoose";
const { Schema } = mongoose;
const { ObjectId } = require('mongodb');

const complainSchema = new Schema({

   
    PatientID: ObjectId,
    description: {
        type: string,
        trim: true,
        required: true
    },
    
    status: {
        type: [String],
        
        enum: ["Pending", "In Progress", "Completed"]
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

export default mongoose.model('Complains', complainSchema);
