import mongoose from "mongoose";
const { Schema } = mongoose;
const { ObjectId } = require('mongodb');

const dripinjSchema = new Schema({

    NurseID: ObjectId,
    PatientID: ObjectId,
    type: {
        type: string,
        trim: true,
        required: true
    },
    
    dosage: {
        type: string,
        trim: true,
        required: true
        },
        duration: {
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

export default mongoose.model('DripInjections', dripinjSchema);
