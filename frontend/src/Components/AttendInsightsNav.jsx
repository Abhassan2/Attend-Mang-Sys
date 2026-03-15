import {NavLink} from 'react-router-dom';

export default function AttendInsightsNav() {
  return (
    <div className='attend-insights-nav'>
      <NavLink to='overall' className="active-text">Overall</NavLink>
      <NavLink to='subjects' className="active-text">Subjects</NavLink>
    </div>
  )
}
