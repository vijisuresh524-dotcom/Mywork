import React from 'react'

const About = () => {
  return (
    <div className='w-full'>
      <div className=" p-6  bg-white shadow-lg rounded-xl m-auto">

        <h1 className="text-4xl font-bold text-blue-700 text-center mb-6">
          About Student Management System
        </h1>

        <p className="text-gray-700 text-lg leading-8 mb-6">
          The Student Management System is a React application
          designed to simplify the management of student information. It
          demonstrates the use of React Router for navigation between multiple
          pages and dynamic routing to display individual student details.
        </p>

        {/* Objectives */}
        <div className="mb-8  ">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3 text-center">
             Objectives
          </h2>

          <ul className="list-disc list-inside text-gray-700 space-y-2 text-center">
            <li>Manage student records efficiently.</li>
            <li>Navigate between pages using React Router.</li>
            <li>Display student details with dynamic routes.</li>
            <li>Create a clean and responsive user interface.</li>
          </ul>
        </div>

        {/* Technologies */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-green-600 mb-3 text-center"> 
             Technologies Used
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-100 text-blue-700 p-4 hover:bg-green-300 rounded-lg text-center font-semibold">
              React
            </div>

            <div className="bg-green-100 text-green-700 hover:bg-green-300 p-4 rounded-lg text-center font-semibold">
              React Router
            </div>

            <div className="bg-cyan-100 text-cyan-700 hover:bg-green-300 p-4 rounded-lg text-center font-semibold">
              Tailwind CSS
            </div>

            <div className="bg-yellow-100 text-yellow-700 hover:bg-green-300 p-4 rounded-lg text-center font-semibold">
              JavaScript
            </div>
          </div>
        </div>

        {/* Features */}
        <div>
          <h2 className="text-2xl font-semibold text-purple-600 mb-3 text-center">
             Features
          </h2>

          <ul className="space-y-3 text-gray-700 text-center">
            <li>✅ Home page with project overview</li>
            <li>✅ About page with project information</li>
            <li>✅ Dynamic Student Details page using URL parameters</li>
            <li>✅ Responsive design using Tailwind CSS</li>
            <li>✅ Easy navigation with React Router</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default About
