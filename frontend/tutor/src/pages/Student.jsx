import React from "react";
import RegisterClass from "./RegisterClass";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/card";
import SearchClass from "./SearchClass";
import { Link } from "react-router-dom";

export const Student = () => {
  const [allClasses, setAllClasses] = useState([]);
  const user = useSelector((state) => state.auth.login.currentUser);
  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `http://localhost:8000/v1/student/viewClasses/${user[0].userID}`
      );
      return res;
    }
    getData().then((res) => {
      setAllClasses(res.data);
    });
  }, [allClasses]);
  return (
    <>
      <RegisterClass id={user[0].userID} />
      <Link to="/searchClass">
        <button
          className="m-24  bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Search Class
        </button>
      </Link>
      <div className="flex mt-14 flex-wrap">
        {allClasses.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </>
  );
};

export default Student;
