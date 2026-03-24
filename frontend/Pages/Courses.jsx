import AttendanceOverview from "../src/Components/AttendanceOverview";
import Card from "../src/Components/Card";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import MyCourses from "../src/Components/MyCourses";

export default function Courses() {
  return (
    <div className="container">
      <AttendanceOverview
        overview={{ msg: "Attendance Overview", totalPercent: 82 }}
      />
      <div className="myCourses subContainer">
        <MyCourses />
      </div>
    </div>
  );
}
