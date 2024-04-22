import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function EditPost() {
  const { id } = useParams();
  const [regNo, setRegNo] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/post/${id}`).then((res) => {
      if (res.data.success) {
        const postData = res.data.post;
        setRegNo(postData.regNo);
        setFirstName(postData.firstName);
        setLastName(postData.lastName);
        setEmail(postData.email);
        setPassword(postData.password);
        setRole(postData.role);
      }
    });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'regNo') {
      setRegNo(value);
    } else if (name === 'firstName') {
      setFirstName(value);
    } else if (name === 'lastName') {
      setLastName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'role') {
      setRole(value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      regNo: regNo,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      role: role 
    };

    axios.put(`/post/update/${id}`, data).then((res) => {
      if (res.data.success) {
        alert("Post Updated Successfully");
        setRegNo("");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setRole("");
      }
    });
    navigate('/admin');
  };

  return (
    <div className='col-md-8 mt-4 mx-auto'>
        <h1 className='h3 mb-3 font-weight-normal'>Edit User</h1>
          <form className='needs-validation' noValidate>
          <div className='form-group' style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Reg. No.</label>
                <input type='text'
                    className='form-control'
                    name='regNo'
                    placeholder='Enter Reg. No.'
                    value={regNo}
                    onChange={handleInputChange}
                />
            </div>
            
            <div className='form-group' style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>First Name</label>
                <input type='text'
                    className='form-control'
                    name='firstName'
                    placeholder='Enter First Name'
                    value={firstName}
                    onChange={handleInputChange}
                />
            </div>

            <div className='form-group' style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Last Name</label>
                <input type='text'
                    className='form-control'
                    name='lastName'
                    placeholder='Enter Last Name'
                    value={lastName}
                    onChange={handleInputChange}
                />
            </div>

            <div className='form-group' style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Email</label>
                <input type='text'
                    className='form-control'
                    name='email'
                    placeholder='Enter Email'
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            <div className='form-group' style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Password</label>
                <input type='text'
                    className='form-control'
                    name='password'
                    placeholder='Enter Password'
                    value={password}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>Role</label>
            <select
              className="form-control"
              name="role"
              value={role}
              onChange={handleInputChange}
            >
              <option value="Admin">Admin</option>
              <option value="Instructor">Instructor</option>
              <option value="Student">Student</option>
            </select>
          </div>

            <button className='btn btn-success' type='submit' style={{marginBottom:'15px'}} onClick={onSubmit}>
                <i className='far fa-check-square'></i>
                &nbsp; Save
            </button>
          </form>
          <div className="footer">
            <p>&copy; 2023 AssignMast. All rights reserved.</p>
          </div> 
    </div>
  );
}

export default EditPost;
