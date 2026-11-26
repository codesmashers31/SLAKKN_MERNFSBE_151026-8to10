import { createContext } from "react";

export const AngularDocsContext = createContext({
  activeSection: "architecture",
  completedSections: [],
  userNotes: {},
  cliHistory: [],
  selectedFileId: "app-component-ts",
  searchQuery: "",
  setSearchQuery: () => {},
  setSelectedFileId: () => {},
  registerSectionRef: () => {},
  scrollToSection: () => {},
  toggleSectionComplete: () => {},
  saveSectionNote: () => {},
  appendCliEntry: () => {},
  clearCliHistory: () => {},
  resetAllProgress: () => {},
});
