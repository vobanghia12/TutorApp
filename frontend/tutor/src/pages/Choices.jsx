import React from "react";
import { Link } from "react-router-dom";
const Choices = () => {
  return (
    <div className="flex flex-col justify-center w-full items-center mt-56">
      <Link
        to="/SignUpStudent"
        className="w-[20rem] h-[5rem] border border-blue-200 mb-10 flex justify-center"
      >
        <p className=" text-center pt-6">Student</p>
      </Link>
      <Link
        to="/SignUpTeacher"
        className="w-[20rem] h-[5rem] border border-blue-200 mb-10 flex justify-center"
      >
        <p className=" text-center pt-6">Teacher</p>
      </Link>
    </div>
  );
};

export default Choices;
