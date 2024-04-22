import React, { Component } from 'react';
import axios from 'axios';

class InstructorAssignments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            assignments: [],
            error: null, 
        };
    }

    componentDidMount() {
        this.retrieveAssignments();
    }

    retrieveAssignments() {
        axios.get('/assignments')
            .then((res) => {
                console.log('API Response:', res.data);
                if (res.data.success) {
                    this.setState({
                        assignments: res.data.existingAssignments,
                        error: null, 
                    });
                } else {
                    console.error('Server returned an error:', res.data.error);
                    this.setState({
                        error: 'An error occurred while fetching data',
                    });
                }
            })
            .catch((error) => {
                console.error('An error occurred while fetching data:', error);
                this.setState({
                    error: 'An error occurred while fetching data', 
                });
            });
    }

    render() {
        if (this.state.error) {
            return <p>Error: {this.state.error}</p>;
        }
        return (
            <div className='page-container'>
                <div className='table-container'>
                <div className='col-lg-9 mt-2 mb-2'>

                </div>
                <h4>Assignments</h4>

                <table className="table table-success table-striped" style={{ marginTop: '40px' }}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Assignment Name</th>
                            <th scope="col">Module Code</th>
                            <th scope="col">Module Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Deadline</th>
                            <th scope="col">No. of Marks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.assignments.map((assignment, index) => (
                            <tr key={assignment._id}>
                                <th scope="row">{index + 1}</th>
                                <td>
                                    <a href={`instructor/assignments/${assignment._id}`} style={{ textDecoration: 'none' }}>
                                        {assignment.assignmentName}
                                    </a>
                                </td>
                                <td>{assignment.moduleCode || 'N/A'}</td>
                                <td>{assignment.moduleName || 'N/A'}</td>
                                <td>{assignment.description}</td>
                                <td>{assignment.deadline}</td>
                                <td>{assignment.noOfMarks}</td>
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

export default InstructorAssignments;
