import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Person } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext';

function StudentNav() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();
  const { userInfo } = useUser();

  const logoutButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '50px',
    backgroundColor: '#AA00FF',
    color: 'white',
    borderRadius: '20px',
  };

  const handleLogout = () => {
    navigate('/'); 
  };

  const { firstName, lastName } = userInfo;

  return (
    <nav className='nav'>
      <NavLink exact to='/' className='nav-item' activeClassName='active'>
        AssignMast
      </NavLink>
      <NavLink to='/student' className='nav-item' activeClassName='active' >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
        </svg>
        Dashboard
      </NavLink>
      <NavLink to='/student/assignments' className='nav-item' activeClassName='active'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
          <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
        </svg>
        Assignments
      </NavLink>
      <span className='nav-indicator'></span>
      <div>
        <button className="btn dropdown-button" onClick={() => setDropdownVisible(!isDropdownVisible)} style={logoutButtonStyle}>
          <div>
            <div>
              <span>
                <Person size={20} color="white" />
                {firstName} {lastName}
              </span>
            </div>
          </div>
        </button>
        {isDropdownVisible && (
          <div className="dropdown-menu">
            <button className="dropdown-item" onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default StudentNav;
