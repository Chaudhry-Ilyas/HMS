import Attendance from"../models/attendance"
import { hashPassword } from "../utils/auth";
import User from '../models/user'
import Doctors from '../models/doctors'

export const AddAttendance = async (req, res) => {

try {
    // Create a user record
    const {userId,username,date,status}=req.body;
    // Create a doctor record and associate it with the user
    
    const attendance = new Attendance({
        username,
        userId,
       date,
       status

    });
    await attendance.save();

    res.status(201).json(attendance);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while adding the Attendance.' });
  }
}


export const getUsernameAttendance = async (req, res) => {
    
    try {
        
                const attendanceRecords = await Attendance.find()
        .exec();
        res.send(attendanceRecords)
      // Create an array of objects with attendance and user data
      const dataForFrontend = [];
  
      for (const attendance of attendanceRecords) {
        const userId = attendance.userId; // User identifier
               
        // Find the user associated with this userId
        const user = await User.findOne({ _id: userId });
  
        if (user) {
          dataForFrontend.push({
            _id:attendance._id,
            userId:attendance.userId,
            username: user.username, // Username from Users table
            date: attendance.date,
            status: attendance.status,
            // Other attendance-related attributes
          });
        }
      }
  
      res.json(dataForFrontend);
    } catch (error) {
        
    }
}


export const getAttendances = async (req, res) => {
    // console.log("Hello");
    try {
        const attendance = await Attendance.find()
        return res.json(attendance)
    } catch (error) {
        
    }
}

export const getDoctorsAttendances = async (req, res) => {
  // console.log("Hello");
  try {
   const newdoctors= Doctors.find().populate('user').exec();
    // Extract doctor IDs

  
    // Find attendances for doctors
    const doctorswithuser = newdoctors.map(doctor => {
        
     
      const { _id, date, status } = doctor;
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
    res.json(doctorswithuser);
  } catch (error) {
      
  }
}
export const getNursesAttendances = async (req, res) => {
  // console.log("Hello");
  try {
      const attendance = await Attendance.find()
      return res.json(attendance)
  } catch (error) {
      
  }
}
export const getAttendance = async (req, res) => {
   
    try {
        const attendance = await Attendance.findOne({_id: req.params.id})
        res.status(200).json(attendance);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the list of Attendance.' });
      }
}

export const editAttendance = async (req, res) => {
    try {
        const  attendanceId  = req.params.id;
        const updatedData = req.body;
    
        // Update the doctor's information
        const updatedAttendance = await Attendance.findByIdAndUpdate({_id:attendanceId}, updatedData, { new: true });
    
        if (!updatedAttendance) {
          return res.status(404).json({ error: 'Attendance not found' });
        }
    
        // Update the associated user information
       
        res.status(200).json({ Attendance : updatedAttendance});
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the Attendance.' });
      }
}
export const delAttendance = async (req, res) => {
    // console.log("Hello");
    // console.log(req.params.id);
    try {
        const attendance = await Attendance.findOneAndDelete({_id: req.params.id})
       return res.json(attendance)

    } catch (error) {
        
    }
}
