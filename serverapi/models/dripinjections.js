import mongoose from "mongoose";
const { Schema } = mongoose;
const { ObjectId } = require('mongodb');

const dripinjSchema = new Schema({

   
    nurseId: { type: Schema.Types.ObjectId, ref: 'Nurse' },
    patientId: { type: Schema.Types.ObjectId, ref: 'Patients' },
    type: {
        type: String,
        trim: true,
        required: true
    },
    
    dosage: {
        type: String,
        trim: true,
        required: true
        },
        duration: {
            type: String,
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
