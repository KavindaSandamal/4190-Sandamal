import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function ViewAssignments() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const moduleCode = searchParams.get('moduleCode');
    const moduleName = searchParams.get('moduleName');
    const moduleId = searchParams.get('moduleId'); 
    const [assignments, setAssignments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!moduleCode || !moduleName || !moduleId) {
            return;
        }

        retrieveAssignments(moduleId);
    }, [moduleId]);

    const retrieveAssignments = (moduleId) => {
        axios.get(`/assignment/ret/${moduleId}`) 
            .then((res) => {
                console.log('API Response:', res.data);
                if (res.data.success) {
                    setAssignments(res.data.assignments);
                    setIsLoading(false);
                } else {
                    console.error('Server returned an error:', res.data.error);
                    setIsLoading(false);
                }
            })
            .catch((error) => {
                console.error('An error occurred while fetching data:', error);
                setIsLoading(false);
            });
    };

    return (
        <div className='col-lg-9 mt-2 mb-2'>
            <h4>Assignments for {moduleCode} - {moduleName}</h4>

            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <table className="table table-success table-striped" style={{ marginTop: '40px' }}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Assignment Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Deadline</th>
                            <th scope="col">No. of Marks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {assignments.map((assignment, index) => (
                            <tr key={assignment._id}>
                                <th scope="row">{index + 1}</th>
                                <td>
                                    <a href={`/admin/assignments/${assignment._id}`} style={{ textDecoration: 'none' }}>
                                        {assignment.assignmentName}
                                    </a>
                                </td>
                                <td>{assignment.description}</td>
                                <td>{assignment.deadline}</td>
                                <td>{assignment.noOfMarks}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        <div className="footer">
            <p>&copy; 2023 AssignMast. All rights reserved.</p>
        </div> 
        </div>
    );
}

export default ViewAssignments;
