import BackEndLog from "../models/BackendLog";


export const AddBackEndLog = async (fileName,functionName,Details) => {

try {
    // Create a user record
   
    // Create a doctor record and associate it with the user
    
    const backend = await BackEndLog.create({
       fileName:fileName,
       functionName:functionName,
       Details:Details

    });

    

    res.status(201).json(backend);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while adding the BackendLog.' });
  }
}

