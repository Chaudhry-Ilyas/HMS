import mongoose from "mongoose";
const { Schema } = mongoose;



const doctorsAuditSchema = new mongoose.Schema({
    doctorsId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctors' },
    action: String,
    timestamp: { type: Date, default: Date.now },
    oldValue: Object,
    newValue: Object,
  });
  
  // Create the UserAudit model
export default mongoose.model('DoctorsAudit', doctorsAuditSchema);

