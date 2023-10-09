import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({

    username: {
        type: String,
        trim: true,
        required: true
    },
    
    password: {
        type: String,
        trim: true,
        min: 5,
        max: 50,
    },
    image: {
        type: String,
        default: "/avatar-no-photo.png",
    },
    role: {
        type: [String],
        
        enum: ["Admin", "Doctor", "Nurse"]
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

export default mongoose.model('User', userSchema);
