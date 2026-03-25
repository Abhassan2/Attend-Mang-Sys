import TTData from "../../Data/TT.js";
import { useContext, useEffect, useState } from "react";
import { AttendEaseContext } from "../Context/AttendEaseContext.jsx";

export default function TimeTableCards({ selectedDay }) {
  const { object } = useContext(AttendEaseContext);

  const [timeTableData, setTimeTableData] = useState([]);

  useEffect(() => {
    const filtered = TTData.filter((data) => data.day === object.day);
    setTimeTableData(filtered);
  }, [object.day]);

  return (
    <div className=" mx-2 my-2 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl">
      {/* TimeTableCards */}
      {timeTableData.length === 0 ? (
        <p className="text-2xl font-semibold text-center mt-40">
          Today, no classes scheduled
        </p>
      ) : (
        timeTableData.map((data, index) => (
          <div
            key={index}
            className="bg-[#EAEFEF] mb-2 pb-1 flex text-[#7d7d7d] font-medium rounded-tl-2xl rounded-tr-2xl rounded-2xl"
          >
            <div className="text-[14px] py-4 px-3 ">
              <p className="light-text pb-4 mb-3 border-b">{data.startTime} AM</p>
              <p className="light-text  ">{data.endTime} AM</p>
            </div>
            <div className="bg-[#FAFAFA] shadow-[4px_4px_6px_rgba(0,0,0,0.2),-4px_0_6px_rgba(0,0,0,0.1)] flex-1 relative p-2 mt-1 mr-1 rounded-2xl ">
              <h1 className="text text-xl">{data.subject}</h1>
              <div className="flex justify-between border-b pb-2">
                <p className="light-text  text-[14px] ">{data.teacher}</p>
                <p className="light-text ">{data.room}</p>
              </div>
              <div className="flex justify-between">
                <p className="text">Alert Message</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
