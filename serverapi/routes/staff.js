import express from 'express';
const router = express.Router();


import {AddStaff, delStaff, editStaff, getStaff, getStaffs } from "../controllers/staff";

router.post("/staff/add",AddStaff);

router.get("/staffs",getStaffs);
router.put("/staff/:id", editStaff)

router.get("/staff/:id", getStaff)

router.delete("/staffs/:id", delStaff)
module.exports = router;

