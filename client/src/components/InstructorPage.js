import React, { Component } from 'react';

class InstructorPage extends Component {
    render() {
        return (
            <div>
                All Students

                <table className="table table-success table-striped" style={{ marginTop: '40px' }}>
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                </table>
                <div className="home-footer">
                    <p>&copy; 2023 AssignMast. All rights reserved.</p>
                </div> 
            </div>
        );
    }
}

export default InstructorPage;