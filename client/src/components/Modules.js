import React, { Component } from 'react';
import axios from 'axios';

class Modules extends Component {

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

    filterData(modules, searchKey) {
    const result = modules.filter(
        (module) =>
        module.moduleCode.toLowerCase().includes(searchKey) ||
        module.moduleName.toLowerCase().includes(searchKey) ||
        module.description.toLowerCase().includes(searchKey) 
    );

    this.setState({ modules: result });
    }

    handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value.toLowerCase();

    // Filter the posts based on the search key
    this.filterData(this.state.modules, searchKey);
    };

    onDelete = (id) => {
        axios.delete(`/module/delete/${id}`).then((res) => {
          alert('Delete Successfully');
          this.retrieveModules();
        });
      };
      
    
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
                                    <a href={`admin/modules/${module._id}`} style={{ textDecoration: 'none' }}>
                                        {module.moduleCode}
                                    </a>
                                </td>
                                <td>{module.moduleName}</td>
                                <td>{module.description}</td>
                                <td>
                                    <button className="btn btn-success">
                                    <i className="fas fa-eye"></i>
                                    <a href="/admin/assignments" style={{ textDecoration: 'none', color: 'white' }}>
                                        View Assignments
                                    </a>
                                    </button>
                                    &nbsp;
                                    <button
                                    className="btn btn-danger"
                                    onClick={() => this.onDelete(module._id)} // Call the deleteModule method
                                    >
                                    <i className="fas fa-trash"></i> Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className="btn btn-success mb-4">
                <a href="/admin/modules/add" style={{ textDecoration: 'none', color: 'white' }}>
                    Create New Module
                </a>
                </button>
                </div>

                <div className="home-footer">
                    <p>&copy; 2023 AssignMast. All rights reserved.</p>
                </div> 
            </div>
        );
    }
}

export default Modules;