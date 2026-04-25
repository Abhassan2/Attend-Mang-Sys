import dotenv from 'dotenv';
import express from 'express';
import connectDB from '../Config/db.js';
import userModel from '../Models/userSchema.js';
import SubjectModel from '../Models/subjectSchema.js';
import TimetableModel from '../Models/timetableSchema.js';
import AttendanceModel from '../Models/attendanceSchema.js';
import { userData } from '../Data/data.js';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

// Create an Express app
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

// connect DB
connectDB();
app.use(express.json());





// Add Attendance
app.post("/attendance", async (req, res) => {
  try {
    const { studentName, subjectName, records } = req.body;
    const std = await userModel.findOne({name: studentName});
    const sub = await SubjectModel.findOne({subjectName});
    
    const attendance = new AttendanceModel({
      studentId: std._id,
      subjectId: sub._id,
      records,
    });

    await attendance.save();
    res.status(201).json(attendance);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Insert single data subject
app.post("/subject", async (req, res)=>{
    try {
        const {subjectName, subjectCode, teacherEmail} = req.body;

        if(!(subjectName && subjectCode && teacherEmail)){
            res.status(400).send({message: "Fill all fields"});
        }
        const teacher = await userModel.findOne({email:teacherEmail, role:"teacher"});
        const studentsId = await userModel.find({role:"student"}).distinct("_id");
        
        const newSubject = new SubjectModel({
            subjectName: subjectName,
            subjectCode: subjectCode,
            teacherId: teacher._id,
            students: studentsId,
        });

        await newSubject.save();
        res.send(newSubject);
    } catch (error) {
        console.log(error);
    }
})


// Insert Many Users
app.post('/insert', async (req, res) => {
  try{
    const newUser = await userModel.insertMany(userData);
    console.log(req.body);
    res.json(newUser);
  }catch(err){
    console.log(err);
    res.status(500).send("Error inserting users");
  }
});

// Delete Many Users
app.delete('/delete', async (req, res) => {
  try {
    const result = await userModel.deleteMany({});
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting users");
  }
});

app.get("/migrate", async (req, res) => {
  try {
    await SubjectModel.updateMany(
      {},
      { $rename: { "teacherId": "teacher" } }
    );
    res.send("Migration complete");
  } catch (err) {
    res.status(500).send(err.message);
  }
});


// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
