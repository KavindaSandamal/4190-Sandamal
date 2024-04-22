import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SubmittedAssignments() {
  const [submittedFiles, setSubmittedFiles] = useState([]);

  useEffect(() => {
    
    axios.get('/submitted-assignments')
      .then((response) => {
        setSubmittedFiles(response.data.submittedFiles);
      })
      .catch((error) => {
        console.error('Error fetching submitted files:', error);
      });
  }, []);

  return (
    <div className="page-container">
      <div className='table-container'>
        <h2>Submitted Assignments</h2>
        <ul>
          {submittedFiles.map((file, index) => (
            <li key={index}>
              <a href={`/uploads/${file}`} target="_blank" rel="noopener noreferrer">{file}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="home-footer">
        <p>&copy; 2023 AssignMast. All rights reserved.</p>
      </div>
    </div>
  );
}

export default SubmittedAssignments;
