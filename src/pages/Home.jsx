/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Option from "../components/Option";
import Wrapper from "../components/Wrapper";


const Home = () => {

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1; // Increase progress by 1% every 100ms (10 seconds total)
      });
    }, 50); 

    return () => clearInterval(interval);
  }, []);

  
  return (
    <Wrapper>
      <div className="mx-auto w-full p-8 h-screen flex flex-col items-center justify-center gap-6">
        <div className="bg-yellow-200 w-[80%] h-fit border-2 border-slate-900 rounded-xl text-slate-900 text-3xl font-semibold py-6 px-3 text-center">
          What was the old name of the United Kingdom?
        </div>
        <div className="h-[200px] w-[80%] p-2 flex flex-col gap-2">
          <Option optionName="A" text="Albion" />
          <Option optionName="B" text="British" />
          <Option optionName="C" text="England" />
        </div>

        {/* SLIDER */}
        <div className="w-[60%] h-8 bg-white border border-gray-300 rounded-full overflow-hidden shadow-md">
      <div
        className="h-full bg-pink-300 transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>

      </div>
    </Wrapper>
  );
};

export default Home;
