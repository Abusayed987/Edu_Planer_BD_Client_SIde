import React from 'react';
import { Link } from 'react-router-dom';



const NotFound = () => {
    return (
        <div className='text-center w-75 mx-auto'>
            <img src="https://gifimage.net/wp-content/uploads/2017/09/404-gif-1.gif" alt="not found"
                className='img-fluid w-50' />
            <h1>So Sad , Page Not Found</h1>
            <p>Please check the URL. <br /> <br />
                Otherwise, <Link to='/'>click here </Link> to be redirected to the homepage.
            </p>
        </div>
    );
};

export default NotFound;