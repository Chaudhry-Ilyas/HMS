import Appointment from"../models/appointments"
import { hashPassword } from "../utils/auth";
import User from '../models/user'

export const AddAppointment = async (req, res) => {

try {
    // Create a user record
    const {doctorId,nurseId,patientId,date,status}=req.body;
    // Create a doctor record and associate it with the user
    
    const appointment = new Appointment({
        doctorId,
        nurseId,
        patientId,
       date,
       status

    });
    await appointment.save();

    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while adding the Appointment.' });
  }
}




export const getAppointments = async (req, res) => {
    // console.log("Hello");
    try {
        const appointments = await Appointment
      .find()
      .populate('patientId','firstname lastname')
      .exec();
      
    const appointmentsWithPatientNames = appointments.map(appointment => {
        
      if (!appointment.patientId) {
        return {
          ...appointment.toObject(),
          patientName: 'Patient not found',
        };
      }
      const { _id, date, status } = appointment;
      const { firstname, lastname } = appointment.patientId; // Access FirstName and LastName
      const patientName = `${firstname} ${lastname}`;
      return {
        _id,
        date,
        status,
        patientId: appointment.patientId._id, // Return PatientID separately
        firstname,
        lastname,
      };
    });

    res.json(appointmentsWithPatientNames);

    } catch (error) {
        
    }
}

export const getAppointment = async (req, res) => {
   
    try {
        const appointment = await Appointment.findOne({_id: req.params.id})
        res.status(200).json(appointment);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the list of Appointment.' });
      }
}
export const getAppointmentByUsername = async (req, res) => {
   
    try {
        const appointment = await Appointment
      .findById(appointmentId)
      .populate('PatientID', 'FirstName LastName')
      .exec();

    if (!appointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }

    if (!appointment.PatientID) {
      return res.status(404).json({ error: 'Patient not found for this appointment' });
    }

    const patientName = `${appointment.PatientID.FirstName} ${appointment.PatientID.LastName}`;

    res.json({ patientName });

        
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the list of Appointment.' });
      }
}


export const editAppointment = async (req, res) => {
    try {
        const  appointmentId  = req.params.id;
        const updatedData = req.body;
    
        // Update the doctor's information
        const updatedAppointment = await Appointment.findByIdAndUpdate({_id:appointmentId}, updatedData, { new: true });
    
        if (!updatedAppointment) {
          return res.status(404).json({ error: 'Appointment not found' });
        }
    
        // Update the associated user information
       
        res.status(200).json({ Appointment : updatedAppointment});
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the Appointment.' });
      }
}
export const delAppointment = async (req, res) => {
    // console.log("Hello");
    // console.log(req.params.id);
    try {
        const appointment = await Appointment.findOneAndDelete({_id: req.params.id})
       return res.json(appointment)

    } catch (error) {
        
    }
}
