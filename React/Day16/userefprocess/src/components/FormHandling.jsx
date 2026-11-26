import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const readAuthData = () => {
  try {
    return JSON.parse(localStorage.getItem("authdata")) || [];
  } catch {
    return [];
  }
};

const FormHandling = () => {
  // STEP 3: Consume shared ThemeContext inside FormHandling
  const { theme, isDark } = useContext(ThemeContext);

  const nameRef = useRef(null);
  const mobileRef = useRef(null);
  const emailRef = useRef(null);
  const [getData, setGetData] = useState(readAuthData);

  const getDatas = () => {
    setGetData(readAuthData());
  };

  const handleClick = (e) => {
    e.preventDefault();

    const obj = {
      userid: Date.now(),
      username: nameRef.current.value,
      usermobile: mobileRef.current.value,
      useremail: emailRef.current.value,
    };

    const datas = readAuthData();
    datas.push(obj);
    localStorage.setItem("authdata", JSON.stringify(datas));

    nameRef.current.value = "";
    mobileRef.current.value = "";
    emailRef.current.value = "";

    getDatas();
  };

  const inputClass = `border w-full p-2 rounded transition-colors ${
    isDark
      ? "bg-slate-800 border-slate-600 text-white placeholder-slate-400"
      : "bg-white border-slate-300 text-slate-900 placeholder-slate-400"
  }`;

  return (
    <section
      className={`mx-6 my-6 rounded-2xl border p-8 transition-colors ${
        isDark
          ? "bg-slate-900 border-slate-700 text-slate-100"
          : "bg-gray-100 border-gray-200 text-slate-900"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <p className="text-xs font-semibold uppercase tracking-wide opacity-80">
          FormHandling Component — Theme: {theme}
        </p>

        <div
          className={`rounded-xl shadow-lg p-6 w-full max-w-sm border transition-colors ${
            isDark
              ? "bg-slate-950 border-slate-700"
              : "bg-white border-slate-200 shadow-blue-100"
          }`}
        >
          <form className="flex flex-col gap-4" onSubmit={handleClick}>
            <input
              type="text"
              className={inputClass}
              ref={nameRef}
              placeholder="Enter the Name"
            />
            <input
              type="text"
              className={inputClass}
              ref={mobileRef}
              placeholder="Enter the Mobile"
            />
            <input
              type="text"
              className={inputClass}
              ref={emailRef}
              placeholder="Enter the Email"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg p-2 cursor-pointer"
            >
              Register
            </button>
          </form>
        </div>

        {getData.length > 0 && (
          <div className="w-full max-w-2xl grid gap-3 sm:grid-cols-2">
            {getData.map((e) => (
              <div
                key={e.userid}
                className={`rounded-lg border p-4 text-sm transition-colors ${
                  isDark
                    ? "bg-slate-800 border-slate-700 text-slate-100"
                    : "bg-white border-slate-200 text-slate-800"
                }`}
              >
                <h2 className="font-semibold text-xs opacity-70">ID: {e.userid}</h2>
                <p className="font-medium mt-1">{e.username}</p>
                <p>{e.usermobile}</p>
                <p>{e.useremail}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FormHandling;
