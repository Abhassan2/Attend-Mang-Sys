import express from 'express';
import { getAttendance, postAttendance } from '../controllers/attendanceController.js';
import authToken from '../middleware/authToken.js';

const attendanceRouter = express.Router();

attendanceRouter.get("/:id",authToken, getAttendance);
attendanceRouter.post("/", postAttendance);

export default attendanceRouter;