import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { course_title, picture, teacher_name, price, course_description } = course;
    return (
        <div>
            <Card className="mb-4">
                <Card.Body className='pb-1'>
                    <Card.Img variant="top" src={picture} />
                    <Card.Text >
                        <Card.Title className="mt-3">{course_title}</Card.Title>
                    </Card.Text>
                    <div className='d-flex justify-content-between '>
                        <p className=''>Instructor: {teacher_name}</p>
                        <p className='text-success'> <b>৳{price}90</b></p>
                    </div>
                </Card.Body>
                <Link to={`${course.id}`} className='btn btn btn-outline-success w-50 mx-auto mb-3' >Details..</Link>
            </Card>

        </div>
    );
};

export default Course;