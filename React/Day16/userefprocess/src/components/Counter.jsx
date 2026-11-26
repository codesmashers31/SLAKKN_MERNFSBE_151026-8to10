import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Counter = () => {
  // STEP 3: Consume shared ThemeContext inside Counter (no props needed)
  const { theme, isDark, toggleTheme } = useContext(ThemeContext);

  const timerRef = useRef(null);
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setCounter((p) => p + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    // setCounter(0)
  };

  return (
    <section
      className={`mx-6 my-6 rounded-2xl border p-10 flex flex-col justify-center items-center transition-colors ${
        isDark
          ? "bg-slate-900 border-slate-700 text-slate-100"
          : "bg-amber-200 border-amber-300 text-slate-900"
      }`}
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="text-xs font-semibold uppercase tracking-wide opacity-80">
          Counter Component — Theme: {theme}
        </span>
        <button
          onClick={toggleTheme}
          className={`rounded-md px-2.5 py-1 text-xs font-semibold cursor-pointer transition-colors ${
            isDark
              ? "bg-slate-700 text-amber-300 hover:bg-slate-600"
              : "bg-white text-slate-800 hover:bg-amber-100"
          }`}
        >
          Toggle Theme
        </button>
      </div>

      <div className="flex flex-col gap-6 justify-center items-center">
        <h3
          className={`p-3 my-2 flex justify-center items-center text-2xl font-bold w-28 h-28 rounded-full shadow transition-colors ${
            isDark ? "bg-slate-800 text-amber-300 border border-slate-600" : "bg-white text-slate-900"
          }`}
        >
          {counter}
        </h3>
        <div>
          <button
            onClick={handleClick}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-2xl py-2 px-4 text-center w-28 mx-3 cursor-pointer"
          >
            Start
          </button>
          <button
            onClick={handleStop}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-2xl py-2 px-4 text-center w-28 mx-3 cursor-pointer"
          >
            Stop
          </button>
        </div>
      </div>
    </section>
  );
};

export default Counter;
