import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SubmitAssignments = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmission = async () => {
    try {
      if (!selectedFile) {
        alert('Please select a file for submission.');
        return;
      }

      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await axios.post('/submissions/submit', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Assignment submitted successfully.');

      setSelectedFile(null);
      navigate('/student/assignments');
    } catch (error) {
      console.error('Error submitting assignment:', error);
      alert('Assignment submission failed. Please try again.');
    }
  };

  return (
    <div>
      <div className='submit-assignments-container'>
        <h4 className="page-title">Submit Assignment</h4>
        <form>
          <div className="form-group">
            <label htmlFor="file" className="file-label">
              Choose a PDF file to upload
            </label>
            <input
              type="file"
              className="form-control-file file-input"
              id="file"
              onChange={handleFileChange}
            />
          </div>
          <button
            type="button"
            className="btn btn-success submit-button"
            onClick={handleSubmission}
          >
            Submit Assignment
          </button>
        </form>
      </div>
      <div className="footer">
        <p>&copy; 2023 AssignMast. All rights reserved.</p>
      </div>
    </div>
  );
};

export default SubmitAssignments;
