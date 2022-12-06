import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetail = useLoaderData()
    const { picture, course_description, course_title, price, teacher_name } = courseDetail
    console.log(courseDetail);


    return (
        <Card className='w-50 mx-auto mt-4 text-center'>
            <Card.Header>
                <h2 className='text-primary'>{course_title}</h2>
            </Card.Header>
            <Card.Img variant="top" src={picture} />
            <Card.Body>
                <Card.Title className='d-flex justify-content-between'>
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
                <div className='d-flex justify-content-between'>
                    <Link className='btn btn btn-outline-success  mx-auto mb-3' to='/courses'>Back to Courses</Link>
                    <Link className='btn btn btn-primary  mx-auto mb-3' >Get Premium Access </Link>
                </div>
            </Card.Body>
        </Card>
    );
};

export default CourseDetails;




