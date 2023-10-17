import express from 'express';
const router = express.Router();


import {AddComplain, delComplain, editComplain, getComplain, getComplains } from "../controllers/complains";

router.post("/complain/add",AddComplain);

router.get("/complains",getComplains);
router.put("/complains/:id", editComplain)

router.get("/complain/:id", getComplain)

router.delete("/complain/:id", delComplain)
module.exports = router;

