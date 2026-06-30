import React from "react";
import { useParams, Link } from "react-router-dom";

const student = [
  {
    id: 1,
    name: "VIJAYASHANTHI",
    email: "viji@gmail.com",
    course: "FULL STACK DEVELOPMENT",
    image:
      "https://static.vecteezy.com/system/resources/previews/014/194/215/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg",
  },
  {
    id: 2,
    name: "SUBIKSHAA",
    email: "subi@gmail.com",
    course: "DATA ANALYTICS",
    image:
      "https://static.vecteezy.com/system/resources/previews/014/194/215/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg",
  },
  {
    id: 3,
    name: "SURESH",
    email: "suresh@gmail.com",
    course: "FULL STACK DEVELOPMENT",
    image:
      "https://img.freepik.com/premium-vector/profile-icon_1134231-10357.jpg",
  },
  {
    id: 4,
    name: "SHANVIHA",
    email: "shanvi@gmail.com",
    course: "HR DEVELOPMENT",
    image:
      "https://static.vecteezy.com/system/resources/previews/014/194/215/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg",
  },
  {
    id: 5,
    name: "VIDHYA",
    email: "vidhya@gmail.com",
    course: "JAVA FRONT END DEVELOPMENT",
    image:
      "https://static.vecteezy.com/system/resources/previews/014/194/215/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg",
  },
  {
    id: 6,
    name: "SANJAY",
    email: "san@gmail.com",
    course: "DATABASE MANAGEMENT",
    image:
      "https://img.freepik.com/premium-vector/profile-icon_1134231-10357.jpg",
  },
  {
    id: 7,
    name: "VIJAYA",
    email: "viji@gmail.com",
    course: "FULL STACK DEVELOPMENT",
    image:
      "https://static.vecteezy.com/system/resources/previews/014/194/215/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg",
  },
  {
    id: 8,
    name: "SHANTHI",
    email: "shan@gmail.com",
    course: "FULL STACK DEVELOPMENT",
    image:
      "https://static.vecteezy.com/system/resources/previews/014/194/215/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg",
  },
];

export default function Details() {
  const { id } = useParams();

  const stud = student.find((s) => s.id === Number(id));

  if (!stud) {
    return <h1 className="text-center text-3xl mt-10">Student Not Found</h1>;
  }

  return (
    <div className="h-160 bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-96 text-center">
        <img
          src={stud.image}
          alt={stud.name}
          className="w-36 h-36 rounded-full mx-auto border-4 border-blue-500"
        />

        <h1 className="text-3xl font-bold mt-4">{stud.name}</h1>

        <div className="mt-6 text-left space-y-2">
          <p><strong>ID:</strong> {stud.id}</p>
          <p><strong>Email:</strong> {stud.email}</p>
          <p><strong>Course:</strong> {stud.course}</p>
        </div>

        <Link
          to="/students"
          className="inline-block mt-6 bg-green-300 text-black px-6 py-2 rounded-lg"
        >
          Back to Students
        </Link>
      </div>
    </div>
  );
}