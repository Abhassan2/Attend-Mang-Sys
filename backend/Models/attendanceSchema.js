import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  subjectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject",
    required: true,
  },
  records: [
    {
      date: {
        type: Date,
        default: Date.now,
      },
      status: {
        type: String,
        enum: ["Present", "Absent"],
        required: true,
      },
      _id: false
    },
  ],
  attended: {
    type: Number,
    default: 0,
  },
  total: {
    type: Number,
    default: 0,
  },
  percentage: {
    type: Number,
    default: 0,
  },
});

// Utility method to recalc stats
attendanceSchema.methods.updateStats = function () {
  this.total = this.records.length;
  this.attended = this.records.filter(r => r.status === "Present").length;
  this.percentage = this.total > 0 ? (this.attended / this.total) * 100 : 0;
};

// Middleware: run before save
attendanceSchema.pre("save", function () {
  this.updateStats();
});


const attendanceModel = mongoose.model("Attendance", attendanceSchema);
export default attendanceModel;
