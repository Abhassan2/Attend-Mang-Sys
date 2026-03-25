import { useContext } from "react";
import DropDown from "./DropDown";
import { AttendEaseContext } from "../Context/AttendEaseContext";

export default function Card() {
  const {object} = useContext(AttendEaseContext);

  return (
    <div className="card">
      <div>
        <div>ACA</div>
        <div>
          <h1 className="primary-text">Advanced Computer Architecture</h1>
        </div>
      </div>
      <DropDown list={["content1","content2","content3"]} />
    </div>
  );
}
