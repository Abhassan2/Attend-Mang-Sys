import express from 'express';
import { getSubjects, postSubjects } from '../controllers/subjectController.js';
import authToken from '../middleware/authToken.js';

const subjectRouter = express.Router();

subjectRouter.get("/",authToken, getSubjects);
subjectRouter.post("/",authToken, postSubjects);

export default subjectRouter;