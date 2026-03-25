import { useContext } from "react";
import AttendanceOverview from "../src/Components/AttendanceOverview";
import MyCourses from "../src/Components/MyCourses";
import { AttendEaseContext } from "../src/Context/AttendEaseContext";

export default function Courses() {
  const {object} = useContext(AttendEaseContext);

  return (
    <div className="container">
      <AttendanceOverview
        overview={{ msg: "Attendance Overview", totalPercent: 82 }}
      />
      <div className="myCourses-container subContainer">
        <MyCourses />
      </div>
    </div>
  );
}
