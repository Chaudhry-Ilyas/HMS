import Complains from "../models/complaints";

import ComplainsAudit from "../models/complaints_audit"
import { hashPassword } from "../utils/auth";
const BackendController = require("./backend")

export const AddComplain = async (req, res) => {

try {
    // Create a user record
    const {patientId,description,status}=req.body;
    // Create a doctor record and associate it with the user
    
    const complain = new Complains({
        patientId,
       description,
       status

    });
    await complain.save();

    

    res.status(201).json(complain);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while adding the Complain.' });
  }
}
export const getComplains = async (req, res) => {
    // console.log("Hello");
    try {
        const complains = await Complains.find()
        return res.json(complains)
    } catch (error) {
        
    }
}

export const getComplain = async (req, res) => {
   
    try {
        const complain = await Complains.findOne({_id: req.params.id})
        res.status(200).json(complain);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the list of Complain.' });
      }
}
export const editComplain = async (req, res) => {
  try {
      const complainId = req.params.id;
      const updatedData = req.body;

      // Find the user before the update
      const oldComplain = await Complains.findById(complainId);

      // Update the doctor's information
      const updatedComplain = await Complains.findByIdAndUpdate(
          { _id: complainId },
          updatedData,
          { new: true }
      );

      if (!updatedComplain) {
          return res.status(404).json({ error: 'Complain not found' });
      }

      // Update the associated user information

      // Log the changes in the UserAudit collection
      const newComplain = await Complains.findById(complainId);

      await ComplainsAudit.create({
          complainId: complainId,
          action: 'update',
          oldValue: oldComplain.toObject(),
          newValue: newComplain.toObject(),
      });

      res.status(200).json({ Complains: updatedComplain });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while updating the Complain.' });
  }
};

export const delComplain = async (req, res) => {
    // console.log("Hello");
    // console.log(req.params.id);
    try {
        const complain = await Complains.findOneAndDelete({_id: req.params.id})
       return res.json(complain)

    } catch (error) {
        
    }
}
