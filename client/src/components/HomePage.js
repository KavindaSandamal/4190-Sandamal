import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/login');
  };

  return (
    <div className='homepage-container'>
      <div>
        <div className='assign-mast'>
          <div className='part-1'>
          <h1 className='heading'>AssignMast</h1>
          <p className='description'>Welcome to AssignMast, your all-in-one assignment management solution. Our platform provides a user-friendly experience for instructors, students, and administrators.</p>
          </div>
          <div className='part-2'>
          </div>
        </div>

        <div className='assign-mast'>
          <div className='part-3'>
          </div>
          <div className='part-4'>
          <h1 className='sub-heading'>Manage your Assignments</h1>
          <p className='sub-description'>Create assignments with details such as title, description, due date, and associated modules or courses.</p>
          <p className='sub-description'>Receive, organize, and track assignment submissions from students</p>
          <p className='sub-description'>Easily upload, share, and manage assignment-related files and resources.</p>
          </div>
        </div>

        <div className='assign-mast'>
          <div className='part-1'>
          <h1 className='sub-heading'>Manage All the Users</h1>
          <p className='sub-description'>Access a centralized dashboard to manage all users in one place.</p>
          <p className='sub-description'>Add new users with relevant details and edit existing user profiles.</p>
          <p className='sub-description'> Assign roles and permissions to users, controlling their access and actions.</p>
          <p className='sub-description'> View and update user profile information, including names, emails, and more.</p>
          </div>
          <div className='part-5'>
          </div>
        </div>

        <div className="layer-2" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{fontWeight:"bolder"}}>
          <h4>Ready to effortlessly manage your assignments?</h4>
        </div>
        <div>
          <button type="button" className="btn btn-outline-primary get-started-button" onClick={handleGetStartedClick}>
            Get Started
          </button>
        </div>
      </div>


      </div>

      <div className="home-footer">
        <p>&copy; 2023 AssignMast. All rights reserved.</p>
      </div>
    </div>
  );
}

export default HomePage;
