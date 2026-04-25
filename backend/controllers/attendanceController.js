import attendanceModel from "../Models/attendanceSchema.js";

const getAttendance = async (req, res) => {
  try {
    const userId = req.params.id;
    if (!userId) {
      return res.json({success:false, message: "something error, Please try again" });
    }

    const attendance = await attendanceModel.find({
      studentId: userId,
    }).populate("subjectId");

    res.json({success:true, attendance});
  } catch (error) {
    console.error(error);
    res.json({success:false, message: error.meassge });
  }
}

const postAttendance = async (req, res)=>{
  try {
    const {studentId, subjectId, records} = req.body;
    if(!studentId || !subjectId || !records){
      return res.json({success:false, message: "something error, Please try again" });
    }

    const newAttendance = new attendanceModel({
      studentId,
      subjectId,
      records
    });
    await newAttendance.save();
    res.json({success:true});
  } catch (error) {
    console.error(error);
    res.json({success:false, message: error.meassge });
  }
}

export { getAttendance, postAttendance };