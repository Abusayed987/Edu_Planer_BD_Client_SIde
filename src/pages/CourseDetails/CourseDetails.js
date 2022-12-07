import React from 'react';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
const ref = React.createRef();
const CourseDetails = () => {
    const courseDetail = useLoaderData()
    const { picture, course_description, course_title, price, teacher_name } = courseDetail
    // console.log(courseDetail);


    return (
        <Card className='w-50  mx-auto mt-4 text-center'>
            <div ref={ref}>
                <Card.Header className='d-lg-flex justify-content-between'>
                    <h2 className='text-primary ' >
                        {course_title}
                    </h2>
                    <Pdf targetRef={ref} filename={`${course_title}.pdf`}>
                        {({ toPdf }) => <Button
                            className=''
                            variant="outline-info"
                            onClick={toPdf}>
                            Download <FaDownload></FaDownload>
                        </Button>}
                    </Pdf>
                </Card.Header>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title className='d-lg-flex d-md-flex justify-content-between'>
                        <div>
                            Instructor: {teacher_name}
                        </div>
                        <div className='text-success'>
                            ৳{price}90
                        </div>
                    </Card.Title>
                    <Card.Text>
                        <div className='border border-rounded p-3 mt-3'>
                            {course_description}
                        </div>
                    </Card.Text>
                    <div>
                        <Link to='/courses'>
                            <Button variant='outline-success' className='m-3'>
                                Back to Courses
                            </Button>
                        </Link>
                        <Link to='/courses'>
                            <Button variant='primary' className='m-3'>
                                Get Premium Access
                            </Button>
                        </Link>
                    </div>
                </Card.Body>
            </div>

        </Card>
    );
};

export default CourseDetails;




