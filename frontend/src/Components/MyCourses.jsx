import { NavLink } from "react-router-dom";
import Card from "../Components/Card.jsx";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

export default function MyCourses() {
  return (
    <>
      <h1 className="primary-text">My Courses</h1>
      <NavLink to='/courses'>
        <p
            style={{
            position: "absolute",
            top: "0.5em",
            right: "0.5em",
            }}
        >
            see more <KeyboardArrowRightRoundedIcon />
        </p>
      </NavLink>
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
