import express from 'express';
const router = express.Router();


import { AddAttendance, delAttendance, editAttendance, getAttendance,  getAttendances, getUsernameAttendance } from "../controllers/attendance";

router.post("/addAttendance",AddAttendance);

router.get("/attendances",getAttendances);
router.put("/attendances/:id", editAttendance)

router.get("/attendance/:id", getAttendance)
router.get("/attendancegetting", getUsernameAttendance)

router.delete("/attendance/:id", delAttendance)

module.exports = router;

