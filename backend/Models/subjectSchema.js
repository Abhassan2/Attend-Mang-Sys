import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
  subjectName: {
    type: String,
    required: true,
    unique: true
  },
  subjectCode: {
    type: String,
    unique: true
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
  syllabus: [
    {
      module: {
        type: String,
      },
      topics: {
        type: String,
      }
    }
  ],
  isActive: {
    type: Boolean,
    default: true
  },
  isReadOff: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const subjectModel = mongoose.model('Subject', subjectSchema);
export default subjectModel;
