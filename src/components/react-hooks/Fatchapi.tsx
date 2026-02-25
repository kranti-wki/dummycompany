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
        <h2 className="text-white text-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. A fuga corrupti impedit reprehenderit deleniti repellendus 
          amet error rerum, veniam ab necessitatibus architecto provident neque voluptatem non. Laborum vel amet, voluptatem, 
          voluptatum nulla nostrum ab quos dolores veniam aliquam deleniti nobis. Corrupti, ipsam nobis libero quis nam 
          exercitationem repellendus eaque debitis placeat mollitia minus aspernatur reiciendis fugit asperiores neque voluptatum qui. Modi omnis aperiam assumenda 
          facilis temporibus sint error, dolorem qui maiores blanditiis, ut numquam accusantium illo voluptatem expedita? Beatae, id sunt! Maxime quam ipsam hic dolorum, 
          dicta perspiciatis voluptatem! Tempora totam quia libero odit exercitationem neque ab? Nam voluptates 
          odit necessitatibus dicta et consequuntur maiores, est explicabo praesentium animi eligendi quis 
          voluptatem dolorum atque excepturi pariatur dolore dolor recusandae provident. Tenetur a iure veniam. 
          Voluptate accusamus reiciendis dolor eum dicta totam sequi tenetur laboriosam minima dolores esse,
           ea ad, nihil non. Temporibus illo ex quo officia maxime earum, quos esse pariatur quaerat.
            Laboriosam similique sint distinctio cupiditate nemo reprehenderit dignissimos?</h2>
            <h1 className="text-white text-3xl">number one </h1>
      </div>
    </>
  );
};

export default Fatchapi;    

