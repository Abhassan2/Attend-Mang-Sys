import "../src/Style/Courses.css";
import { useContext, useEffect, useState } from "react";
import AttendanceOverview from "../src/Components/AttendanceOverview";
import MyCourses from "../src/Components/MyCourses";
import { AttendEaseContext } from "../src/Context/AttendEaseContext";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

export default function Courses() {
  const { object } = useContext(AttendEaseContext);
  const [openMenu, setOpenMenu] = useState(null);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if(isActive){
      object.getSubjects("active");
    }else{
      object.getSubjects("readoff");
    }
  }, [isActive]);

  return (
    <div className="container">
      <div className="subject-container">
        <div>
          <h1
            className="primary-text"
            onClick={(e) => setIsActive(true)}
            style={{ borderBottom: isActive && "3px solid #0d6efd" }}
          >
            <div
              style={{
                background: isActive && "green",
                display: !isActive && "none",
              }}
            ></div>
            Active
          </h1>
          <h1
            className="primary-text"
            onClick={() => setIsActive(false)}
            style={{ borderBottom: !isActive && "3px solid #0d6efd" }}
          >
            <div
              style={{
                background: !isActive && "blue",
                display: isActive && "none",
              }}
            ></div>
            Read Off
          </h1>
        </div>
          <div className="card-container">
            {object.subjects?.map((subject, index) => (
              <div key={index} className="card">
                <div>
                  <div>{subject.subjectName.split(" ").map((el) => el[0])}</div>
                  <div>
                    <h1 className="primary-text">{subject.subjectName}</h1>
                    <p>{subject.subjectCode}</p>
                  </div>
                </div>
                <div
                  onClick={() => setOpenMenu(openMenu === index ? null : index)}
                >
                  <h2 className="tertiary-text">Syllabus & Topics</h2>
                  <KeyboardArrowDownRoundedIcon
                    className="arrowDown-icon"
                    style={{
                      transform:
                        openMenu === index ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </div>
                <div
                  className="dropDown"
                  style={{ display: openMenu === index ? "block" : "none" }}
                >
                  {subject.syllabus.length > 0 ? (
                    subject.syllabus.map((syl) => (
                      <div key={syl.module}>
                        <h2>{syl.module}</h2>
                        <p>{syl.topics}</p>
                      </div>
                    ))
                  ) : (
                    <p>No syllabus found</p>
                  )}
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
}
