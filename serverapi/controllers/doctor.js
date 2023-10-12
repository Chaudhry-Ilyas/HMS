import User from "../models/user";
import Doctor from"../models/doctors"
import { hashPassword } from "../utils/auth";

export const AddDoctor = async (req, res) => {

try {
    // Create a user record
    const { password, ...userData } = req.body;
    const hashedPassword = await hashPassword(password);

    const user = new User({
        ...userData,
        password: hashedPassword,
      });
    await user.save();

    // Create a doctor record and associate it with the user
    const doctor = new Doctor({
      user: user._id,
      ...req.body, // Include other doctor-related attributes here
    });
    await doctor.save();

    res.status(201).json(doctor);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while adding the doctor.' });
  }
}
export const getDoctors = async (req, res) => {
    // console.log("Hello");
    try {
        const doctors = await Doctor.find()
        return res.json(doctors)
    } catch (error) {
        
    }
}

export const getDoctor = async (req, res) => {
   
    try {
        const doctors = await Doctor.findOne({_id: req.params.id}).populate('user');
        res.status(200).json(doctors);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the list of doctors.' });
      }
}

export const editDoctor = async (req, res) => {
    try {
        const { doctorId } = req.params;
        const updatedData = req.body;
    
        // Update the doctor's information
        const updatedDoctor = await Doctor.findByIdAndUpdate(doctorId, updatedData, { new: true });
    
        if (!updatedDoctor) {
          return res.status(404).json({ error: 'Doctor not found' });
        }
    
        // Update the associated user information
        const userId = updatedDoctor.user;
        const updatedUser = await User.findByIdAndUpdate(userId, updatedData, { new: true });
    
        res.status(200).json({ doctor: updatedDoctor, user: updatedUser });
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the doctor.' });
      }
}
export const delDoctor = async (req, res) => {
    // console.log("Hello");
    // console.log(req.params.id);
    try {
        const doctor = await Doctor.findOneAndDelete({_id: req.params.id})
       return res.json(doctor)

    } catch (error) {
        
    }
}
