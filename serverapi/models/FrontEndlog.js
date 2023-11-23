import mongoose from "mongoose";
const { Schema } = mongoose;
const { ObjectId } = require('mongodb');

const FrontEndlogSchema = new Schema({

   
    fileName: {
        type: String,
        trim: true,
        required: true
    },
    
    UIScreen: {
        type: String,
        trim: true,
        required: true
        },
        Details: {
            type: String,
            trim: true,
            required: true
            },
    
   
    Active:{
        type:Boolean,
        default:true
    }
 }, 
 
 {timestamps: true }

);

export default mongoose.model('FrontEndLog', FrontEndlogSchema);
