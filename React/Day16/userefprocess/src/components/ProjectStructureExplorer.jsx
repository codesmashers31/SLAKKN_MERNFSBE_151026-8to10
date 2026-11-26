import { useContext } from "react";
import { AngularDocsContext } from "../context/AngularDocsContext";
import { FOLDER_CONVENTIONS, PROJECT_FILES } from "../data/angularDocsData";
import CodeBlock from "./CodeBlock";
import { FileCodeIcon, FolderIcon } from "./Icons";

const ProjectStructureExplorer = () => {
  const { selectedFileId, setSelectedFileId } = useContext(AngularDocsContext);

  const activeFile =
    PROJECT_FILES.find((f) => f.id === selectedFileId) || PROJECT_FILES[0];

  return (
    <div className="space-y-6">
      {/* Interactive File Tree + Code Viewer */}
      <div className="grid gap-4 lg:grid-cols-12 rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
        <div className="lg:col-span-5 space-y-2">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
            <FolderIcon className="w-4 h-4 text-red-700" />
            <span className="text-sm font-bold text-slate-900">
              my-angular-app/ (Click any file)
            </span>
          </div>

          <div className="space-y-1.5">
            {PROJECT_FILES.map((file) => {
              const isSelected = file.id === activeFile.id;
              const isOpenFirst = file.badge.startsWith("OPEN FIRST");
              return (
                <button
                  key={file.id}
                  type="button"
                  onClick={() => setSelectedFileId(file.id)}
                  className={`w-full text-left rounded-lg border px-3 py-2.5 transition-colors cursor-pointer ${
                    isSelected
                      ? "border-red-700 bg-red-50/70"
                      : "border-slate-200 bg-slate-50 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-slate-900">
                      <FileCodeIcon className="w-3.5 h-3.5 text-slate-600" />
                      {file.path}
                    </span>
                    <span
                      className={`rounded px-1.5 py-0.5 text-[10px] font-bold uppercase ${
                        isOpenFirst
                          ? "bg-red-700 text-white"
                          : "bg-slate-200 text-slate-700"
                      }`}
                    >
                      {file.badge}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-600">{file.role}</p>
                </button>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-7 space-y-3">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="font-mono text-sm font-bold text-slate-900">
                {activeFile.path}
              </h4>
              <span className="rounded bg-slate-900 px-2 py-0.5 text-[11px] font-semibold text-white">
                {activeFile.role}
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">
              {activeFile.whyOpen}
            </p>
          </div>

          <CodeBlock
            filename={activeFile.path}
            language={activeFile.path.endsWith(".html") ? "html" : "ts"}
            code={activeFile.code}
          />
        </div>
      </div>

      {/* Folder Maintenance Guide Table */}
      <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
        <div className="border-b border-slate-200 bg-slate-50 px-5 py-3">
          <h4 className="text-sm font-bold text-slate-900">
            Which Folders Should You Maintain Inside src/app/?
          </h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50/70 text-xs uppercase text-slate-500">
              <tr>
                <th className="px-5 py-3">Folder</th>
                <th className="px-5 py-3">What to Maintain Here</th>
                <th className="px-5 py-3">Example Files</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {FOLDER_CONVENTIONS.map((row) => (
                <tr key={row.folder}>
                  <td className="px-5 py-3 font-mono text-xs font-semibold text-red-700">
                    {row.folder}
                  </td>
                  <td className="px-5 py-3 text-slate-700">{row.maintain}</td>
                  <td className="px-5 py-3 font-mono text-xs text-slate-600">
                    {row.example}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProjectStructureExplorer;
