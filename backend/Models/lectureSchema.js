import mongoose from "mongoose";

const lectureSchema = new mongoose.Schema({
  subjects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject",
    required: true
  }],
  day: {
    type: String,
    required: true,
    enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
  startTime: {
    type: String,
    required: true
  },
  endTime: {
    type: String,
    required: true
  },
  room: {
    type: String,
    required: true
  },
});

const lecturesModel = mongoose.model('Lecture', lectureSchema);
export default lecturesModel;
