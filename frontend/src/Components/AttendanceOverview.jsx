export default function AttendanceOverview({ overview }) {
  return (
      <div className="overview-container">
        <h2>Attendance Overview {overview.msg}</h2>
        <h1 className="green">
          <strong> {overview.totalPercent}%</strong> Present
        </h1>
        {
          overview.totalPercent >= 75 ? (
            <p className="tertiary-font">
              <strong className="green">Keep it up!</strong> You are doing great!
            </p>
          ) : overview.totalPercent <= 50 ? (
            <p className="tertiary-font">
              <strong className="green">Don't worry!</strong> Keep trying—you'll
              get there!
            </p>
          ) : (
            <p className="tertiary-font">
              <strong className="green">Nice effort!</strong> You're on the right
              track!
            </p>
          )
        }
        <progress id="overallProgress" value="40" min="0" max="100"></progress>
        <div>Stay Consistent!</div>
      </div>
  );
}
