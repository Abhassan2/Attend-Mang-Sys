import express from 'express';
import { getLectures, postLectures } from '../controllers/lecturesController.js';
import authToken from '../middleware/authToken.js';

const lectureRouter = express.Router();

lectureRouter.get("/day/:day",authToken, getLectures);
lectureRouter.post("/",authToken, postLectures);

export default lectureRouter;