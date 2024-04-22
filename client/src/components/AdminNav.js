import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Person } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext';

function AdminNav() {
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
          <NavLink exact to='/' className='nav-item'>
            AssignMast
          </NavLink>
          <NavLink to='/admin' className='nav-item' activeClassName='active' >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
          </svg>
            Dashboard
          </NavLink>
          <NavLink to='/admin/modules' className='nav-item'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-server" viewBox="0 0 16 16">
            <path d="M1.333 2.667C1.333 1.194 4.318 0 8 0s6.667 1.194 6.667 2.667V4c0 1.473-2.985 2.667-6.667 2.667S1.333 5.473 1.333 4V2.667z"/>
            <path d="M1.333 6.334v3C1.333 10.805 4.318 12 8 12s6.667-1.194 6.667-2.667V6.334a6.51 6.51 0 0 1-1.458.79C11.81 7.684 9.967 8 8 8c-1.966 0-3.809-.317-5.208-.876a6.508 6.508 0 0 1-1.458-.79z"/>
            <path d="M14.667 11.668a6.51 6.51 0 0 1-1.458.789c-1.4.56-3.242.876-5.21.876-1.966 0-3.809-.316-5.208-.876a6.51 6.51 0 0 1-1.458-.79v1.666C1.333 14.806 4.318 16 8 16s6.667-1.194 6.667-2.667v-1.665z"/>
          </svg>
            Modules
          </NavLink>
          <NavLink to='/admin/assignments' className='nav-item'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
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

export default AdminNav;
