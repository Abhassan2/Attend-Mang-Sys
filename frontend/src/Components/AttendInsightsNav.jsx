import {NavLink} from 'react-router-dom';

export default function AttendInsightsNav() {
  return (
    <div className='attend-insights-nav'>
      <NavLink to='overall' className="nav">Overall</NavLink>
      <NavLink to='subjects' className="nav">Subjects</NavLink>
    </div>
  )
}
