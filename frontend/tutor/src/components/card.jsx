import React from "react";

export const Card = (props) => {
  return (
    <>
      <div class="ml-24 max-w-sm rounded overflow-hidden shadow-lg mt-10">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">
            {props.item.C_code} - {props.item.C_name}
          </div>
          <p class="text-gray-700 text-base">{props.item.C_category}</p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {props.item.C_startDate.slice(0, 10)} to{" "}
            {props.item.C_endDate.slice(0, 10)}
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {props.item.C_time}
          </span>
        </div>
      </div>
    </>
  );
};

export default Card;
