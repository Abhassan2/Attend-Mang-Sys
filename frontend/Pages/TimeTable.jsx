import '../src/Style/TimeTable.css';
import TTHeader from '../src/Components/TimeTableHeader.jsx'
import TimeTableCards from '../src/Components/TimeTableCards.jsx'
import WeeklyCalendar from '../src/Components/WeeklyCalendar.jsx'
import { useState } from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { AttendEaseContext } from '../src/Context/AttendEaseContext.jsx';
import { HashLoader } from "react-spinners";

export default function TimeTable() {
  const {object} = useContext(AttendEaseContext);
  
  return (
    <div className='bg-[#F5F5F5] timetable-container'>
      <div className='timetable-header flex flex-col sticky top-0 z-10 justify-around mb-3 p-3 gap-3 bg-[#007FFF] text-white text-xl font-semibold '>
        <TTHeader title={"Weekly Time-Table"} />
        <WeeklyCalendar />
      </div>
      {object.loading ? (
            <div style={{ display: "flex", justifyContent: "center", marginTop: "12rem" }}>
              <HashLoader color="#36d7b7" size={40} />
            </div>
          ) : (<TimeTableCards className='timetable-cards' />)}
      {/* <TimeTableCards className='timetable-cards' /> */}
    </div>
  )
}
