import React, { useState,} from 'react';
import axios from 'axios';
import { useLocation,} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function AddAssignment() {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const moduleCode = searchParams.get('moduleCode');
  const moduleName = searchParams.get('moduleName');
  const moduleId = searchParams.get('moduleId');

 
  const [formData, setFormData] = useState({
    moduleCode: moduleCode ||'',
    moduleName: moduleName ||'',
    assignmentName: '',
    deadline: '',
    noOfMarks: '',
    description: '',
    module: moduleId, 
  });

  const navigate = useNavigate();


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const onSubmit = (e) => {
    e.preventDefault();

    const { moduleCode, moduleName, assignmentName, deadline, noOfMarks, description ,moduleId} = formData;

    const data = {
      moduleCode,
      moduleName,
      assignmentName,
      deadline,
      noOfMarks,
      description,
      moduleId, 
    };
  
    axios.post('/assignment', data)
      .then((res) => {
        if (res.data.success) {
          alert('Assignment Created Successfully');
  
   
          setFormData({
            moduleCode: '',
            moduleName: '',
            assignmentName: '',
            deadline: '',
            noOfMarks: '',
            description: '',
          });

          navigate('/instructor/assignments');

        } else {
          console.error('Failed to save assignment:', res.data.error);
        }
      })
      .catch((error) => {
        console.error('An error occurred while saving assignment:', error);
      });
  };
  

  return (
    <div className='page-container' >
      <div className='col-md-8 mt-4 mx-auto'>
      <h1 className='h3 mb-3 font-weight-normal'>Add New Assignment</h1>
      <form className='needs-validation' noValidate onSubmit={onSubmit}>
        <div className='form-group' style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>Module Code</label>
          <input
            type='text'
            className='form-control'
            name='moduleCode'
            placeholder='Enter Module Code'
            value={formData.moduleCode}
            onChange={handleInputChange}
            readOnly
          />
        </div>

        <div className='form-group' style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>Module Name</label>
          <input
            type='text'
            className='form-control'
            name='moduleName'
            placeholder='Enter Module Name'
            value={formData.moduleName}
            onChange={handleInputChange}
            readOnly
          />
        </div>

        <div className='form-group' style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>Assignment Name</label>
          <input
            type='text'
            className='form-control'
            name='assignmentName'
            placeholder='Enter Assignment Name'
            value={formData.assignmentName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className='form-group' style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>Deadline</label>
          <input
            type='text'
            className='form-control'
            name='deadline'
            placeholder='Enter the Deadline'
            value={formData.deadline}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className='form-group' style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>No. Of Marks</label>
          <input
            type='text'
            className='form-control'
            name='noOfMarks'
            placeholder='Enter No. Of Marks'
            value={formData.noOfMarks}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className='form-group' style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>Description</label>
          <input
            type='text'
            className='form-control'
            name='description'
            placeholder='Enter Description '
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>

        <button
          className='btn btn-success'
          type='submit'
          style={{ marginBottom: '15px' }}
        >
          <i className='far fa-check-square'></i>&nbsp; Save
        </button>
      </form>

      </div>
      
      <div className="home-footer">
        <p>&copy; 2023 AssignMast. All rights reserved.</p>
      </div>
    </div>
  );
}

export default AddAssignment;
