import axios from "axios";
import React, { useState } from "react";

const Fatchapi: React.FC = () => {
  //    const getData = async()=>{
  //        const response = await fetch("https://jsonplaceholder.typicode.com/photos")

  //        const data = await response.json()

  //        console.log(data)
  //    }

  const [value, setValue] = useState([]);

  async function showData() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/photos/5",
    );
    setValue(response.data);
  }

  return (
    <>
      <div className="w-full h-[100vh] bg-black flex mx-auto flex-col text-center ">
        {value.map((e, index) => (
          <h1 key={index} className="text-white">
           
          </h1>
        ))}
        <button
          onClick={() => {
            showData();
          }}
          className="border-2 border-white p-[10px_20px] rounded-3xl text-white"
        >
          fetch
        </button>
      </div>
    </>
  );
};

export default Fatchapi;
