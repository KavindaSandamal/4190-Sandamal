import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PostDetails() {
    const { id } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        axios.get(`/post/${id}`).then((res) => {
            if (res.data.success) {
                setPost(res.data.post);
            }
        });
    }, [id]);

    const { regNo,firstName,lastName, email, role } = post;

    return (
        <div style={{ marginTop: '20px' }}>
            <h4>{regNo}</h4>
            <hr />

            <dl className="row">
                <dt className='col-sm-3'>First Name</dt>
                <dd className='col-sm-9'>{firstName}</dd>

                <dt className='col-sm-3'>Last Name</dt>
                <dd className='col-sm-9'>{lastName}</dd>

                <dt className='col-sm-3'>Email</dt>
                <dd className='col-sm-9'>{email}</dd>

                <dt className='col-sm-3'>Role</dt>
                <dd className='col-sm-9'>{role}</dd>
            </dl>
            <div className="footer">
                <p>&copy; 2023 AssignMast. All rights reserved.</p>
            </div> 
        </div>
    );
}

export default PostDetails;
