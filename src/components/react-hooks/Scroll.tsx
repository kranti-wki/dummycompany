import { ScrollArea } from "../../components/ui/scroll-area";
import { CiFaceFrown } from "react-icons/ci";

const colors = [
  "bg-amber-500",
  "bg-red-400",
  "bg-blue-400",
  "bg-orange-500",
  "bg-purple-500",
  "bg-amber-300",
  "bg-green-400",
  "bg-pink-400",
  "bg-cyan-400",
  "bg-lime-400",
  "bg-indigo-400",
  "bg-teal-400",
  "bg-rose-400",
  "bg-yellow-400",
  "bg-fuchsia-400",
];

const images = [
  "https://media.istockphoto.com/id/1550071750/photo/green-tea-tree-leaves-camellia-sinensis-in-organic-farm-sunlight-fresh-young-tender-bud.jpg?s=612x612&w=0&k=20&c=RC_xD5DY5qPH_hpqeOY1g1pM6bJgGJSssWYjVIvvoLw=",
  "https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_user_personalization&w=740&q=80",
  "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
  "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
  "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg",
  "https://img.freepik.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?semt=ais_user_personalization&w=740&q=80",
];

const Scroll = () => {
  return (
    <>
      <ScrollArea className="h-[260px] max-w-[720px] rounded-md border p-4 mx-auto">
        <div className="flex flex-col gap-4">
          {colors.map((color) => (
            <div
              className={`flex items-center justify-center border-2  p-[20px_0] text-white font-semibold ${color}`}
            >
              <h1>Hello</h1>
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="flex items-center justify-center mt-30">
        <button className="flex items-center gap-2 bg-blue-300 px-5 py-2 rounded-full hover:bg-blue-900 text-white transition-all duration-300">
          <span className="text-lg font-semibold text-black">Control</span>
          <CiFaceFrown className="text-2xl text-black" />
        </button>{" "}
      </div>

      <div className=" flex no-scrollbar gap-10 max-w-[720px] mx-auto mt-[200px] overflow-x-auto border-2 border-black p-10  snap-x snap-mandatory scroll-smooth">
        {images.map((image) => (
          <div className="snap-center shrink-0">
            <img
              className="w-[300px] h-[200px] object-cover rounded-lg"
              src={image}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Scroll;
