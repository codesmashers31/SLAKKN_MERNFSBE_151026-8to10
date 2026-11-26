import { createContext, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

/*
  =============================================================================
  useContext BASICS & THEME PROCESS — COMPLETE GUIDE IN COMMENTS
  =============================================================================

  WHAT IS useContext?
  - Normally in React, data flows top-down through props.
  - Passing props through many middle components that don't need them is called
    "prop drilling".
  - useContext lets a parent component share data with ANY child component
    below it, no matter how deeply nested, without passing props manually.

  THE 3 STEPS TO USE CONTEXT:
  1. CREATE:  See `src/context/ThemeContext.js`
              const ThemeContext = createContext(defaultValue);
              -> Always create the context OUTSIDE components so it keeps the
                 same reference across re-renders.
              -> defaultValue is used only when no Provider wraps the reader.

  2. PROVIDE: See `src/context/ThemeProvider.jsx` and `src/App.jsx`
              <ThemeProvider> wraps the entire app so ThemeContext.Provider
              shares { theme, isDark, toggleTheme, setThemeMode } everywhere.

  3. CONSUME: const { theme, isDark, toggleTheme } = useContext(ThemeContext);
              -> Called inside AppShell, Counter, FormHandling, ContextGreeting,
                 and the nested components below.
              -> Whenever the Provider's value changes, all consumers re-render.
  =============================================================================
*/

// -----------------------------------------------------------------------------
// EXAMPLE 1 (Basics): Simple local context showing Fallback vs Provider value
// -----------------------------------------------------------------------------
const AppInfoContext = createContext({
  course: "React Basics (Fallback)",
  topic: "useContext",
});

const BasicInfoCard = () => {
  // Read nearest AppInfoContext (receives fallback if no Provider is above)
  const info = useContext(AppInfoContext);
  // Also read global ThemeContext so the card matches Light / Dark mode
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className={`rounded-lg border p-4 transition-colors ${
        isDark
          ? "border-slate-700 bg-slate-900 text-slate-100"
          : "border-slate-300 bg-white text-slate-800"
      }`}
    >
      <p className="text-sm font-semibold">Basic Context Example (No Props Passed)</p>
      <p className="text-sm mt-1">
        Course: <span className="font-medium">{info.course}</span> | Topic:{" "}
        <span className="font-medium">{info.topic}</span>
      </p>
    </div>
  );
};

// -----------------------------------------------------------------------------
// EXAMPLE 2 (Theme Process): Deeply Nested Child Components Using ThemeContext
// -----------------------------------------------------------------------------

// Middle wrapper accepts NO theme props — proving prop drilling is avoided.
const ThemeLayout = ({ children }) => {
  return <div className="space-y-4">{children}</div>;
};

// Child 1: Reads `theme` / `isDark` and triggers `toggleTheme` or `setThemeMode`
const ThemeHeader = () => {
  const { theme, isDark, toggleTheme, setThemeMode } = useContext(ThemeContext);

  return (
    <div
      className={`flex flex-wrap items-center justify-between gap-3 rounded-lg p-4 border transition-colors ${
        isDark
          ? "bg-slate-800 border-slate-700 text-white"
          : "bg-white border-slate-200 text-slate-900"
      }`}
    >
      <div>
        <h3 className="text-lg font-bold">Global Theme Switcher (useContext)</h3>
        <p className={`text-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}>
          Active mode: <span className="font-semibold uppercase">{theme}</span>
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setThemeMode("light")}
          className={`rounded-lg px-3 py-1.5 text-xs font-semibold cursor-pointer border ${
            !isDark
              ? "bg-amber-400 border-amber-500 text-slate-900"
              : "bg-slate-700 border-slate-600 text-slate-200 hover:bg-slate-600"
          }`}
        >
          Light
        </button>
        <button
          onClick={() => setThemeMode("dark")}
          className={`rounded-lg px-3 py-1.5 text-xs font-semibold cursor-pointer border ${
            isDark
              ? "bg-amber-400 border-amber-500 text-slate-900"
              : "bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200"
          }`}
        >
          Dark
        </button>
        <button
          onClick={toggleTheme}
          className={`rounded-lg px-3 py-1.5 text-xs font-semibold cursor-pointer ${
            isDark
              ? "bg-sky-400 text-slate-950 hover:bg-sky-300"
              : "bg-slate-900 text-white hover:bg-slate-700"
          }`}
        >
          Toggle
        </button>
      </div>
    </div>
  );
};

// Child 2: Independent nested component reading the same global ThemeContext
const ThemePreviewCard = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className={`rounded-lg p-4 border transition-colors ${
        isDark
          ? "bg-slate-900 border-slate-700 text-slate-100"
          : "bg-amber-50 border-amber-200 text-slate-800"
      }`}
    >
      <p className="font-semibold">Nested Preview Card</p>
      <p className="text-sm mt-1">
        Toggling the theme here updates <code>AppShell</code>,{" "}
        <code>ThemeContextDemo</code>, <code>ContextGreeting</code>,{" "}
        <code>Counter</code>, and <code>FormHandling</code> at the same time.
      </p>
    </div>
  );
};

// -----------------------------------------------------------------------------
// MAIN DEMO SECTION
// -----------------------------------------------------------------------------
const ThemeContextDemo = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <section
      className={`m-6 rounded-2xl border p-6 shadow-sm transition-colors ${
        isDark
          ? "bg-slate-900 border-slate-700 text-white"
          : "bg-slate-100 border-slate-300 text-slate-900"
      }`}
    >
      <h2 className="text-xl font-bold mb-4">useContext Basics &amp; Theme Process</h2>

      <div className="mb-4 space-y-2">
        <p className="text-xs uppercase tracking-wide opacity-75">
          1. Fallback value (no Provider above)
        </p>
        <BasicInfoCard />
      </div>

      <div className="mb-6 space-y-2">
        <p className="text-xs uppercase tracking-wide opacity-75">
          2. Provided value (Provider supplies custom data)
        </p>
        <AppInfoContext.Provider
          value={{ course: "MERN Full Stack (8 to 10)", topic: "useContext Hook" }}
        >
          <BasicInfoCard />
        </AppInfoContext.Provider>
      </div>

      <ThemeLayout>
        <ThemeHeader />
        <ThemePreviewCard />
      </ThemeLayout>
    </section>
  );
};

export default ThemeContextDemo;
