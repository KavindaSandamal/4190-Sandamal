import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class StudentPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modules: [],
            searchQuery: '',
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

    handleSearchArea = (e) => {
        const { value } = e.target;
        this.setState({ searchQuery: value }, () => {
            this.filterData(value);
        });
    };

    filterData(query) {
        const { modules } = this.state;
        const result = modules.filter(
            (module) =>
                module.moduleCode.toLowerCase().includes(query.toLowerCase()) ||
                module.moduleName.toLowerCase().includes(query.toLowerCase()) ||
                module.description.toLowerCase().includes(query.toLowerCase())
        );
        this.setState({ modules: result });
    }

    render() {
        return (
            <div >
               <div className='table-container'>
               <div className="row">
                    <div className="col-lg-9 mt-2 mb-2">
                        <h4>All Modules</h4>
                    </div>
                    <div className="col-lg-3 mt-2 mb-2">
                        <input
                            className="form-control"
                            type="search"
                            placeholder="Search"
                            name="searchQuery"
                            value={this.state.searchQuery}
                            onChange={this.handleSearchArea}
                        />
                    </div>
                </div>

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
                                    <Link to={`/admin/modules/${module._id}`} style={{ textDecoration: 'none' }}>
                                        {module.moduleCode}
                                    </Link>
                                </td>
                                <td>{module.moduleName}</td>
                                <td>{module.description}</td>
                                
                                <td>
                                    <Link
                                        className="btn btn-success"
                                        to={`/student/viewAssignments?moduleCode=${module.moduleCode}&moduleName=${module.moduleName}&moduleId=${module.moduleId}`}
                                    >
                                        <i className="fas fa-eye"></i> View Assignments
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

export default StudentPage;
