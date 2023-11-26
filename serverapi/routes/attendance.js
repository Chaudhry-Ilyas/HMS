import express from 'express';
const router = express.Router();


import { AddAttendance, delAttendance, editAttendance, getAttendance,  getAttendances, getDoctorsAttendances, getUsernameAttendance } from "../controllers/attendance";

router.post("/addAttendance",AddAttendance);

router.get("/attendances",getAttendances);
router.get("/attendancesDoctor",getDoctorsAttendances);

router.put("/attendances/:id", editAttendance)

router.get("/attendance/:id", getAttendance)
router.get("/attendancegetting", getUsernameAttendance)

router.delete("/attendance/:id", delAttendance)

module.exports = router;

