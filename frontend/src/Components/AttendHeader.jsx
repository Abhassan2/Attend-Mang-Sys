import HeaderBg from '../assets/header-bg.jpeg'

export default function AttendHeader() {
  return (
    <div className='attend-header white'>
        <img src={HeaderBg} alt="img" />
        <div>
            <p>Attendance</p>
            <h1>88% Present</h1>
            <p>This Semester</p>
        </div>
    </div>
  )
}
