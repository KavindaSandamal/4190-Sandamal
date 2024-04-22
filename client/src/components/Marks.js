import React, { Component } from 'react';

class Marks extends Component {
    render() {
        return (
            <div className='page-container'>
                <div className='col-lg-9 mt-2 mb-2'>
                <h4>Marks</h4>

                <table className = "table table-success table-striped" style={{marginTop:'40px'}}>
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Module Code</th>
                        <th scope="col">Module Name</th>
                        <th scope="col">Assignment Name</th>
                        <th scope="col">Marks</th>
                    </tr>
                    </thead>
                </table>
                </div>
            
            <div className="home-footer">
                <p>&copy; 2023 AssignMast. All rights reserved.</p>
            </div> 
            </div>
        );
    }
}

export default Marks;