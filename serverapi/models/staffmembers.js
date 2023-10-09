import mongoose from "mongoose";
const { Schema } = mongoose;

const staffSchema = new Schema({

    firstname: {
        type: String,
        trim: true,
        required: true
    },
    lastname: {
        type: String,
        trim: true,
        required: true
    },
    
    email: {
        type: String,
        trim: true,
        required: true
    },
    attendance: {
        type: String,
        trim: true,
        required: true
    },
    role: {
        type: [String],
        
        enum: ["Sweeper", "Receptionist", "Guard"]
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

export default mongoose.model('StaffMembers', staffSchema);
