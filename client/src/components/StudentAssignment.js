import React, { Component } from 'react';
import axios from 'axios';


class StudentAssignment extends Component {
    constructor(props) {
        super(props);
        this.state = {
          assignments: [],
          moduleCode: '', 
          moduleName: '', 
        };
      }
    
      componentDidMount() {
        this.retrieveAssignments();
        this.retrieveModuleData();
      }
    
      retrieveAssignments() {
        axios.get('/assignments')
          .then((res) => {
            console.log('API Response:', res.data);
            if (res.data.success) {
              this.setState({
                assignments: res.data.existingAssignments,
              });
            } else {
              console.error('Server returned an error:', res.data.error);
            }
          })
          .catch((error) => {
            console.error('An error occurred while fetching data:', error);
          });
      }
    
      retrieveModuleData() {
       
        const searchParams = new URLSearchParams(window.location.search);
        const moduleCode = searchParams.get('moduleCode') || '';
        const moduleName = searchParams.get('moduleName') || '';
    
        console.log('Module Code:', moduleCode);
        console.log('Module Name:', moduleName);
    
       
        this.setState({
          moduleCode,
          moduleName,
        });
      }
    
    render() {
        return (
            <div className='page-container'>
              <div  className='table-container'>
              <h4>Assignments</h4>

              <table className = "table table-success table-striped" style={{marginTop:'40px'}}>
              <thead>
              <tr>
                  <th scope="col">#</th>
                  <th scope="col">Assignment Name</th>
                  <th scope="col">Module Code</th>
                  <th scope="col">Module Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Deadline</th>
                  <th scope="col">No. of Marks</th>
                  <th scope="col">Action</th>
              </tr>
              </thead>
              <tbody>
              {this.state.assignments.map((assignment, index) => (
              <tr key={assignment._id}>
              <th scope="row">{index + 1}</th>
              <td>
                <a href={`admin/assignments/${assignment._id}`} style={{ textDecoration: 'none' }}>
                  {assignment.assignmentName}
                </a>
              </td>
              <td>{assignment.moduleCode || this.state.moduleCode || 'N/A'}</td>
              <td>{assignment.moduleName || this.state.moduleName || 'N/A'}</td>
              <td>{assignment.description}</td>
              <td>{assignment.deadline}</td>
              <td>{assignment.noOfMarks}</td>
              <td>
              <button className="btn btn-success">
              <a href="/student/submitAssignments" style={{ textDecoration: 'none', color: 'white' }}>
                  Submit
              </a>
              </button>
              </td>
              </tr>
              ))}
              </tbody>
              </table>
              </div>

            <div className="home-footer">
              <p>&copy; 2023 AssignMast. All rights reserved.</p>
            </div> 
            </div>
        );
    }
}

export default StudentAssignment;