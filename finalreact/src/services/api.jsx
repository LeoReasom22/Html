import React, { useEffect, useState } from "react";
import Card from "../components/cards"; // Card import

function Api() {
  const [cards, setcards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  {
    /*useEffect =side effect */
  }
  useEffect(() => {
    fetch("https://6996c1207d17864365752ee4.mockapi.io/api/v1/pets")
      .then((response) => response.json())
      .then((data) => {
        setcards(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <h2 className="p-8 text-center">Loading please wait ...</h2>;

  return (
    <div className="mx-4 md:mx-16 p-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end p-6 gap-4">
        <div>
          <span>What's new?</span>
          <h1 className="text-xl md:text-2xl font-bold ">
            Take a look At Some Of Our Pets
          </h1>
        </div>
        <button
          onClick={() => setShowAll(!showAll)}
          className=" flex leading-tight border-2 border-blue-900 text-blue-900 px-5 py-2 rounded-full text-sm font-medium hover:bg-purple-300 hover:text-black transition"
        >
          {showAll ? "View Less" : "View More"}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.33337 6.66666L11.6667 9.99999L8.33337 13.3333"
              stroke="#003459"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.slice(0, showAll ? cards.length : 8).map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <div></div>
    </div>
  );
}

export default Api;
