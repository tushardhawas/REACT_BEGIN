import { useState } from "react";

function App() {
  const [color, setColor] = useState("#171717");
  const [color_bar, setColor_bar] = useState("#374151");

  return (
    <>
      <div
        className="w-full h-screen duration-200 "
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2  focus:border-blue-400 ">
          <div
            className="flex flex-wrap justify-center gap-5 shadow-lg  px-9 py-3 rounded-3xl text-gray-900 "
            style={{ backgroundColor: color_bar }}
          >
            <button
              onClick={() => {
                setColor("#fda4af");
                setColor_bar("#fda4af");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg border border-gray-400"
              style={{ backgroundColor: "#fda4af" }}
            ></button>
            <button
              onClick={() => {
                setColor("#171717");
                setColor_bar("#171717");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg border border-gray-400"
              style={{ backgroundColor: "#171717" }}
            ></button>
            <button
              onClick={() => {
                setColor_bar("#4ade80");
                setColor("#4ade80");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg border border-gray-400"
              style={{ backgroundColor: "#4ade80" }}
            ></button>
            <button
              onClick={() => {
                setColor("#3b82f6");
                setColor_bar("#3b82f6");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg border border-gray-400"
              style={{ backgroundColor: "#3b82f6" }}
            ></button>
             <div className="text-lg font-semibold text-white cursor-pointer hover:text-gray-300 transition duration-300">
              Click Me

            </div>
            <button
              onClick={() => {
                setColor("#d946ef");
                setColor_bar("#d946ef");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg border border-gray-400"
              style={{ backgroundColor: "#d946ef" }}
            ></button>
            <button
              onClick={() => {
                setColor("#facc15");
                setColor_bar("#facc15");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg border border-gray-400"
              style={{ backgroundColor: "#facc15" }}
            ></button>
            <button
              onClick={() => {
                setColor("#a5f3fc");
                setColor_bar("#a5f3fc");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg border border-gray-400"
              style={{ backgroundColor: "#a5f3fc" }}
            ></button>
            <button
              onClick={() => {
                setColor("#ec4899");
                setColor_bar("#ec4899");
              }}
              className="outline-none px-4 py-4 rounded-full text-white shadow-lg border border-gray-400"
              style={{ backgroundColor: "#ec4899" }}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
