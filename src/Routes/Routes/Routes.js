import { createBrowserRouter } from "react-router-dom";
import Main from "../../Lauout/Main";
import Blog from "../../pages/Blog/Blog";
import Course from "../../pages/Course/Course";
import CourseDetails from "../../pages/CourseDetails/CourseDetails";
import Courses from "../../pages/Courses/Courses";
import Faq from "../../pages/Faq/Faq";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import NotFound from "../../pages/NotFound/NotFound";
import Register from "../../pages/Regiater/Register";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <Home></Home> },

            { path: '/login', element: <Login></Login> },

            { path: '/register', element: <Register></Register> },

            {
                path: '/courses', element: <Courses></Courses>,
                loader: async () => {
                    return fetch('https://edu-planer-bd-server-abusayed987.vercel.app/courses')
                },

            },

            {
                path: '/courses/:id', element: <CourseDetails></CourseDetails>,
                loader: async ({ params }) => {
                    return fetch(`https://edu-planer-bd-server-abusayed987.vercel.app/courses/${params.id}`)
                }
            },

            { path: '/blog', element: <Blog></Blog> },

            { path: '/faq', element: <Faq></Faq> },
            {
                path: '*', element: <NotFound></NotFound>
            }
        ]
    }
])