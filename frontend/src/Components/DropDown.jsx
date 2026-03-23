import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { useState } from "react";

export default function DropDown({list}) {
  const [openDropDown, setOpenDropDown] = useState(false);

  const handleDropDown = () => {
    setOpenDropDown(!openDropDown);
  };

  return (
    <div onClick={handleDropDown} className="dropDown">
      <KeyboardArrowDownRoundedIcon
        className="arrowDown-icon"
        style={{ transform: openDropDown ? "rotate(180deg)" : "rotate(0deg)" }}
      />
      <h2 className="tertiary-text">
        <strong>Syllabus Topics</strong>
      </h2>
      {
        openDropDown && (
            list.map((li, index)=>(
                <p key={index}>{li}</p>
            ))
        )
      }
    </div>
  );
}
