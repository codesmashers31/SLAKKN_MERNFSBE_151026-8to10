import { useState } from "react"
import "./Practice.css"

const Practice = () => {
  const [bulb, setBulb] = useState(false)

  return (
    <main className={`bulb-page relative isolate flex min-h-[calc(100svh-56px)] flex-col items-center overflow-hidden px-6 py-12 text-white sm:py-16 ${bulb ? "is-on" : ""}`}>
      <header className="relative z-10 text-center">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-amber-200/60">A little light. A different mood.</p>
        <h1 className="text-4xl font-light tracking-tight sm:text-5xl">Let there be <span className="font-serif italic text-amber-100">light.</span></h1>
        <p className="mt-4 text-sm text-stone-400">One touch to warm up your space.</p>
      </header>

      <div className="bulb-scene" role="img" aria-label={`Glass filament light bulb, ${bulb ? "on" : "off"}`}>
        <div className="bulb-halo" />
        <div className="bulb-cord" />
        <div className="bulb-socket"><span /></div>
        <div className="bulb-neck" />
        <div className="bulb-glass">
          <div className="glass-reflection" />
          <div className="bulb-stem" />
          <div className="filament-wire wire-left" />
          <div className="filament-wire wire-right" />
          <div className="bulb-filament" />
        </div>
        <div className="floor-light" />
      </div>

      <section className="relative z-10 flex flex-col items-center">
        <div className="mb-5 flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.24em] text-stone-400" aria-live="polite">
          <span className="status-dot" />{bulb ? "The light is on" : "The light is off"}
        </div>
        <button
          type="button"
          role="switch"
          aria-checked={bulb}
          aria-label="Bulb power"
          onClick={() => setBulb(previous => !previous)}
          className="bulb-switch flex cursor-pointer items-center gap-6 rounded-full border px-5 py-3.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-amber-200"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M12 3v9M6.3 5.8a8.5 8.5 0 1 0 11.4 0" strokeLinecap="round" /></svg>
          <span className="min-w-24 text-left text-sm font-medium">{bulb ? "Turn light off" : "Turn light on"}</span>
          <span className="switch-track"><span className="switch-thumb" /></span>
        </button>
        <p className="mt-5 text-xs text-stone-500">Go ahead, flip the switch.</p>
      </section>
      <footer className="mt-12 flex gap-5 text-[9px] uppercase tracking-[0.22em] text-stone-500"><span>Warm white</span><span aria-hidden="true">·</span><span>2700 K</span><span aria-hidden="true">·</span><span>Filament bulb</span></footer>
    </main>
  )
}

export default Practice
