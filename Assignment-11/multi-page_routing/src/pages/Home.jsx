import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div >
      <div className="h-170 w-full bg-white shadow-xl rounded-2xl p-10 mt-10">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-4">
           Student Management System
        </h1>

        {/* Description */}
        <p className="text-center text-gray-600 text-lg mb-8">
          Welcome to the Student Management System. Manage student records,
          courses, and information efficiently with a simple and user-friendly
          interface built using React Router.
        </p>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              📋 Student Records
            </h2>
            <p className="text-gray-600">
              View and manage student details including ID, name, department,
              and contact information.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-green-700 mb-2">
              🔍 Search Students
            </h2>
            <p className="text-gray-600">
              Quickly search students using their unique Student ID with dynamic
              routing.
            </p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-yellow-700 mb-2">
              📚 Course Details
            </h2>
            <p className="text-gray-600">
              Display student course information, department, semester, and
              academic progress.
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-purple-700 mb-2">
              ⚡ React Router
            </h2>
            <p className="text-gray-600">
              Navigate seamlessly between Home, About, and Student pages using
              React Router.
            </p>
          </div>

        </div>

        {/* Button */}
        <div className="text-center mt-10">
        <Link to="/students">
  <button className="bg-green-300 hover:bg-blue-700 text-black px-8 py-3 rounded-lg font-semibold transition">
    View Students
  </button>
</Link>
</div>

      </div>
    </div>
  )
}

export default Home
