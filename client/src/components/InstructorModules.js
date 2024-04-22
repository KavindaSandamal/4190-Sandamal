import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class InstructorModules extends Component {

    constructor(props) {
        super(props);

        this.state = {
            modules: [],
          };
        
    }

    componentDidMount() {
        this.retrieveModules();
    }
    
    retrieveModules() {
    axios.get('/modules').then((res) => {
        if (res.data.success) {
        this.setState({
            modules: res.data.existingModules,
        });
        }
    });
    }

    render() {
        return (
            <div>
                All Modules
                <div className='table-container'>
                <table className="table table-success table-striped" style={{ marginTop: '40px' }}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Module Code</th>
                            <th scope="col">Module Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.modules.map((module, index) => (
                            <tr key={module._id}>
                                <th scope="row">{index + 1}</th>
                                <td>
                                    <a href={`instructor/modules/${module._id}`} style={{ textDecoration: 'none' }}>
                                        {module.moduleCode}
                                    </a>
                                </td>
                                <td>{module.moduleName}</td>
                                <td>{module.description}</td>
                                <td>
                                <Link
                                    to={`/instructor/addAssignments?moduleCode=${module.moduleCode}&moduleName=${module.moduleName}`}
                                    className="btn btn-success"
                                    style={{ textDecoration: 'none', color: 'white' }}
                                >
                                    Add New Assignment
                                </Link>

                                &nbsp;
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

export default InstructorModules;