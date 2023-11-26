import express from 'express';
const router = express.Router();


import {AddPatient, delPatient, editPatient, getPatient, getPatients, getPatientsId } from "../controllers/patient";

router.post("/patient/add",AddPatient);

router.get("/patients",getPatients);
router.put("/patient/:id", editPatient)
router.get("/patients/ids",getPatientsId)
router.get("/patient/:id", getPatient)

router.delete("/patients/:id", delPatient)
module.exports = router;

