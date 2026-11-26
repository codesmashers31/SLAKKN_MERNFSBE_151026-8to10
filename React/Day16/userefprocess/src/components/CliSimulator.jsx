import { useContext, useEffect, useRef, useState } from "react";
import { AngularDocsContext } from "../context/AngularDocsContext";
import { CLI_COMMANDS_REFERENCE } from "../data/angularDocsData";
import { TerminalIcon } from "./Icons";

const resolveDynamicCommand = (rawInput) => {
  const cmd = rawInput.trim();
  const matchedPreset = CLI_COMMANDS_REFERENCE.find(
    (item) => item.cmd.toLowerCase() === cmd.toLowerCase() || item.alias.toLowerCase() === cmd.toLowerCase()
  );
  if (matchedPreset) return matchedPreset.output;

  const compMatch = cmd.match(/^ng\s+(?:generate|g)\s+(?:component|c)\s+([\w/-]+)$/i);
  if (compMatch) {
    const rawPath = compMatch[1].replace(/^\/+|\/+$/g, "");
    const name = rawPath.split("/").pop();
    return [
      `CREATE src/app/${rawPath}/${name}.component.html (24 bytes)`,
      `CREATE src/app/${rawPath}/${name}.component.spec.ts (612 bytes)`,
      `CREATE src/app/${rawPath}/${name}.component.ts (265 bytes)`,
      `CREATE src/app/${rawPath}/${name}.component.css (0 bytes)`,
      `Standalone component ready: import into parent \`imports: [...]\` and use <app-${name} />.`,
    ];
  }

  const svcMatch = cmd.match(/^ng\s+(?:generate|g)\s+(?:service|s)\s+([\w/-]+)$/i);
  if (svcMatch) {
    const rawPath = svcMatch[1].replace(/^\/+|\/+$/g, "");
    const name = rawPath.split("/").pop();
    return [
      `CREATE src/app/${rawPath}/${name}.service.spec.ts (350 bytes)`,
      `CREATE src/app/${rawPath}/${name}.service.ts (142 bytes)`,
      `Provided in 'root' — inject with \`inject(${name[0].toUpperCase() + name.slice(1)}Service)\`.`,
    ];
  }

  if (/^ng\s+(help|--help)$/i.test(cmd)) {
    return [
      "Available commands:",
      "  ng new <name>             Create a new Angular workspace",
      "  ng serve -o               Start local dev server on :4200",
      "  ng g c <folder/name>      Generate a standalone component",
      "  ng g s <folder/name>      Generate an injectable service",
      "  ng build                  Build production bundle into dist/",
    ];
  }

  return [
    `Unknown command: "${cmd}".`,
    "Try `ng g c features/profile`, `ng g s core/services/api`, `ng serve -o`, or `ng help`.",
  ];
};

const CliSimulator = () => {
  const { cliHistory, appendCliEntry, clearCliHistory } = useContext(AngularDocsContext);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  // Auto-scroll terminal to newest output whenever cliHistory updates
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [cliHistory]);

  const executeCommand = (commandText) => {
    const trimmed = commandText.trim();
    if (!trimmed) return;
    const outputLines = resolveDynamicCommand(trimmed);
    appendCliEntry(trimmed, outputLines);
    setInput("");
    if (inputRef.current) inputRef.current.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    executeCommand(input);
  };

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950 text-slate-100 overflow-hidden shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 bg-slate-900 px-4 py-3">
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-4 h-4 text-red-500" />
          <span className="text-xs font-bold uppercase tracking-wide text-slate-200">
            Interactive Angular CLI Sandbox (Saved in localStorage)
          </span>
        </div>
        <button
          type="button"
          onClick={clearCliHistory}
          className="rounded border border-slate-700 bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-300 hover:bg-slate-700 cursor-pointer"
        >
          Reset Terminal
        </button>
      </div>

      {/* Quick Preset Command Buttons */}
      <div className="flex flex-wrap gap-2 border-b border-slate-800 bg-slate-900/60 px-4 py-2.5">
        {CLI_COMMANDS_REFERENCE.map((item) => (
          <button
            key={item.cmd}
            type="button"
            onClick={() => executeCommand(item.cmd)}
            className="rounded border border-slate-700 bg-slate-800 px-2.5 py-1 font-mono text-xs text-slate-200 hover:border-red-500 hover:text-white cursor-pointer"
          >
            $ {item.cmd}
          </button>
        ))}
      </div>

      {/* Output Log */}
      <div
        ref={scrollRef}
        className="max-h-64 overflow-y-auto p-4 font-mono text-xs space-y-3"
      >
        {cliHistory.map((entry) => (
          <div key={entry.id} className="space-y-1">
            <div className="text-red-400 font-semibold">$ {entry.command}</div>
            {entry.lines.map((line, i) => (
              <div key={i} className="text-slate-300 pl-3">
                {line}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Interactive Command Input */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 border-t border-slate-800 bg-slate-900 px-4 py-2.5"
      >
        <span className="font-mono text-xs font-bold text-red-500">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type any ng command (e.g. ng g c shared/card) and press Enter"
          className="flex-1 bg-transparent font-mono text-xs text-white placeholder-slate-500 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded bg-red-700 px-3 py-1 text-xs font-semibold text-white hover:bg-red-800 cursor-pointer"
        >
          Run
        </button>
      </form>
    </div>
  );
};

export default CliSimulator;
