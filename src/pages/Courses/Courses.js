import React from 'react';
import './courses.css'
import { Link, useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Course from '../Course/Course';


const Courses = () => {
    const courses = useLoaderData()
    console.log(courses);
    return (
        <Container>
            <Row>
                <Col lg={3}>
                    <h2>Courses</h2>
                    {
                        courses.map(course =>
                            <p >
                                <Link
                                    className='text-decoration-none'
                                    to={`/courses/${course.id}`}
                                    key={course.id}>
                                    {course.course_title}
                                </Link>
                            </p>
                        )
                    }
                </Col>
                <Col lg={9} >
                    <div className='eduCourses-container'>
                        {
                            courses.map(course => <Course
                                key={course.id}
                                course={course}
                            ></Course>)
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;