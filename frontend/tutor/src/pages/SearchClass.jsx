import React from "react";
import axios from "axios";
import { useState } from "react";

export const SearchClass = () => {
  const [search, setSearch] = useState("");
  const [allClasses, setAllClasses] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(search);
    const res = await axios.post(
      "http://localhost:8000/v1/student/searchCategories",
      {
        C_category: search,
      }
    );
    console.log(search);
    console.log(res);
    console.log(allClasses);
    setAllClasses(res.data);

    setSearch("");
  };
  return (
    <>
      <form className="mt-24 w-2/3 m-auto" onSubmit={handleSubmit}>
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="search"
            id="default-search"
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Class"
            required
          />
          <button
            type="submit"
            class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

      {allClasses.length > 0 && (
        <div class="relative overflow-x-auto m-10">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Class Code
                </th>
                <th scope="col" class="px-6 py-3">
                  Class Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Start Date
                </th>
                <th scope="col" class="px-6 py-3">
                  End Date
                </th>
                <th scope="col" class="px-6 py-3">
                  Class Time
                </th>
              </tr>
            </thead>
            <tbody>
              {allClasses.map((item) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.C_code}
                  </th>
                  <td class="px-6 py-4">{item.C_name}</td>
                  <td class="px-6 py-4">{item.C_startDate.slice(0, 10)}</td>
                  <td class="px-6 py-4">{item.C_endDate.slice(0, 10)}</td>
                  <td class="px-6 py-4">{item.C_time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
export default SearchClass;
