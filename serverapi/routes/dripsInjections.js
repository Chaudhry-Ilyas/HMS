import express from 'express';
const router = express.Router();


import { AddInjection, delInjection, editInjection, getInjection, getInjections } from "../controllers/dripInjections";

router.post("/addInjection",AddInjection);

router.get("/injections",getInjections);
router.put("/injections/:id", editInjection)

router.get("/injection/:id", getInjection)
router.delete("/injection/:id", delInjection)

module.exports = router;

