import User from "../models/user";
import Nurse from"../models/nurse"
import { hashPassword } from "../utils/auth";

export const AddNurse = async (req, res) => {

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
    const nurse = new Nurse({
      user: user._id,
      ...req.body, // Include other doctor-related attributes here
    });
    await nurse.save();

    res.status(201).json(nurse);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while adding the Nurse.' });
  }
}
export const getNurses = async (req, res) => {
    // console.log("Hello");
    try {
        const nurses = await Nurse.find()
        return res.json(nurses)
    } catch (error) {
        
    }
}

export const getNurse = async (req, res) => {
   
    try {
        const nurses = await Nurse.findOne({_id: req.params.id}).populate('user');
        res.status(200).json(nurses);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the list of Nurses.' });
      }
}

export const editNurse = async (req, res) => {
    try {
        const { nurseId } = req.params;
        const updatedData = req.body;
    
        // Update the doctor's information
        const updatedNurse = await Nurse.findByIdAndUpdate(nurseId, updatedData, { new: true });
    
        if (!updatedNurse) {
          return res.status(404).json({ error: 'Nurse not found' });
        }
    
        // Update the associated user information
        const userId = updatedNurse.user;
        const updatedUser = await User.findByIdAndUpdate(userId, updatedData, { new: true });
    
        res.status(200).json({ doctor: updatedDoctor, user: updatedUser });
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the Nurse.' });
      }
}
export const delNurse = async (req, res) => {
    // console.log("Hello");
    // console.log(req.params.id);
    try {
        const nurse = await Nurse.findOneAndDelete({_id: req.params.id})
       return res.json(nurse)

    } catch (error) {
        
    }
}
