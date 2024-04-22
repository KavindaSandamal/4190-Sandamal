import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../UserContext'; 

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { updateUserInfo } = useUser(); 

  const handleLogin = async (user) => {
    const { role, firstName, lastName } = user;


    updateUserInfo(firstName, lastName);

    switch (role) {
      case 'Student':
        navigate(`/student?firstName=${firstName}&lastName=${lastName}`);
        break;
      case 'Admin':
        navigate(`/admin?firstName=${firstName}&lastName=${lastName}`);
        break;
      case 'Instructor':
        navigate(`/instructor?firstName=${firstName}&lastName=${lastName}`);
        break;
      default:
        console.error('Unknown role:', role);
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('/posts'); 
      if (response.data.success) {
        const user = response.data.existingPosts.find(
          (post) => post.email === email && post.password === password
        );

        if (user) {
          handleLogin(user);
        } else {
          console.error('Authentication failed');
        }
      } else {
        console.error('Failed to fetch posts');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleCancel = () => {
    navigate('/'); 
  };

  return (
    <section className='log-container'>
      <div class="px-4 py-5 px-md-5 text-center text-lg-start" style={{ backgroundColor: 'hsl(0, 0%, 96%)' }}>
        <div class="container">
          <div class="row gx-lg-5 align-items-center">
            <div class="col-lg-6 mb-5 mb-lg-0">
              <h1 class="my-5 display-3 fw-bold ls-tight">
                The best place <br />
                <span class="text-text">to manage your assignments</span>
              </h1>
              <p style={{color: 'hsl(217, 10%, 50.8%)'}}>
              Join with us to managing assignments efficiently. 
              AssignMast is a powerful platform designed to streamline the assignment management 
              process for students, instructors, and administrators.
              </p>
            </div>
    
            <div class="col-lg-6 mb-5 mb-lg-0">
              <div class="card">
                <div class="card-body py-5 px-md-5">
                  <form onSubmit={handleSubmit}>
    
                    <div class="form-outline mb-4">
                      <input type="email" id="form3Example3" class="form-control" value={email}
              onChange={(e) => setEmail(e.target.value)}
              required />
                      <label class="form-label" for="form3Example3">Email address</label>
                    </div>
    
                    
                    <div class="form-outline mb-4">
                      <input type="password" id="form3Example4" class="form-control"  value={password}
              onChange={(e) => setPassword(e.target.value)}
              required />
                      <label class="form-label" for="form3Example4">Password</label>
                    </div>
    
                   
                    <div class="form-check d-flex justify-content-center mb-4">
                      <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                      <label class="form-check-label" for="form2Example33">
                        Subscribe for latest updates
                      </label>
                    </div>
    
                   
                    <button type="submit" class="btn btn-custom btn-block mb-4">
                      Sign In
                    </button>
                    <button type='reset' class="btn btn-custom btn-block mb-4 cancel-button" onClick={handleCancel} >
                      Cancel
                    </button>

    
                   
                    <div class="text-center">
                      <p>or sign up with:</p>
                      <button type="button" class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-facebook-f"></i>
                      </button>
    
                      <button type="button" class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-google"></i>
                      </button>
    
                      <button type="button" class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-twitter"></i>
                      </button>
    
                      <button href="/" type="button" class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-github"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default LoginPage;
