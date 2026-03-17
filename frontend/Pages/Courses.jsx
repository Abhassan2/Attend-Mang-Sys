import AttendanceOverview from "../src/Components/AttendanceOverview"

export default function Courses() {
  return (
    <div className="container">
      <AttendanceOverview overview={{msg: "hello", totalPercent: 82}} />
      <div className="card-container subContainer">
        <h1>My Courses</h1>
      </div>
    </div>
  )
}
