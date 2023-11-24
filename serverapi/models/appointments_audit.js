import mongoose from "mongoose";
const { Schema } = mongoose;



const appointmentsAuditSchema = new mongoose.Schema({
    appointmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointments' },
    action: String,
    timestamp: { type: Date, default: Date.now },
    oldValue: Object,
    newValue: Object,
  });
  
  // Create the UserAudit model
export default mongoose.model('AppointmentsAudit', appointmentsAuditSchema);

