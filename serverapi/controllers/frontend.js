import FrontEndLog from "../models/FrontEndlog";


export const AddFrontEndLog = async (fileName,UIScreen,Details) => {

try {
    // Create a user record
   
    // Create a doctor record and associate it with the user
    
    const frontend = await FrontEndLog.create({
       fileName:fileName,
       UIScreen:UIScreen,
       Details:Details

    });

    

    res.status(201).json(frontend);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while adding the FrontEndLog.' });
  }
}

