import Injection from"../models/dripinjections"
import { hashPassword } from "../utils/auth";
import User from '../models/user'

export const AddInjection = async (req, res) => {

try {
    // Create a user record
    const {nurseId,patientId,type,dosage,duration}=req.body;
    // Create a doctor record and associate it with the user
    
    const injections = new Injection({
       
        nurseId,
        patientId,
       type,
       dosage,
       duration

    });
    await injections.save();

    res.status(201).json(injections);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while adding the Injections.' });
  }
}




export const getInjections = async (req, res) => {
    // console.log("Hello");
    try {
        const injections = await Injection
      .find()
      .populate('patientId','firstname lastname')
      .exec();
      
    const injectionsWithPatientNames = injections.map(injection => {
        
      if (!injection.patientId) {
        return {
          ...injection.toObject(),
          patientName: 'Patient not found',
        };
      }
      const { _id, type,dosage,duration  } = injection;
      const { firstname, lastname } = injection.patientId; // Access FirstName and LastName
      const patientName = `${firstname} ${lastname}`;
      return {
        _id,
        type,
        dosage,
        duration,
        patientId: injection.patientId._id, // Return PatientID separately
        firstname,
        lastname,
      };
    });

    res.json(injectionsWithPatientNames);

    } catch (error) {
        
    }
}

export const getInjection = async (req, res) => {
   
    try {
        const injection = await Injection.findOne({_id: req.params.id})
        res.status(200).json(injection);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the list of Injection.' });
      }
}
// export const getAppointmentByUsername = async (req, res) => {
   
//     try {
//         const appointment = await Appointment
//       .findById(appointmentId)
//       .populate('PatientID', 'FirstName LastName')
//       .exec();

//     if (!appointment) {
//       return res.status(404).json({ error: 'Appointment not found' });
//     }

//     if (!appointment.PatientID) {
//       return res.status(404).json({ error: 'Patient not found for this appointment' });
//     }

//     const patientName = `${appointment.PatientID.FirstName} ${appointment.PatientID.LastName}`;

//     res.json({ patientName });

        
//       } catch (error) {
//         res.status(500).json({ error: 'An error occurred while fetching the list of Appointment.' });
//       }
// }


export const editInjection = async (req, res) => {
    try {
        const  injectionId  = req.params.id;
        const updatedData = req.body;
    
        // Update the doctor's information
        const updatedInjection = await Injection.findByIdAndUpdate({_id:injectionId}, updatedData, { new: true });
    
        if (!updatedInjection) {
          return res.status(404).json({ error: 'Injection not found' });
        }
    
        // Update the associated user information
       
        res.status(200).json({ Injection : updatedInjection});
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the Injection.' });
      }
}
export const delInjection = async (req, res) => {
    // console.log("Hello");
    // console.log(req.params.id);
    try {
        const injection = await Injection.findOneAndDelete({_id: req.params.id})
       return res.json(injection)

    } catch (error) {
        
    }
}
