import '../src/Style/TimeTable.css';
import TTHeader from '../src/Components/TimeTableHeader.jsx'
import TimeTableCards from '../src/Components/TimeTableCards.jsx'
import WeeklyCalendar from '../src/Components/WeeklyCalendar.jsx'
import { useState } from 'react'

export default function TimeTable() {
  const [day, setDay] = useState(new Date().toLocaleString("en-US",{weekday:"short"}))

  const getDay = (d)=>{
    setDay(d)
  } 

  return (
    <div className='bg-[#F5F5F5] h-full timetable-container'>
      <div className='timetable-header flex flex-col sticky top-0 z-10 justify-around mb-3 p-3 gap-3 bg-[#007FFF] text-white text-xl font-semibold '>
        <TTHeader title={"Weekly Time-Table"} />
        <WeeklyCalendar getDay={getDay} />
      </div>
      <TimeTableCards className='timetable-cards' selectedDay={day} />
    </div>
  )
}
