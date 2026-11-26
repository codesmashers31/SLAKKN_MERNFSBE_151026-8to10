import { useState } from "react";
import CodeBlock from "./CodeBlock";

const ComponentWiringLab = () => {
  const [studentName, setStudentName] = useState("Mukund");
  const [courseTopic, setCourseTopic] = useState("Angular Standalone");
  const [lastEmitted, setLastEmitted] = useState("No selection emitted yet");

  const childCode = `// src/app/shared/user-card/user-card.component.ts
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  template: \`
    <div class="card">
      <h4>{{ name() }}</h4>
      <p>Track: {{ topic() }}</p>
      <button (click)="selectUser.emit(name())">Select</button>
    </div>
  \`,
})
export class UserCardComponent {
  // Receive data from parent component
  name = input.required<string>();
  topic = input<string>('Angular');

  // Emit event back up to parent component
  selectUser = output<string>();
}`;

  const parentCode = `// src/app/features/dashboard/dashboard.component.ts
import { Component } from '@angular/core';
import { UserCardComponent } from '../../shared/user-card/user-card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  // 1. Register the child component directly in imports[]
  imports: [UserCardComponent],
  // 2. Render its selector and wire [input] + (output)
  template: \`
    <app-user-card
      [name]="currentStudent"
      [topic]="currentTopic"
      (selectUser)="handleUserSelect($event)"
    />
  \`,
})
export class DashboardComponent {
  currentStudent = '${studentName}';
  currentTopic = '${courseTopic}';

  handleUserSelect(name: string) {
    console.log('Selected from child:', name);
  }
}`;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
        <div>
          <span className="rounded bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-700">
            INTERACTIVE COMPONENT WIRING LAB
          </span>
          <h3 className="mt-1 text-base font-bold text-slate-900">
            Loading Child &lt;app-user-card /&gt; Inside Parent &lt;app-dashboard /&gt;
          </h3>
        </div>
      </div>

      {/* Live Controls + Rendered Child Preview */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 space-y-3">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-600">
            Parent Component State (DashboardComponent)
          </p>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              [name] input value
            </label>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-900 focus:border-red-700 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              [topic] input value
            </label>
            <input
              type="text"
              value={courseTopic}
              onChange={(e) => setCourseTopic(e.target.value)}
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-900 focus:border-red-700 focus:outline-none"
            />
          </div>
          <div className="rounded border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700">
            <span className="font-semibold">Parent (selectUser) listener:</span>{" "}
            <span className="font-mono text-red-700">{lastEmitted}</span>
          </div>
        </div>

        {/* Simulated Child Output */}
        <div className="rounded-lg border-2 border-dashed border-slate-300 bg-white p-4 flex flex-col justify-between">
          <div>
            <span className="font-mono text-[11px] font-semibold text-slate-500">
              &lt;app-user-card [name] [topic] (selectUser) /&gt;
            </span>
            <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h4 className="text-base font-bold text-slate-900">
                {studentName || "(empty name)"}
              </h4>
              <p className="text-sm text-slate-600 mt-1">
                Track: <span className="font-medium">{courseTopic || "Angular"}</span>
              </p>
              <button
                type="button"
                onClick={() =>
                  setLastEmitted(`handleUserSelect("${studentName || "Guest"}") fired!`)
                }
                className="mt-3 rounded-md bg-red-700 px-3 py-1.5 text-xs font-semibold text-white hover:bg-red-800 cursor-pointer"
              >
                Emit (selectUser) to Parent
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Side-by-Side Parent & Child Code */}
      <div className="grid gap-4 lg:grid-cols-2">
        <CodeBlock filename="user-card.component.ts (Child)" language="ts" code={childCode} />
        <CodeBlock filename="dashboard.component.ts (Parent)" language="ts" code={parentCode} />
      </div>
    </div>
  );
};

export default ComponentWiringLab;
