import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Random = () => {


  const {gif, loading, fetchData} = useGif();
  return (
    <div className="random-bg  w-1/2 h-[450px] rounded-lg border-2 border-yellow-600 flex flex-col gap-y-5 items-center mt-[45px] ">
      <h1 className="text-2xl underline uppercase font-bold  text-white">Random Gif</h1>

      {
        loading ? (<Spinner className="py-[33px]" />) : (<img src={gif} alt="Gif" className="object-cover w-[380] h-[300px] rounded-md" />)
      }
      
      <button
        onClick={() => fetchData()}
        className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-3 mt-3 "
      >
        Generate Gif
      </button>
    </div>
  );
};

export default Random;
