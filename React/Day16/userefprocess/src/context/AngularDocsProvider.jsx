import { useCallback, useEffect, useRef, useState } from "react";
import { AngularDocsContext } from "./AngularDocsContext";

const STORAGE_KEYS = {
  completed: "ng_docs_completed_v1",
  notes: "ng_docs_notes_v1",
  cli: "ng_docs_cli_history_v1",
  selectedFile: "ng_docs_selected_file_v1",
};

const readStoredJson = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

const DEFAULT_CLI_HISTORY = [
  {
    id: 1,
    command: "ng version",
    lines: [
      "Angular CLI: 19.x",
      "Node: 20.x",
      "Package Manager: npm",
      "Ready to scaffold standalone Angular apps.",
    ],
  },
];

const AngularDocsProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState("architecture");
  const [searchQuery, setSearchQuery] = useState("");

  const [completedSections, setCompletedSections] = useState(() =>
    readStoredJson(STORAGE_KEYS.completed, [])
  );
  const [userNotes, setUserNotes] = useState(() =>
    readStoredJson(STORAGE_KEYS.notes, {})
  );
  const [cliHistory, setCliHistory] = useState(() =>
    readStoredJson(STORAGE_KEYS.cli, DEFAULT_CLI_HISTORY)
  );
  const [selectedFileId, setSelectedFileId] = useState(
    () => localStorage.getItem(STORAGE_KEYS.selectedFile) || "app-component-ts"
  );

  // Store DOM references for every scrollable documentation section
  const sectionRefs = useRef({});

  // Persist all user state to localStorage via useEffect
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.completed, JSON.stringify(completedSections));
  }, [completedSections]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.notes, JSON.stringify(userNotes));
  }, [userNotes]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.cli, JSON.stringify(cliHistory));
  }, [cliHistory]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.selectedFile, selectedFileId);
  }, [selectedFileId]);

  // Scroll-spy using IntersectionObserver + sectionRefs
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0 && visible[0].target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-15% 0px -65% 0px",
        threshold: [0.1, 0.3, 0.6],
      }
    );

    const nodes = Object.values(sectionRefs.current).filter(Boolean);
    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [searchQuery]);

  const registerSectionRef = useCallback((id, element) => {
    if (element) {
      sectionRefs.current[id] = element;
    }
  }, []);

  const scrollToSection = useCallback((id) => {
    const node = sectionRefs.current[id];
    if (node) {
      node.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  }, []);

  const toggleSectionComplete = useCallback((id) => {
    setCompletedSections((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }, []);

  const saveSectionNote = useCallback((id, text) => {
    setUserNotes((prev) => ({ ...prev, [id]: text }));
  }, []);

  const appendCliEntry = useCallback((command, lines) => {
    setCliHistory((prev) => [
      ...prev.slice(-9),
      { id: Date.now(), command, lines },
    ]);
  }, []);

  const clearCliHistory = useCallback(() => {
    setCliHistory(DEFAULT_CLI_HISTORY);
  }, []);

  const resetAllProgress = useCallback(() => {
    setCompletedSections([]);
    setUserNotes({});
    setCliHistory(DEFAULT_CLI_HISTORY);
    setSelectedFileId("app-component-ts");
    Object.values(STORAGE_KEYS).forEach((key) => localStorage.removeItem(key));
  }, []);

  return (
    <AngularDocsContext.Provider
      value={{
        activeSection,
        completedSections,
        userNotes,
        cliHistory,
        selectedFileId,
        searchQuery,
        setSearchQuery,
        setSelectedFileId,
        registerSectionRef,
        scrollToSection,
        toggleSectionComplete,
        saveSectionNote,
        appendCliEntry,
        clearCliHistory,
        resetAllProgress,
      }}
    >
      {children}
    </AngularDocsContext.Provider>
  );
};

export default AngularDocsProvider;
