import axios from "axios";
import { ScrollArea } from "../../components/ui/scroll-area";
import React, { useState } from "react";

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const Fatchapi: React.FC = () => {
  //    const getData = async()=>{
  //        const response = await fetch("https://jsonplaceholder.typicode.com/photos")

  //        const data = await response.json()

  //        console.log(data)
  //    }

  const [value, setValue] = useState <Photo[]>([])

  async function showData() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/photos",
    );
    setValue(response.data);
  }

  return (
    <>
      <div className="w-full h-[100vh] bg-black flex mx-auto flex-col text-center ">
        {/* {value && (
          <h1 className="text-white text-5xl">{value.title}</h1>
        )} */}
        <ScrollArea className="w-[1000px] max-h-[800px]">
          {value.map((e, i) =>(
          <h1 key={i} className="text-white text-5xl">{e.title}</h1>
        ))}
        </ScrollArea>
        
        <button
          onClick={() => {
            showData();
          }}
          className="border-2 border-white p-[10px_20px] rounded-3xl text-white"
        >
          fetch
        </button>
        <h1 className="text-white text-5xl flex items-center justify-center mx-auto mt-10">hello my world</h1>
      </div>
    </>
  );
};

export default Fatchapi;    

