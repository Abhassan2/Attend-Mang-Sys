import '../Style/Navbar.css';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useContext, useState } from 'react';
import { AttendEaseContext } from '../Context/AttendEaseContext';

export default function MainHeader() {
  const {object} = useContext(AttendEaseContext)

  const handleSidebar = ()=>{
    object.setOpenSidebar(!object.openSidebar)
  }
  
  return (
      <div className="navbar">
        {
          object.openSidebar 
          ? <CloseRoundedIcon className='menu-icon' onClick={handleSidebar} />
          : <MenuRoundedIcon className='menu-icon' onClick={handleSidebar} />
        }
        <AccountCircleRoundedIcon className='profile-icon' />
      </div>
  )
}
