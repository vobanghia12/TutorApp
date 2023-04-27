import React, { useState } from "react";
import axios from "axios";

export default function RegisterClass(props) {
  const [showModal, setShowModal] = useState(false);
  const [classCode, setClassCode] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(classCode);
      const res1 = await axios.post(
        "http://localhost:8000/v1/student/searchClass",
        {
          C_code: classCode,
        }
      );
      console.log(props.id);
      const res = await axios.post(
        "http://localhost:8000/v1/student/registerClass",
        {
          C_ID: res1.data[0].C_ID,
          studentID: props.id,
        }
      );
      setClassCode("");
      setShowModal(false);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <button
        className="m-24  bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Register Class
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/3 my-6 mx-auto max-w-3xl pb-10">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Add Class</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Class Code
                      </label>
                      <div className="mt-2">
                        <input
                          value={classCode}
                          id="code"
                          name="code"
                          type="text"
                          autoComplete="code"
                          required
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          onChange={(e) => setClassCode(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="mb-10 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Add Class
                      </button>
                    </div>
                  </form>
                </div>

                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>

                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
