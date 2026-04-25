import lecturesModel from "../Models/lectureSchema.js";
import subjectModel from "../Models/subjectSchema.js";
import { toMinutes } from "../helper.js";

const getLectures = async (req, res) => {
  try {
    const { day } = req.params;
    if (!day) {
      return res.json({success:false, message: "day is not defined" });
    }

    const lectures = await lecturesModel.find({ day })
      .populate({
        path: "subjects",
        select: "subjectName",
        populate: {
          path: "teacher",
          select: "name phoneNumber",
        },
      })
      .exec();
    lectures.sort((a, b) => toMinutes(a.startTime) - toMinutes(b.startTime));

    res.json({success:true, lectures});
  } catch (error) {
    console.log(error);
    res.json({success:false, message: error.message });
  }
}

const postLectures = async (req, res) => {
  try {
    const { subjectName, day, sTime, eTime, room } = req.body;
    if (!subjectName || !day || !sTime || !eTime) {
      return res.json({success:false, message: "fill all fields" });
    }
    const subject = await subjectModel.find({
      subjectName: subjectName,
    }).distinct("_id");

    const newLectures = new lecturesModel({
      subjects: subject,
      day: day,
      room: room,
      startTime: sTime,
      endTime: eTime,
    });

    await newLectures.save();
    res.json({success:true, data: newLectures});
  } catch (error) {
    console.error(error);
    res.json({success:false, message: error.meassge });
  }
}

export { getLectures, postLectures };