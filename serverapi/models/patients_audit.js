import mongoose from "mongoose";
const { Schema } = mongoose;



const patientsAuditSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patients' },
    action: String,
    timestamp: { type: Date, default: Date.now },
    oldValue: Object,
    newValue: Object,
  });
  
  // Create the UserAudit model
export default mongoose.model('PatientsAudit', patientsAuditSchema);

