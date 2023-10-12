import express from 'express';
const router = express.Router();


import {AddDoctor, delDoctor, editDoctor, getDoctor, getDoctors } from "../controllers/doctor";

router.post("/doctor/add",AddDoctor);

router.get("/doctors",getDoctors);
router.put("/doctor/:id", editDoctor)

router.get("/doctor/:id", getDoctor)

router.delete("/doctors/:id", delDoctor)
module.exports = router;

