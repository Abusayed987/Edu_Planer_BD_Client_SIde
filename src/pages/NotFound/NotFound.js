import React from 'react';
import { Link } from 'react-router-dom';



const NotFound = () => {
    return (
        <div className='text-center w-75 mx-auto'>
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/404-error-3702359-3119148.png" alt="not found"
                className='img-fluid' />
            <h1>So Sad , Page Not Found</h1>
            <p>Please check the URL. <br /> <br />
                Otherwise, <Link to='/'>click here </Link> to be redirected to the homepage.
            </p>
        </div>
    );
};

export default NotFound;