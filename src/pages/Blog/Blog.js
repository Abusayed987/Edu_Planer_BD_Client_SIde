import React from 'react';

const Blog = () => {
    return (
        <div className='text-start mt-5'>
            <div className='border rounded m-5 p-3'>
                <h2><b className='text-info'>Question 01 :</b> What is cors?</h2>
                <h4 className='m-3'><b>Ans:</b><br />    CORS means Cross-Origin Resource Sharing, it is a Sharing method that the frontend and backend are at two different domains. it's allows you to make requests to the server deployed at a different domain .</h4>
            </div>
            <div className='border rounded m-5 p-3'>
                <h2><b className='text-info'>Question 02 :</b> Why are you using firebase? What other options do you have to implement authentication?</h2>
                <h4 className='m-3'><b>Ans:</b><br />   Now i am using Firebase , Because it's Google Analytics, Free Use of Dynamic Links,Crashlytics , easy to use SDK, ready-made UI libraries, and backend services, it is possible to set up the whole authentication process in just a couple of minutes . And i have many option to implement authentication, for Example, Back4App, Backendless, Kuzzle, Pubnub, Kumulos and etc . </h4>
            </div>
            <div className='border rounded m-5 p-3'>
                <h2><b className='text-info'>Question 03 :</b> How does the private route work?</h2>
                <h4 className='m-3'><b>Ans:</b><br /> The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</h4>
            </div>
            <div className='border rounded m-5 p-3'>
                <h2><b className='text-info'>Question 04 :</b> What is Node? How does Node work?</h2>
                <h4 className='m-3'><b>Ans:</b><br /> Node.js (Node) is an open source, cross-platform runtime environment for executing JavaScript code. Node is used extensively for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code without needing to learn an additional language. Node is sometimes referred to as a programming language or software development framework, but neither is true; it is strictly a JavaScript runtime.
                    <br />
                    <br />
                    Node incorporates the <b> V8 JavaScript engine</b>, the same one used in Google Chrome and other browsers. It is written in C++ and can run on macOS, Linux, Windows and other systems. The engine parses and executes JavaScript code. It can operate independently of a browser environment, either embedded in a C++ application or implemented as a standalone program. The V8 engine compiles JavaScript internally, using just-in-time (JIT) processes to speed up execution.</h4>
            </div>
        </div>
    );
};

export default Blog;