import SubjectModel from "../Models/subjectSchema.js";
import userModel from "../Models/userSchema.js";

const getSubjects = async (req, res) => {
  try {
    const {query} = req.query;
    if(query === "active"){
      const subjects = await SubjectModel.find({isActive: true});
      if (!subjects) {
        return res.json({success:false, message: "subjects'r not found" });
      }

      res.json({success:true, subjects});
    }

    if(query === "readoff"){
      const subjects = await SubjectModel.find({isReadOff: true});
      if (!subjects) {
        return res.json({success:false, message: "subjects'r not found" });
      }
      
      res.json({success:true, subjects});
    }

  } catch (error) {
    console.error(error);
    res.json({success:false, message: error.meassge });
  }
}

const postSubjects = async (req, res) => {
  try {
    const { subjectName, subjectCode, teacherEmail, syllabus } = req.body;
    if (!subjectName || !teacherEmail) {
      return res.json({success:false, message: "subjectName and teacherName is required" });
    }

    const students = await userModel.find({ role: "student" }).distinct("_id");
    const teacher = await userModel.find({
      email: teacherEmail,
      role: "teacher",
    });

    const newSubject = new SubjectModel({
      subjectName,
      subjectCode,
      syllabus,
      teacher: teacher[0]._id,
      students,
    });
    await newSubject.save();

    res.json({success:true, data:newSubject});
  } catch (error) {
    console.error(error);
    res.json({success:false, message: error.message });
  }
}

export { getSubjects, postSubjects };