import mongoose from "mongoose";
const { Schema } = mongoose;





const complainSchema = new Schema({

   
    patientId: {
        type: String,
        trim: true,
        required: true
      },

    description: {
        type: String,
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

