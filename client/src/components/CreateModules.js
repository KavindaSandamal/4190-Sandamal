import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateModules() {
    const [formData, setFormData] = useState({
        moduleCode: '',
        moduleName: '',
        description: '',
      });
    
      const navigate = useNavigate();
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const onSubmit = (e) => {
        e.preventDefault();
    
        const { moduleCode, moduleName, description } = formData;
    
        const data = {
          moduleCode,
          moduleName,
          description,
        };
    
  
    
        axios.post('/module', data).then((res) => {
          if (res.data.success) {
            alert('Module Created Successfully');
            setFormData({
              moduleCode: '',
              moduleName: '',
              description: '',
            });
    
            
            navigate('/admin/modules');
          }
        });
      };

    return (
        <div className='page-container'>
            <div  className='col-md-8 mt-4 mx-auto'>
            <h1 className='h3 mb-3 font-weight-normal'>Create New Module</h1>
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
                    />
                </div>

                <div className='form-group' style={{ marginBottom: '15px' }}>
                    <label style={{ marginBottom: '5px' }}>Description</label>
                    <input
                        type='text'
                        className='form-control'
                        name='description'
                        placeholder='Enter Description'
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

export default CreateModules;
