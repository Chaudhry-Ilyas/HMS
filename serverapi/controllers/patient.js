// import {BackendLog} from "../controllers/backend";
import Patient from"../models/patients"
import patients_audit from "../models/patients_audit";
import { hashPassword } from "../utils/auth";
const BackendController= require("./backend")

export const AddPatient = async (req, res) => {

try {
    // Create a user record
    const {firstname,lastname,gender,contactdetails,dateofbirth}=req.body;
    // Create a doctor record and associate it with the user
    console.log(req.body)
    const patient = new Patient({
       firstname,
       lastname,
       gender,
       contactdetails,
       dateofbirth

    });
    await patient.save();

    res.status(201).json(patient);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while adding the Patient.' });
  }
}
export const getPatients = async (req, res) => {
    // console.log("Hello");
    try {
        const patients = await Patient.find()
        return res.json(patients)
    } catch (error) {
        
    }
}
export const getPatientsId = async (req, res) => {
  // console.log("Hello");
  try {
      const patients = await Patient.find()

      const patientIds = patients.map(patient => patient._id.toString());
    res.status(200).json(patientIds);

  } catch (error) {
      
  }
}

export const getPatient = async (req, res) => {
   
    try {
        const patient = await Patient.findOne({_id: req.params.id})
        res.status(200).json(patient);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the list of Patient.' });
      }
}

export const editPatient = async (req, res) => {
    try {
        const  patientId  = req.params.id;
        const updatedData = req.body;
        const oldPatient = await Patient.findById(patientId);
    
        // Update the doctor's information
        const updatedPatient = await Patient.findByIdAndUpdate({_id:patientId}, updatedData, { new: true });
    
        if (!updatedPatient) {
          return res.status(404).json({ error: 'Patient not found' });
        }
        const newPatient = await Patient.findById(patientId);

        await patients_audit.create({
            patientId: patientId,
            action: 'update',
            oldValue: oldPatient.toObject(),
            newValue: newPatient.toObject(),
        });

        // Update the associated user information
       
        res.status(200).json({ Patient: updatedPatient});
      } catch (error) {
        BackendController.AddBackEndLog("Patient.js","EditPatient",error.message)

        res.status(500).json({ error: 'An error occurred while updating the Patient.' });
      }
}
export const delPatient = async (req, res) => {
    // console.log("Hello");
    // console.log(req.params.id);
    try {
        const patient = await Patient.findOneAndDelete({_id: req.params.id})
       return res.json(patient)

    } catch (error) {
        
    }
}
