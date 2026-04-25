import TTData from "../../Data/TT.js";
import { useContext, useEffect, useState } from "react";
import { AttendEaseContext } from "../Context/AttendEaseContext.jsx";

export default function TimeTableCards() {
  const { object } = useContext(AttendEaseContext);
  
  useEffect(() => {
    object.getTimetable(object.day);
  }, [object.day]);

  return (
    <div className="timeTableCard mx-2 my-2 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl">
      {/* TimeTableCards */}
      {object.timeTableData?.length === 0 ? (
        <p className="text-2xl font-semibold text-center mt-40">
          Today, no classes scheduled
        </p>
      ) : (
        object.timeTableData?.map((tt, index) => (
          <div
            key={index}
            className=" bg-[#EAEFEF] mb-2 pb-1 flex text-[#7d7d7d] font-medium rounded-tl-2xl rounded-tr-2xl rounded-2xl"
          >
            <div className="time-info text-[14px] py-4 px-3 ">
              <p className="light-text pb-4 mb-3 border-b">{tt.startTime}</p>
              <p className="light-text  ">{tt.endTime}</p>
            </div>
            <div className="details bg-[#FAFAFA] shadow-[4px_4px_6px_rgba(0,0,0,0.2),-4px_0_6px_rgba(0,0,0,0.1)] flex-1 relative p-2 mt-1 mr-1 rounded-2xl ">
              <h1 className="text text-xl">{tt.subjects[0].subjectName}</h1>
              <div className="flex justify-between border-b pb-2">
                <p className="light-text  text-[14px] ">{tt.subjects[0].teacher.name}</p>
                <p className="light-text ">Room: {tt.room}</p>
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
