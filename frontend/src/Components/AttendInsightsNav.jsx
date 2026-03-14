import {NavLink} from 'react-router-dom';

export default function AttendInsightsNav() {
  return (
    <div className='attend-insights-nav'>
      <NavLink to='overall' className="btn">Overall</NavLink>
      <NavLink to='subjects' className="btn">Subjects</NavLink>
    </div>
  )
}
