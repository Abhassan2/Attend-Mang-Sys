import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./Config/db.js";

// Routers
import userRouter from "./routes/userRoutes.js";
import lectureRouter from "./routes/lectureRoutes.js";
import subjectRouter from "./routes/subjectRoutes.js";
import attendanceRouter from "./routes/attendanceRoutes.js";
import adminRouter from "./routes/adminRoutes.js";

// Create an Express app
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

// connect DB
connectDB();
app.use(cors());
app.use(express.json());

// endpoint api
app.use("/api/user", userRouter);
app.use("/api/lectures", lectureRouter);
app.use("/api/subjects", subjectRouter);
app.use("/api/attendance", attendanceRouter);

app.use("/api/admin", adminRouter);

// Not match any endpoint api
app.use(async (req, res) => {
  res.status(404).json({ message: "Page not found" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
