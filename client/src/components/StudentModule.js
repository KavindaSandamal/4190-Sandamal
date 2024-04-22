import React, { Component } from 'react';

class StudentModule extends Component {
    render() {
        return (
            <div>
                <h4>Modules</h4>

                <table className = "table table-success table-striped" style={{marginTop:'40px'}}>
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Module Code</th>
                    <th scope="col">Module Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Action</th>
                    
                </tr>
                </thead>
                </table>
                <div className="footer">
                    <p>&copy; 2023 AssignMast. All rights reserved.</p>
                </div> 
            </div>
        );
    }
}

export default StudentModule;