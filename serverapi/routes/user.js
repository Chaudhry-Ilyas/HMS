import express from "express";
const router = express.Router();


import {getUsers, delUser,editUser,getUser,uploadImage,removeImage, getUsersId, getUsersName, getSingleUsersName} from "../controllers/users"

router.get("/users", getUsers);
router.delete("/users/:id", delUser);
router.get("/user/:id", getUser)
router.get("/gettingusersId/:id",getUsersId)
router.get("/usersname",getUsersName)
router.get("/singleuser/name",getSingleUsersName)
router.put("/user/:id", editUser)
router.post("/user/upload-image",uploadImage);
router.post("/user/remove-image",removeImage);



module.exports = router;
