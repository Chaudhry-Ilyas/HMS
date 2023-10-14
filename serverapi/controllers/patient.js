import Patient from"../models/patients"
import { hashPassword } from "../utils/auth";

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
        const { patientId } = req.params;
        const updatedData = req.body;
    
        // Update the doctor's information
        const updatedPatient = await Patient.findByIdAndUpdate(patientId, updatedData, { new: true });
    
        if (!updatedPatient) {
          return res.status(404).json({ error: 'Patient not found' });
        }
    
        // Update the associated user information
       
        res.status(200).json({ patient: updatedPatient});
      } catch (error) {
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
