import { useEffect, useRef, useState } from "react";
import { PauseIcon, PlayIcon } from "./Icons";

const PIPELINE_MODES = {
  boot: {
    label: "Boot & Screen Render Pipeline",
    steps: [
      {
        id: "cli",
        title: "1. ng serve",
        byteTag: "TS -> JS",
        desc: "Angular CLI compiles TypeScript (.ts), HTML templates, and CSS into browser-ready JavaScript byte chunks.",
      },
      {
        id: "index",
        title: "2. index.html",
        byteTag: "<app-root>",
        desc: "Browser loads index.html and finds the single <app-root></app-root> mount anchor.",
      },
      {
        id: "main",
        title: "3. main.ts",
        byteTag: "bootstrap()",
        desc: "bootstrapApplication(AppComponent, appConfig) starts Angular and wires Router + HttpClient.",
      },
      {
        id: "root",
        title: "4. AppComponent",
        byteTag: "HTML + CSS",
        desc: "Root component loads its template, imports child components, and paints the live DOM.",
      },
    ],
  },
  data: {
    label: "Component-to-Component Byte Flow",
    steps: [
      {
        id: "parent-state",
        title: "1. Parent State",
        byteTag: "userName = 'Mukund'",
        desc: "DashboardComponent holds data (or reads from a Service) in its TypeScript class.",
      },
      {
        id: "input-bind",
        title: "2. [input] Down",
        byteTag: "@Input() / input()",
        desc: "Parent sends byte payload down via template attribute: <app-user-card [name]=\"userName\" />.",
      },
      {
        id: "child-render",
        title: "3. Child Renders",
        byteTag: "{{ name() }}",
        desc: "UserCardComponent receives the input, renders it cleanly, and watches user clicks.",
      },
      {
        id: "output-emit",
        title: "4. (output) Up",
        byteTag: "@Output() / output()",
        desc: "Child emits an event back up: (selected)=\"onUserSelect($event)\" so Parent updates state.",
      },
    ],
  },
};

const ByteFlowPipeline = () => {
  const [mode, setMode] = useState("boot");
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const intervalRef = useRef(null);

  const currentPipeline = PIPELINE_MODES[mode];
  const steps = currentPipeline.steps;

  // Drive step-by-step byte packet animation using useEffect + useRef
  useEffect(() => {
    if (!isPlaying) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 1800);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, steps.length]);

  const handleModeChange = (nextMode) => {
    setMode(nextMode);
    setActiveStep(0);
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
        <div>
          <span className="inline-block rounded bg-red-50 px-2 py-0.5 text-xs font-semibold text-red-700">
            LIVE BYTE FLOW ANIMATION
          </span>
          <h3 className="mt-1 text-base font-bold text-slate-900">
            {currentPipeline.label}
          </h3>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => handleModeChange("boot")}
            className={`rounded-md border px-3 py-1.5 text-xs font-semibold cursor-pointer ${
              mode === "boot"
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
            }`}
          >
            Boot Flow
          </button>
          <button
            onClick={() => handleModeChange("data")}
            className={`rounded-md border px-3 py-1.5 text-xs font-semibold cursor-pointer ${
              mode === "data"
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
            }`}
          >
            Parent ↔ Child Flow
          </button>
          <button
            onClick={() => setIsPlaying((p) => !p)}
            className="inline-flex items-center gap-1.5 rounded-md border border-red-700 bg-red-700 px-3 py-1.5 text-xs font-semibold text-white hover:bg-red-800 cursor-pointer"
          >
            {isPlaying ? (
              <>
                <PauseIcon className="w-3.5 h-3.5" /> Pause
              </>
            ) : (
              <>
                <PlayIcon className="w-3.5 h-3.5" /> Play
              </>
            )}
          </button>
        </div>
      </div>

      {/* Animated SVG Byte Wire */}
      <div className="mt-5 overflow-x-auto pb-2">
        <div className="min-w-[620px]">
          <svg
            viewBox="0 0 800 38"
            className="w-full h-9"
            aria-label="Animated byte transmission pipeline"
          >
            <line
              x1="60"
              y1="19"
              x2="740"
              y2="19"
              stroke="#CBD5E1"
              strokeWidth="3"
            />
            <line
              x1="60"
              y1="19"
              x2="740"
              y2="19"
              stroke="#B91C1C"
              strokeWidth="3"
              className={isPlaying ? "animate-byte-line" : "animate-byte-line-paused"}
            />
            {steps.map((step, idx) => {
              const cx = 100 + idx * 200;
              const isCurrent = idx === activeStep;
              return (
                <g
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className="cursor-pointer"
                >
                  <circle
                    cx={cx}
                    cy="19"
                    r={isCurrent ? 10 : 7}
                    fill={isCurrent ? "#B91C1C" : "#0F172A"}
                    stroke="#FFFFFF"
                    strokeWidth="2.5"
                  />
                </g>
              );
            })}
          </svg>

          {/* 4 Pipeline Nodes */}
          <div className="grid grid-cols-4 gap-3 mt-1">
            {steps.map((step, idx) => {
              const isCurrent = idx === activeStep;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`text-left rounded-lg border p-3 transition-all cursor-pointer ${
                    isCurrent
                      ? "border-red-700 bg-red-50/70 shadow-sm"
                      : "border-slate-200 bg-slate-50 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-xs font-bold text-slate-900">
                      {step.title}
                    </span>
                    {isCurrent && (
                      <span className="h-2 w-2 rounded-full bg-red-700 animate-packet-pulse" />
                    )}
                  </div>
                  <code className="mt-1.5 inline-block rounded bg-slate-900 px-2 py-0.5 text-[11px] font-mono text-slate-100">
                    {step.byteTag}
                  </code>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Active Step Explanation Box */}
      <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
        <span className="font-semibold text-slate-900">
          {steps[activeStep].title}:
        </span>{" "}
        {steps[activeStep].desc}
      </div>
    </div>
  );
};

export default ByteFlowPipeline;
