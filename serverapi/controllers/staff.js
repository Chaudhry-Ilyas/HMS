import User from "../models/user";
import Staff from"../models/staffmembers"
import { hashPassword } from "../utils/auth";

export const AddStaff = async (req, res) => {

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
    const staff = new Staff({
      user: user._id,
      ...req.body, // Include other doctor-related attributes here
    });
    await staff.save();

    res.status(201).json(staff);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while adding the Staff.' });
  }
}
export const getStaffs = async (req, res) => {
    // console.log("Hello");
    try {
        const staff = await Staff.find()
        return res.json(staff)
    } catch (error) {
        
    }
}

export const getStaff = async (req, res) => {
   
    try {
        const staffs = await Staff.findOne({_id: req.params.id}).populate('user');
        res.status(200).json(staffs);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the list of Staff.' });
      }
}

export const editStaff = async (req, res) => {
    
        try {
            
          const  staffId  = req.params.id;
          const updatedData = req.body;
          // Update the doctor's information
          
          const updatedStaff = await Staff.findByIdAndUpdate({_id:staffId}, updatedData, { new: true });
          console.log(updatedData);
      
          if (!updatedStaff) {
            return res.status(404).json({ error: 'Staff not found' });
          }
      
          // Update the associated user information
          const userId = updatedStaff.user;
          const updatedUser = await User.findByIdAndUpdate({_id:userId}, updatedData, { new: true });
      
          res.status(200).json({ Staff: updatedStaff, User: updatedUser });

           
          } catch (error) {
            res.status(500).json({ error: 'An error occurred while updating the Staff.' });
          }
        
}
export const delStaff = async (req, res) => {
    // console.log("Hello");
    // console.log(req.params.id);
    try {
        const staff = await Staff.findOneAndDelete({_id: req.params.id})
       return res.json(staff)

    } catch (error) {
        
    }
}
