import { useContext, useRef } from "react";
import { AngularDocsContext } from "../context/AngularDocsContext";
import { DOC_SECTIONS } from "../data/angularDocsData";
import { BookIcon, CheckCircleIcon, SearchIcon } from "./Icons";

const SidebarNav = () => {
  const {
    activeSection,
    completedSections,
    searchQuery,
    setSearchQuery,
    scrollToSection,
    resetAllProgress,
  } = useContext(AngularDocsContext);

  const searchInputRef = useRef(null);

  const filteredSections = DOC_SECTIONS.filter((sec) => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return true;
    return (
      sec.title.toLowerCase().includes(q) ||
      sec.summary.toLowerCase().includes(q) ||
      sec.level.toLowerCase().includes(q)
    );
  });

  const progressPercent = Math.round(
    (completedSections.length / DOC_SECTIONS.length) * 100
  );

  return (
    <aside className="lg:w-72 lg:shrink-0 border-b lg:border-b-0 lg:border-r border-slate-200 bg-white">
      <div className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col p-5">
        {/* Brand */}
        <div className="flex items-center gap-2.5 pb-4 border-b border-slate-200">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-700 text-white font-mono text-sm font-bold">
            NG
          </div>
          <div>
            <h1 className="text-sm font-bold text-slate-900 leading-tight">
              Angular Field Guide
            </h1>
            <p className="text-[11px] text-slate-500">
              React SPA Documentation Lab
            </p>
          </div>
        </div>

        {/* Progress Tracker */}
        <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-3">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
            <span className="inline-flex items-center gap-1.5">
              <BookIcon className="w-3.5 h-3.5 text-red-700" />
              Study Progress
            </span>
            <span>
              {completedSections.length}/{DOC_SECTIONS.length} ({progressPercent}%)
            </span>
          </div>
          <div className="mt-2 h-2 w-full rounded-full bg-slate-200 overflow-hidden">
            <div
              className="h-full bg-red-700 transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Section Filter */}
        <div className="mt-4 relative">
          <SearchIcon className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter chapters..."
            className="w-full rounded-md border border-slate-300 bg-white pl-8 pr-3 py-1.5 text-xs text-slate-900 placeholder-slate-400 focus:border-red-700 focus:outline-none"
          />
        </div>

        {/* Scrollable Navigation Links */}
        <nav className="mt-4 flex-1 overflow-y-auto space-y-1 pr-1" aria-label="Documentation chapters">
          {filteredSections.map((sec) => {
            const isActive = activeSection === sec.id;
            const isDone = completedSections.includes(sec.id);

            return (
              <button
                key={sec.id}
                type="button"
                onClick={() => scrollToSection(sec.id)}
                className={`w-full text-left rounded-lg px-3 py-2 text-xs transition-colors flex items-center justify-between gap-2 cursor-pointer ${
                  isActive
                    ? "bg-slate-900 text-white font-semibold"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                <span className="truncate">
                  <span className="font-mono opacity-60 mr-1.5">{sec.number}</span>
                  {sec.title}
                </span>
                {isDone && (
                  <CheckCircleIcon
                    className={`w-3.5 h-3.5 shrink-0 ${
                      isActive ? "text-emerald-400" : "text-emerald-700"
                    }`}
                  />
                )}
              </button>
            );
          })}

          {filteredSections.length === 0 && (
            <p className="px-3 py-2 text-xs text-slate-500">
              No chapters match "{searchQuery}".
            </p>
          )}
        </nav>

        {/* Footer Reset */}
        <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between gap-2">
          <span className="text-[11px] text-slate-500">
            Hooks: Context + Ref + Effect
          </span>
          <button
            type="button"
            onClick={resetAllProgress}
            className="text-[11px] font-semibold text-red-700 hover:underline cursor-pointer"
          >
            Reset Progress
          </button>
        </div>
      </div>
    </aside>
  );
};

export default SidebarNav;
