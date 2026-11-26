import { useRef, useState } from "react";
import { ARCHITECTURE_3D_LAYERS } from "../data/angularDocsData";
import { LayersIcon } from "./Icons";

const Architecture3DStack = () => {
  const [selectedLayerId, setSelectedLayerId] = useState("root");
  const [exploded, setExploded] = useState(true);
  const [tilt, setTilt] = useState({ rotateX: 22, rotateY: -16 });
  const stageRef = useRef(null);

  const selectedLayer =
    ARCHITECTURE_3D_LAYERS.find((l) => l.id === selectedLayerId) ||
    ARCHITECTURE_3D_LAYERS[2];

  // Subtle interactive 3D pointer tilt anchored to stageRef
  const handleMouseMove = (e) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      rotateX: Math.round(22 - normY * 14),
      rotateY: Math.round(-16 + normX * 20),
    });
  };

  const resetTilt = () => {
    setTilt({ rotateX: 22, rotateY: -16 });
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
        <div>
          <span className="inline-flex items-center gap-1 rounded bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-700">
            <LayersIcon className="w-3.5 h-3.5" /> 3D ARCHITECTURE STACK
          </span>
          <h3 className="mt-1 text-base font-bold text-slate-900">
            Interactive 3D Angular Runtime Layers
          </h3>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setExploded((prev) => !prev)}
            className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 hover:bg-slate-50 cursor-pointer"
          >
            {exploded ? "Collapse Stack" : "Explode 3D Layers"}
          </button>
          <button
            type="button"
            onClick={resetTilt}
            className="rounded-md border border-slate-900 bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-slate-800 cursor-pointer"
          >
            Reset Angle
          </button>
        </div>
      </div>

      <div className="mt-5 grid gap-6 lg:grid-cols-12 items-center">
        {/* 3D Isometric Stack */}
        <div
          ref={stageRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetTilt}
          className="lg:col-span-7 perspective-stage rounded-xl border border-slate-200 bg-slate-50 p-6 flex items-center justify-center min-h-[340px] overflow-hidden"
        >
          <div
            className="preserve-3d w-full max-w-sm transition-transform duration-200 ease-out"
            style={{
              transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
            }}
          >
            <div className="preserve-3d flex flex-col gap-2">
              {ARCHITECTURE_3D_LAYERS.map((item, idx) => {
                const isSelected = item.id === selectedLayerId;
                const zOffset = exploded ? (4 - idx) * 18 : 0;
                const yShift = exploded ? (idx - 2) * 4 : 0;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedLayerId(item.id)}
                    style={{
                      transform: `translateZ(${zOffset}px) translateY(${yShift}px) ${
                        isSelected ? "translateX(10px)" : ""
                      }`,
                    }}
                    className={`w-full text-left rounded-lg border px-4 py-2.5 transition-all duration-300 cursor-pointer shadow-sm ${
                      item.colorClass
                    } ${isSelected ? "ring-2 ring-red-700" : "opacity-90 hover:opacity-100"}`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold">{item.layer}</span>
                      <code className="text-[11px] font-mono opacity-80">
                        {item.file}
                      </code>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Selected Layer Inspector + Angle Controls */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <span className="text-xs font-semibold uppercase tracking-wide text-red-700">
              Selected Layer
            </span>
            <h4 className="mt-1 text-base font-bold text-slate-900">
              {selectedLayer.layer}
            </h4>
            <code className="mt-1 inline-block rounded bg-slate-900 px-2 py-0.5 text-xs font-mono text-white">
              {selectedLayer.file}
            </code>
            <p className="mt-3 text-sm font-medium text-slate-800">
              {selectedLayer.summary}
            </p>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              {selectedLayer.detail}
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Manual 3D Rotation Controls
            </p>
            <div>
              <label className="flex justify-between text-xs font-medium text-slate-700 mb-1">
                <span>Pitch (rotateX)</span>
                <span>{tilt.rotateX} deg</span>
              </label>
              <input
                type="range"
                min="0"
                max="40"
                value={tilt.rotateX}
                onChange={(e) =>
                  setTilt((prev) => ({ ...prev, rotateX: Number(e.target.value) }))
                }
                className="w-full accent-red-700 cursor-pointer"
              />
            </div>
            <div>
              <label className="flex justify-between text-xs font-medium text-slate-700 mb-1">
                <span>Yaw (rotateY)</span>
                <span>{tilt.rotateY} deg</span>
              </label>
              <input
                type="range"
                min="-35"
                max="35"
                value={tilt.rotateY}
                onChange={(e) =>
                  setTilt((prev) => ({ ...prev, rotateY: Number(e.target.value) }))
                }
                className="w-full accent-red-700 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Architecture3DStack;
