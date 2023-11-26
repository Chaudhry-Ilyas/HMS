import express from 'express';
const router = express.Router();


import {AddNurse, delNurse, editNurse, getNurse, getNurseByUserId, getNurses, getNursesId } from "../controllers/nurse";

router.post("/nurse/add",AddNurse);

router.get("/nurses",getNurses);
router.put("/nurse/:id", editNurse)

router.get("/nurse/:id", getNurse)
router.get("/nurses/ids",getNursesId)
router.get("/nurseUser/:id",getNurseByUserId)

router.delete("/nurses/:id", delNurse)
module.exports = router;

