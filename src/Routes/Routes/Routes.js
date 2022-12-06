import { createBrowserRouter } from "react-router-dom";
import Main from "../../Lauout/Main";
import Blog from "../../pages/Blog/Blog";
import Courses from "../../pages/Courses/Courses";
import Faq from "../../pages/Faq/Faq";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Regiater/Register";
import Header from "../../pages/Shared/Header/Header";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <Home></Home> },

            { path: '/login', element: <Login></Login> },

            { path: '/register', element: <Register></Register> },

            { path: '/courses', element: <Courses></Courses> },

            { path: '/blog', element: <Blog></Blog> },

            { path: '/faq', element: <Faq></Faq> },
        ]
    }
])