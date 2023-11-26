import user from "../models/user";
import AWS from 'aws-sdk';
import { nanoid } from "nanoid";
import slugify from "slugify";

const awsConfig = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
    apiVersion: process.env.AWS_API_VERSION,
};

const S3 = new AWS.S3(awsConfig);

export const uploadImage = async (req, res) => {
    //console.log(req.body);
    try{
        const { image } = req.body;
        if (!image) return  res.status(400).send("No Image");

        // prepare the image
        const base64Data = new Buffer.from(
            image.replace(/^data:image\/\w+;base64,/,""),
            "base64"
        );

        const type = image.split(";")[0].split("/")[1];

        // image params
        const params = {
                Bucket: "educators-lms-bucket",
                Key: `${nanoid()}.${type}`,
                Body: base64Data,
                ACL: 'public-read',
                ContentEncoding: 'base64',
                ContentType: `image/${type}`,
        }
        // upload to s3
        S3.upload(params, (err, data) => {
            if(err){
                console.log(err);
                return res.sendStatus(400);
            } 
            console.log(data);
            res.send(data);
        });
    } catch(err){
        console.log(err);
    }
}

export const removeImage = async (req, res) => {
      try {
          const { image } = req.body;
          // image params
          const params = {
             Bucket: image.Bucket,
             Key: image.Key,
          }
          // send remove request to s3
          S3.deleteObject(params, (err, data) => {
             if(err) {
               console.log(err)
               res.sendStatus(400)     
             }
             res.send({ok: true});
          });
      } catch (err) {
            console.log(err);
      }
};





export const getUsers = async (req, res) => {
    console.log("Hello");
    try {
        const users = await user.find()
        return res.json(users)
    } catch (error) {
        
    }
}

export const getUser = async (req, res) => {
    try {
        // console.log(req.params.id);
        const users = await user.findOne({_id: req.params.id})
        return res.json(users)
    } catch (error) {
        
    }
}
export const getUsersId = async (req, res) => {
    // console.log("Hello");
    try {
        const users = await user.findOne({username:req.params.id})
  
      res.status(200).json(users._id);
  
    } catch (error) {
        
    }
  }

  export const getUsersName = async (req, res) => {
    // console.log("Hello");
    try {
        const users = await user.find()
  
        const usersName = users.map(u => u.username);
      res.status(200).json(usersName);
  
    } catch (error) {
        
    }
  }

  export const getSingleUsersName = async (req, res) => {
    // console.log("Hello");
    try {
        const users = await user.findOne({_id: req.params.id})
  
        
      res.status(200).json(users.username);
  
    } catch (error) {
        
    }
  }

export const delUser = async (req, res) => {
    console.log("Hello");
    // console.log(req.params.id);
    try {
        const users = await user.findOneAndDelete({_id: req.params.id})
       return res.json(users)

    } catch (error) {
        
    }
}

export const AddUser = async (req, res) => {
    try {
        //console.log(req.body);
        const { username, password,image } =  req.body;
        if (!username) return res.status(400).send("Name is required");
        if(!password || password.length < 5) {
            return res.status(400).send("Password is required and should be min 5 characters long");
        }   
        let userExist = await User.findOne({ username }).exec();
        if (userExist) return res.status(400).send("Username is already taken by some other user");

        
        /* hash passsword */
        const hashedPassword = await hashPassword(password);

        /* register new user */
        const user = new User({
                username,
                image,
                password: hashedPassword,
        });
        await user.save();
        
        //console.log("New user created:", user);
        return res.json({ ok: true });
    }
    catch (err){
        console.log(err);
        return res.status(400).send("Error: try again");
    }   
};

export const editUser = async (req, res) => {
    try {
        const users = await user.findOneAndUpdate({_id: req.params.id}, req.body)
        return res.json(users)
    } catch (error) {
        
    }
}
