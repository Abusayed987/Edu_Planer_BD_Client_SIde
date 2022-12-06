import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { course_title, picture, teacher_name, price, course_description } = course;
    return (
        <div>
            <Card className="mb-4">
                <Card.Header className='text-center'>
                    <Card.Title>{course_title}</Card.Title>
                </Card.Header>
                <Card.Body className='pb-1'>
                    <Card.Img variant="top" src={picture} />
                    <Card.Text className='mt-2'>
                        <p>{course_description.slice(0, 92)}...</p>
                    </Card.Text>
                    <div className='d-flex justify-content-between'>
                        <p className='mb-0'><b>Instructor: {teacher_name}</b></p>
                        <p className='text-success'> <b>$ {price}</b></p>
                    </div>
                </Card.Body>
                <Link to={`${course.id}`} className='btn btn-success w-50 mx-auto mb-2' >Details..</Link>
            </Card>
        </div>
    );
};

export default Course;