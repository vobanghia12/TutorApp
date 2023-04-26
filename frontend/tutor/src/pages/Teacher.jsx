import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Card from "../components/card";
import axios from "axios";
import { useSelector } from "react-redux";
import AddClass from "./AddClass";

const Teacher = () => {
  const [allClasses, setAllClasses] = useState([]);
  const user = useSelector((state) => state.auth.login.currentUser);
  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `http://localhost:8000/v1/teacher/getClasses/${user[0].userID}`
      );
      return res;
    }
    getData().then((res) => {
      setAllClasses(res.data);
    });
  }, [allClasses]);
  console.log(allClasses);
  return (
    <>
      <AddClass id={user[0].userID} />
      <div className="flex mt-14 flex-wrap">
        {allClasses.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </>
  );
};

export default Teacher;
