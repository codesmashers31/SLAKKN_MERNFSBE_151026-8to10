# React `useContext` Hook — Sample Notes

## 1. What is `useContext`?
`useContext` is a built-in React Hook that lets a component **read and subscribe to shared data** (context) from a parent component **without passing props down manually through every level** (avoiding **prop drilling**).

### Prop Drilling vs `useContext`
- **Without `useContext`:** `App -> Layout -> Header -> ThemeButton` (must pass `theme` prop through `Layout` and `Header` even if they don't use it).
- **With `useContext`:** `App` provides `theme` via a `Provider`, and `ThemeButton` reads it directly with `useContext(ThemeContext)`.

---

## 2. The 3-Step Process

### Step 1: Create the Context
Create the context outside your components (usually in its own file or at the top of a shared module).
```jsx
import { createContext } from "react";

// "light" is the fallback/default value if a component reads this
// without a matching <Provider> above it.
export const ThemeContext = createContext("light");
```

### Step 2: Provide the Context Value
Wrap the parent component tree with `<ThemeContext.Provider value={...}>`.
Any component inside this wrapper can access `value`.
```jsx
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}
```

### Step 3: Consume the Context Value (`useContext`)
Call `useContext(ThemeContext)` inside any child component at any depth.
```jsx
import { useContext } from "react";

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Current Theme: {theme}
    </button>
  );
}
```

---

## 3. Key Rules & Common Gotchas
1. **Default Value Only Applies When There Is No Provider:**
   If `<ThemeContext.Provider>` wraps your component, `useContext` uses the `value` prop from the **nearest** Provider above it—even if `value` is `null` or `undefined`.
2. **Re-renders Automatically:**
   When the Provider's `value` changes (for example, when `useState` updates `theme`), every component calling `useContext(ThemeContext)` automatically re-renders with the new value.
3. **Call `useContext` at the Top Level:**
   Like all React Hooks, call `useContext` at the top level of your component (not inside loops or `if` blocks).
4. **Good Use Cases:**
   - Light / Dark **theme**
   - Logged-in **user / auth** info
   - **Language / locale** settings
   - Shared **cart** or app-wide UI state

---

## 4. Quick Example Files in This Project
- `src/components/ThemeContextDemo.jsx` — Full Light/Dark theme example + basic examples with step-by-step comments.
- `src/components/ContextGreeting.jsx` — Minimal greeting example showing Provider vs fallback value.
