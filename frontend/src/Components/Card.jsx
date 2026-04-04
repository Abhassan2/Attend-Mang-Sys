import { useContext, useState } from "react";
import DropDown from "./DropDown";
import { AttendEaseContext } from "../Context/AttendEaseContext";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

export default function Card() {
  const { object } = useContext(AttendEaseContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card-container">
      <div className="card">
        <div>
          <div>ACA</div>
          <div>
            <h1 className="primary-text">Advanced Computer Architecture</h1>
          </div>
        </div>
        <div onClick={() => setIsOpen(!isOpen)}>
          <h2 className="tertiary-text">
            <strong>Syllabus Topics</strong>
          </h2>
          <KeyboardArrowDownRoundedIcon
            className="arrowDown-icon"
            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </div>
      </div>
      {isOpen && <DropDown list={["content1", "content2", "content3"]} />}
    </div>
  );
}
