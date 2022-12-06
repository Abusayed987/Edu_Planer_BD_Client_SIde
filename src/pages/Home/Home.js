import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import './header.css'
const Home = () => {
    return (
        <div className='container d-flex align-items-center'>
            <div>
                <h1 className=' heading'>Prepare your <br /> own learning and start the journey
                </h1>
                <h3 className='courseBtn'>
                    let's Explore our <Link to='/courses'>Courses...</Link>
                </h3>
            </div>
            <div >
                <img className='img-fluid' src="https://scontent.fdac31-1.fna.fbcdn.net/v/t39.30808-6/300854174_548598490440447_1861157042634302737_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Mt--h_ZCl3EAX85RkE6&_nc_ht=scontent.fdac31-1.fna&oh=00_AfAdZdxdJsdIird0SIW8RJyswf6KphuujxrKlS5SoDKw4A&oe=639378A9" alt="" />
            </div>
        </div>
    );
};

export default Home;