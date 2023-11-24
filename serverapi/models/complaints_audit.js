import mongoose from "mongoose";
const { Schema } = mongoose;



const complainsAuditSchema = new mongoose.Schema({
    complainId: { type: mongoose.Schema.Types.ObjectId, ref: 'Complains' },
    action: String,
    timestamp: { type: Date, default: Date.now },
    oldValue: Object,
    newValue: Object,
  });
  
  // Create the UserAudit model
export default mongoose.model('ComplainsAudit', complainsAuditSchema);

