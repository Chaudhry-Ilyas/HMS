import mongoose from "mongoose";
const { Schema } = mongoose;
const { ObjectId } = require('mongodb');

const appointmentSchema = new Schema({

    doctorId: { type: Schema.Types.ObjectId, ref: 'Doctors' },
    nurseId: { type: Schema.Types.ObjectId, ref: 'Nurse' },
    patientId: { type: Schema.Types.ObjectId, ref: 'Patients' },
    date: {
        type: Date,
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

export default mongoose.model('Appointments', appointmentSchema);
