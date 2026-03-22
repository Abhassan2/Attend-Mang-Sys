import AttendanceOverview from "../src/Components/AttendanceOverview"

export default function Courses() {
  return (
    <div className="container">
      <AttendanceOverview overview={{msg: "Attendance Overview", totalPercent: 82}} />
      <div className="card-container subContainer">
        <h1 className="primary-text">My Courses</h1>
        <div>
          <div className="card">
            <div>
              <div>ACA</div>
              <div>
                <h1 className="primary-text">Advanced Computer Architecture</h1>
              </div>
            </div>
            <div>
              <h2 className="secondary-text"><strong>Syllabus Topics</strong></h2>
              <p>content</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
