import { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { AttendEaseContext } from "../Context/AttendEaseContext";

export default function WeekCalendar({getDay}) {

  const {object} = useContext(AttendEaseContext)

  const [currentWeek, setCurrentWeek] = useState(dayjs());
  const [selectedDay, setSelectedDay] = useState(dayjs());

  // start of week
  const startDay = currentWeek.startOf("week");
  const days = Array.from({ length: 7 }).map((_, i) => startDay.add(i, "day"));

  useEffect(()=>{
    object.setDay(selectedDay.$d.toLocaleString("en-US",{weekday:"short"}));
  },[selectedDay]);

  return (
    <div className="p-1">

      {/* Navigation */}
        <div className="flex justify-between mb-1">
            <ArrowBackIosRoundedIcon 
                onClick={() =>
                setCurrentWeek(
                currentWeek.subtract(1, "week")
                )
            }
            />

            <h4>
            {currentWeek.format("MMMM YYYY")}
            </h4>

            <ArrowForwardIosRoundedIcon 
                onClick={() =>
                setCurrentWeek(
                currentWeek.add(1, "week")
                )
            }
            />
        </div>

      {/* Horizontal Days */}
        <div className="flex overflow-x-auto gap-7 snap-x">

            {days.map((day) => {
                const isSelected = selectedDay.isSame(day, "day");
                return ( 
                    <div
                        key={day}
                        onClick={()=>setSelectedDay(day)}
                        className={`
                        min-w-10
                        bg-transparent
                        text-center
                        text-white
                        h-fit
                        text-[13px]
                        transition-all
                        duration-200
                        ease-in
                        ${
                            isSelected? "bg-blue-600 px-1 scale-110 shadow-inner shadow-blue-900/70 rounded-xl": ""
                        }
                        `}
                    >
                        <p>{day.format("ddd")}</p>
                        <h3>{day.format("DD")}</h3>
                    </div>
                );
            })}

        </div>

    </div>
  );
}
