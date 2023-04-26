import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Teacher = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <button className="m-24 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add Class
      </button>
    </>
  );
};

export default Teacher;
