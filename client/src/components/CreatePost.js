import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  const [formData, setFormData] = useState({
    regNo: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'Student', 
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { regNo, firstName, lastName, email, password, role } = formData;

    const data = {
      regNo,
      firstName,
      lastName,
      email,
      password,
      role,
    };

    axios.post('/post', data).then((res) => {
      if (res.data.success) {
        alert('User Created Successfully');
        setFormData({
          regNo: '',
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          role: 'student', 
        });

        navigate('/admin');
      }
    });
  };

  return (
    <div className="page-container">
      <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Create New User</h1>
        <form className="needs-validation" noValidate>
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>Reg. No.</label>
            <input
              type="text"
              className="form-control"
              name="regNo"
              placeholder="Enter Reg. No."
              value={formData.regNo}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              placeholder="Enter First Name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              placeholder="Enter Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>Password</label>
            <input
              type="text"
              className="form-control"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>Role</label>
            <select
              className="form-control"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
            >
              <option value="Admin">Admin</option>
              <option value="Instructor">Instructor</option>
              <option value="Student">Student</option>
            </select>
          </div>
          <button
            className="btn btn-success"
            type="submit"
            style={{ marginBottom: '15px' }}
            onClick={onSubmit}
          >
            <i className="far fa-check-square"></i>&nbsp; Save
          </button>
        </form>
      </div>

      <div className="home-footer">
        <p>&copy; 2023 AssignMast. All rights reserved.</p>
      </div>
    </div>
  );
}

export default CreatePost;
