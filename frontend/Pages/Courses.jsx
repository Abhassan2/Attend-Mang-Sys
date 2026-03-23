import AttendanceOverview from "../src/Components/AttendanceOverview";
import Card from "../src/Components/Card";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";

export default function Courses() {
  return (
    <div className="container">
      <AttendanceOverview
        overview={{ msg: "Attendance Overview", totalPercent: 82 }}
      />
      <div className="card-container subContainer">
        <h1 className="primary-text">My Courses</h1>
        <p style={{ marginInline: "0.5rem" }}>
          <FiberManualRecordRoundedIcon
            style={{
              height: "1rem",
              width: "1rem",
              color: "green",
            }}
          />
          Active
        </p>
        <MoreVertRoundedIcon
          style={{
            zIndex: 101,
            position: "absolute",
            top: "0.5rem",
            right: "0.5rem",
          }}
        />
        <div>
          <Card />
          <Card />
          <Card />
          {/* <Card />
          <Card />
          <Card /> */}
        </div>
      </div>
    </div>
  );
}
