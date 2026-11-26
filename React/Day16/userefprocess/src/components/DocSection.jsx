import { useContext, useEffect, useRef, useState } from "react";
import { AngularDocsContext } from "../context/AngularDocsContext";
import { CheckCircleIcon, NoteIcon } from "./Icons";

const DocSection = ({ id, number, title, level, summary, children }) => {
  const {
    registerSectionRef,
    completedSections,
    toggleSectionComplete,
    userNotes,
    saveSectionNote,
  } = useContext(AngularDocsContext);

  const sectionRef = useRef(null);
  const [notesOpen, setNotesOpen] = useState(Boolean(userNotes[id]));
  const isCompleted = completedSections.includes(id);

  // Register this section DOM node for scroll-spy and sidebar jump navigation
  useEffect(() => {
    registerSectionRef(id, sectionRef.current);
  }, [id, registerSectionRef]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className="scroll-mt-20 border-b border-slate-200 pb-12 pt-2 last:border-b-0"
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded bg-slate-900 px-2 py-0.5 font-mono text-xs font-bold text-white">
              {number}
            </span>
            <span className="rounded border border-slate-300 bg-white px-2 py-0.5 text-xs font-semibold text-slate-600">
              {level}
            </span>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
            {title}
          </h2>
          <p className="mt-2 max-w-3xl text-sm sm:text-base text-slate-600 leading-relaxed">
            {summary}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setNotesOpen((prev) => !prev)}
            className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
          >
            <NoteIcon className="w-3.5 h-3.5" />
            {notesOpen ? "Hide Notes" : "My Notes"}
          </button>

          <button
            type="button"
            onClick={() => toggleSectionComplete(id)}
            className={`inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-semibold cursor-pointer transition-colors ${
              isCompleted
                ? "border-emerald-700 bg-emerald-700 text-white hover:bg-emerald-800"
                : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
            }`}
          >
            <CheckCircleIcon className="w-3.5 h-3.5" />
            {isCompleted ? "Completed" : "Mark Complete"}
          </button>
        </div>
      </div>

      {/* Optional Persisted Study Notes Drawer */}
      {notesOpen && (
        <div className="mt-4 rounded-lg border border-amber-300 bg-amber-50 p-4">
          <label className="block text-xs font-bold uppercase tracking-wide text-amber-900 mb-1.5">
            Personal Study Notes for {title} (auto-saved to localStorage)
          </label>
          <textarea
            rows={2}
            value={userNotes[id] || ""}
            onChange={(e) => saveSectionNote(id, e.target.value)}
            placeholder="Write key takeaways, commands, or reminders for this Angular topic..."
            className="w-full rounded-md border border-amber-300 bg-white p-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-red-700 focus:outline-none"
          />
        </div>
      )}

      <div className="mt-6 space-y-6">{children}</div>
    </section>
  );
};

export default DocSection;
