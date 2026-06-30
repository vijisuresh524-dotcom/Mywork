import React from 'react'
import { Link } from 'react-router-dom'

const student=[
    {
        id: 1,
        name: "VIJAYASHANTHI",
        email: "viji@gmail.com",
        course: "FULL STACK DEVELOPMENT",
        image: "https://static.vecteezy.com/system/resources/previews/014/194/215/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg"
    },
    {
        id: 2,
        name: "SUBIKSHAA",
        email: "subi@gmail.com",
        course: "DATA ANALYTICS",
        image: "https://static.vecteezy.com/system/resources/previews/014/194/215/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg"
    },
    {
        id: 3,
        name: "SURESH",
        email: "suresh@gmail.com",
        course: "FULL STACK DEVELOPMENT",
        image: "https://img.freepik.com/premium-vector/profile-icon_1134231-10357.jpg"
    },
    {
        id: 4,
        name: "SHANVIHA",
        email: "shanvi@gmail.com",
        course: "HR DEVELOPMENT",
        image: "https://static.vecteezy.com/system/resources/previews/014/194/215/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg"
    },
    {
        id: 5,
        name: "VIDHYA",
        email: "vidhya@gmail.com",
        course: "JAVA FRONT END DEVELOPMENT",
        image: "https://static.vecteezy.com/system/resources/previews/014/194/215/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg"
    },
    {
        id: 6,
        name: "SANJAY",
        email: "san@gmail.com",
        course: "DATABASE MANAGEMENT",
        image: "https://img.freepik.com/premium-vector/profile-icon_1134231-10357.jpg"
    },
    {
        id: 7,
        name: "VIJAYA",
        email: "viji@gmail.com",
        course: "FULL STACK DEVELOPMENT",
        image: "https://static.vecteezy.com/system/resources/previews/014/194/215/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg"
    },
    {
        id: 8,
        name: "SHANTHI",
        email: "shan@gmail.com",
        course: "FULL STACK DEVELOPMENT",
        image: "https://static.vecteezy.com/system/resources/previews/014/194/215/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg"
    },
]

const Students = () => {
  return (
    <div className='min-h-screen bg-gray-100 py-10 px-6'>
        <h1 className='text-4xl font-bold text-center text-blue-700 mb-10'>Students List</h1>
        <div className='max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {
                student.map((stud)=>(
                   <div className='bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300'
            key={stud.id}>
                <img className='w-28 h-28 rounded-full mx-auto border-4 border-blue-500 object-cover' src={ stud.image} alt={ stud.name}/>
                <h2 className='text-blue-500 mt-2'>ID: {stud.id}</h2>
                <h2 className='text-blue-500 mt-2'>NAME: {stud.name}</h2>
                <h2 className='text-blue-500 mt-2'>EMAIL: {stud.email}</h2>
                <h2 className='text-blue-500 mt-2'>COURSE: {stud.course}</h2>
                <Link
              to={`/students/${stud.id}`}
              className="inline-block mt-5 bg-green-300 text-black px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              View Details
            </Link>
            </div>

                ))
            }

        </div>
     
    </div>
  )
}

export default Students
