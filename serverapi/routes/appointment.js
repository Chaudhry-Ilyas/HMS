import express from 'express';
const router = express.Router();


import { AddAppointment, delAppointment, editAppointment, getAppointment, getAppointments } from "../controllers/appointments";

router.post("/addAppointment",AddAppointment);

router.get("/appointments",getAppointments);
router.put("/appointments/:id", editAppointment)

router.get("/appointment/:id", getAppointment)
router.delete("/appointment/:id", delAppointment)

module.exports = router;

