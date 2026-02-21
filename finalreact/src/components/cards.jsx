import React from "react";
import detail from "../components/detailpage.jsx";
import { useNavigate } from "react-router-dom";
function Card({ item }) {
  const navigate = useNavigate();
  const switchRoute = (id) => {
    navigate(`/detail/${id}`);
  };
  return (
    <div
      onClick={() => switchRoute(item.id)}
      className="w-full flex flex-col border-none p-2 rounded-xl shadow-md hover:shadow-lg transition-all dw-full flex flex-col border-none p-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] duration-300 hover:-translate-y-1 cursor-pointer"
    >
      <img
        src={item.avatar}
        alt={item.avatar}
        className="w-full  object-cover rounded-lg mb-3 "
      />

      <span className="text-lg font-bold text-gray-800">{item.name}</span>
      <div className="flex flex-row  text-sm  gap-4 text-gray-500 mt-1">
        <span>Gender: {item.gender} </span>

        <span>
          Age: {item.age}
          <span className="font-bold text-gray-600"> months</span>
        </span>
      </div>

      <span className=" font-bold mt-3 text-lg">{item.price} VND</span>
    </div>
  );
}

export default Card;
