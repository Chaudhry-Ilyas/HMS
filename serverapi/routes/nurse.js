import express from 'express';
const router = express.Router();


import {AddNurse, delNurse, editNurse, getNurse, getNurses } from "../controllers/nurse";

router.post("/nurse/add",AddNurse);

router.get("/nurses",getNurses);
router.put("/nurse/:id", editNurse)

router.get("/nurse/:id", getNurse)

router.delete("/nurses/:id", delNurse)
module.exports = router;

