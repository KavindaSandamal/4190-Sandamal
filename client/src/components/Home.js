import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get('/posts').then((res) => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts,
        });
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`/post/delete/${id}`).then((res) => {
      alert('Delete Successfully');
      this.retrievePosts();
    });
  };

  filterData(posts, searchKey) {
    const result = posts.filter(
      (post) =>
        post.regNo.toLowerCase().includes(searchKey) ||
        post.firstName.toLowerCase().includes(searchKey) ||
        post.lastName.toLowerCase().includes(searchKey) ||
        post.email.toLowerCase().includes(searchKey) ||
        post.password.toLowerCase().includes(searchKey) ||
        post.role.toLowerCase().includes(searchKey)
    );

    this.setState({ posts: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value.toLowerCase();

    this.filterData(this.state.posts, searchKey);
  };

  render() {
    return (
      <div>
        <div className='table-container'>
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h4>All Users</h4>
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
          <thead >
            <tr>
              <th scope="col">#</th>
              <th scope="col">Reg. No.</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Role</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post, index) => (
              <tr key={post._id}>
                <th scope="row">{index + 1}</th>
                <td>
                  <a href={`/admin/post/${post._id}`} style={{ textDecoration: 'none' }}>
                    {post.regNo}
                  </a>
                </td>
                <td>{post.firstName}</td>
                <td>{post.lastName}</td>
                <td>{post.email}</td>
                <td>{post.password}</td>
                <td>{post.role}</td>
                <td>
                  <a className="btn btn-warning" href={`/admin/edit/${post._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => this.onDelete(post._id)}
                  >
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="btn btn-success mb-4"> 
          <a href="/admin/add" style={{ textDecoration: 'none', color: 'white' }}>
            Create New User
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

export default Home;
