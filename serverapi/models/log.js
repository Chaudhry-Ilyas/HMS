import mongoose from "mongoose";
const { Schema } = mongoose;
const { ObjectId } = require('mongodb');

const logSchema = new Schema({

   
    fileName: {
        type: string,
        trim: true,
        required: true
    },
    
    functionName: {
        type: string,
        trim: true,
        required: true
        },
        Details: {
            type: string,
            trim: true,
            required: true
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

export default mongoose.model('Log', logSchema);
