import { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Tag = () => {

  const [tag, settag] = useState("car");

 
//   const inputElement = document.querySelector('input');
//   inputElement.addEventListener('keydown', (event) => {
//     if (event.key === 'Enter') {
//       fetchData(tag);
//     }
//   });


  const {gif, loading, fetchData} = useGif(tag);
  return (
    <div className="tag-bg  w-1/2 h-[550px] rounded-lg border-2 border-yellow-600 flex flex-col gap-y-5 items-center mt-[45px] mb-9">
      <h1 className="text-2xl underline uppercase font-bold  text-white">
        {tag} Gif 
      </h1>

      {loading ? (
        <Spinner className="py-[33px]" />
      ) : (
        <img
          src={gif}
          alt="Gif"
          className="object-cover w-[380] h-[300px] rounded-md"
        />
      )}

      <input
        type="text"
        className="text-lg py-2 rounded-lg mb-3 mt-3 px-4 w-10/12"
        value={tag}
        onChange={(event) => settag(event.target.value)}
      />
      <button
        onClick={() => fetchData(tag)}
        className="w-10/12 bg-pink-500 text-lg py-2 rounded-lg mb-3 mt-3 "
      >
        Generate Gif
      </button>
    </div>
  );
};

export default Tag;
