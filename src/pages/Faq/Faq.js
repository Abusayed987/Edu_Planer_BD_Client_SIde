import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

const Faq = () => {
    return (
        <div className='container mt-5'>
            <h1 className='text-center m-5'>Welcome. How can i help you?</h1>
            <Accordion defaultActiveKey="0" >
                <Accordion.Item eventKey="3" className='border mb-3'>
                    <Accordion.Header className='m-3'>Is email verification required to Create  an account?</Accordion.Header>
                    <Accordion.Body>
                        <b className='text-danger'>Yes, It's Mandatory!</b> We do not allow any Unidentified person to Create an account .
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="0" className='border mb-3'>
                    <Accordion.Header className='m-3'>Is your site secure? </Accordion.Header>
                    <Accordion.Body >
                        Yes !!!, Because i am using Google Analytics system . Google Analytics for Firebase allows you to track your users’ journey through realtime and custom reporting. As mentioned previously, Firebase supports IOS, Android, Web, and Unity products, allowing you to track your users across a wide range of devices.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className='border mb-3'>
                    <Accordion.Header className='m-3'>can i use any -<b> Promo Code </b> -for access Premium Course ?</Accordion.Header>
                    <Accordion.Body >
                        Not now, But You will be notified when we make an offer and For that you need to<Link to='/register' className='text-decoration-none'> create an account</Link> on Ede Planer BD.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className='border mb-3'>
                    <Accordion.Header className='m-3'>Do you have gift vouchers?
                    </Accordion.Header>
                    <Accordion.Body>
                        Yes... <br />
                        when you login for the first time You will be given a <b className='text-danger'> 25% bonus </b>  on any Premium access.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4" className='border mb-3'>
                    <Accordion.Header className='m-3'>Do you have any offline program?</Accordion.Header>
                    <Accordion.Body>
                        Dear Visitor, <span className='text-success'> No. </span>
                        This is a fully online based platform
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Faq;