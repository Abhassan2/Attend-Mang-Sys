import SchoolIcon from "@mui/icons-material/School";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

export default function CoursesOverviewUi() {
  return (
    <div className="CoursesOverviewUi ui-container">
      <div>
        <SchoolIcon className="icon" />
        <div>
          <h1 className="primary-text" style={{ color: "white", letterSpacing:"1px" }}>
            Courses Overview
          </h1>
          <p
            className="secondary-text"
            style={{ color: "rgba(255,255,255,0.9" }}
          >
            View and manage your
          </p>
        </div>
      </div>
      <p className="secondary-text" style={{ color: "rgba(255,255,255,0.9" }}>
        view active courses <ArrowForwardIosRoundedIcon />
      </p>
    </div>
  );
}
