import express from 'express';
const router = express.Router();


import {AddFrontEndLog } from "../controllers/frontend";

router.post("/frontendlog/add",AddFrontEndLog);

module.exports = router;

