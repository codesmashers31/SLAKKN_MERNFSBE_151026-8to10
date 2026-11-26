import { CLI_COMMANDS_REFERENCE, DOC_SECTIONS } from "../data/angularDocsData";
import Architecture3DStack from "./Architecture3DStack";
import ByteFlowPipeline from "./ByteFlowPipeline";
import CliSimulator from "./CliSimulator";
import CodeBlock from "./CodeBlock";
import ComponentWiringLab from "./ComponentWiringLab";
import DocSection from "./DocSection";
import ProjectStructureExplorer from "./ProjectStructureExplorer";

const AngularDocsContent = () => {
  const sectionMap = Object.fromEntries(DOC_SECTIONS.map((s) => [s.id, s]));

  return (
    <div className="mx-auto max-w-5xl px-5 sm:px-8 py-8 space-y-12">
      {/* Top Documentation Header */}
      <header className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded bg-red-700 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-white">
            Angular v17–v19 Standalone Standard
          </span>
          <span className="rounded border border-slate-300 bg-slate-50 px-2.5 py-0.5 text-xs font-semibold text-slate-700">
            Single-Page Reference &amp; Interactive Labs
          </span>
        </div>
        <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Complete Angular Developer Process Guide
        </h1>
        <p className="mt-3 max-w-3xl text-sm sm:text-base text-slate-600 leading-relaxed">
          From installing the Angular CLI and finding the very first file to edit,
          all the way to standalone components, component-to-component wiring,
          dependency injection, routing, and Signals. Your progress, CLI runs, and
          personal study notes are persisted automatically in{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-xs text-slate-900">
            localStorage
          </code>
          .
        </p>

        {/* Quick Mental Model Table: React vs Angular */}
        <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase text-slate-500">
              <tr>
                <th className="px-4 py-2.5">Concept</th>
                <th className="px-4 py-2.5">React Equivalent</th>
                <th className="px-4 py-2.5">Angular Way</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              <tr>
                <td className="px-4 py-2.5 font-semibold text-slate-900">UI Building Block</td>
                <td className="px-4 py-2.5 text-slate-700">Function returning JSX</td>
                <td className="px-4 py-2.5 font-mono text-xs text-red-700">
                  @Component() class + .html + .css
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-semibold text-slate-900">Passing Data Down</td>
                <td className="px-4 py-2.5 text-slate-700">props</td>
                <td className="px-4 py-2.5 font-mono text-xs text-red-700">
                  input() / @Input() + [prop]="val"
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-semibold text-slate-900">Events Up</td>
                <td className="px-4 py-2.5 text-slate-700">Callback prop (onSelect)</td>
                <td className="px-4 py-2.5 font-mono text-xs text-red-700">
                  output() / @Output() + (event)="fn($event)"
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-semibold text-slate-900">Shared Global Logic</td>
                <td className="px-4 py-2.5 text-slate-700">useContext / Custom Hook</td>
                <td className="px-4 py-2.5 font-mono text-xs text-red-700">
                  @Injectable() Service + inject()
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </header>

      {/* 01: Architecture & Boot Flow */}
      <DocSection {...sectionMap["architecture"]}>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-bold text-slate-900">1. TypeScript First</h3>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every Angular component and service is a strongly typed TypeScript
              class decorated with metadata such as{" "}
              <code className="font-mono text-xs">@Component</code> or{" "}
              <code className="font-mono text-xs">@Injectable</code>.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-bold text-slate-900">2. Opinionated Framework</h3>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Unlike React (UI library only), Angular includes routing, HTTP client,
              forms validation, testing, and CLI scaffolding out of the box.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-bold text-slate-900">3. Single Page Mount</h3>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
              The browser loads <code className="font-mono text-xs">index.html</code>{" "}
              once. <code className="font-mono text-xs">main.ts</code> mounts{" "}
              <code className="font-mono text-xs">AppComponent</code> into{" "}
              <code className="font-mono text-xs">&lt;app-root&gt;</code>.
            </p>
          </div>
        </div>

        <ByteFlowPipeline />
        <Architecture3DStack />
      </DocSection>

      {/* 02: CLI & ng Commands */}
      <DocSection {...sectionMap["cli-commands"]}>
        <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase text-slate-500">
              <tr>
                <th className="px-4 py-3">Command</th>
                <th className="px-4 py-3">Shortcut</th>
                <th className="px-4 py-3">What It Does</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {CLI_COMMANDS_REFERENCE.map((item) => (
                <tr key={item.cmd}>
                  <td className="px-4 py-3 font-mono text-xs font-semibold text-red-700">
                    {item.cmd}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-slate-600">
                    {item.alias}
                  </td>
                  <td className="px-4 py-3 text-slate-700">{item.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <CliSimulator />
      </DocSection>

      {/* 03: Folder Structure & First File to Open */}
      <DocSection {...sectionMap["folder-structure"]}>
        <div className="rounded-lg border-l-4 border-red-700 bg-white p-4 border border-slate-200">
          <h3 className="text-sm font-bold text-slate-900">
            Quick Answer: Which File Do I Open First to Change Screen Output?
          </h3>
          <ol className="mt-2 list-decimal pl-5 space-y-1 text-sm text-slate-700">
            <li>
              Run <code className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded">ng serve -o</code> in your project root.
            </li>
            <li>
              Open{" "}
              <code className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded">
                src/app/app.component.html
              </code>{" "}
              (UI template) and{" "}
              <code className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded">
                src/app/app.component.ts
              </code>{" "}
              (class data &amp; imports).
            </li>
            <li>
              Save either file — Angular live-reloads <code className="font-mono text-xs">http://localhost:4200</code> automatically.
            </li>
          </ol>
        </div>

        <ProjectStructureExplorer />
      </DocSection>

      {/* 04: Standalone Components vs NgModules */}
      <DocSection {...sectionMap["standalone"]}>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-3">
            <span className="rounded bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-800">
              MODERN DEFAULT (Recommended)
            </span>
            <h3 className="text-base font-bold text-slate-900">
              Standalone Components
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              A standalone component manages its own dependencies directly inside
              its <code className="font-mono text-xs">@Component(&#123; imports: [...] &#125;)</code>{" "}
              metadata. No <code className="font-mono text-xs">app.module.ts</code>{" "}
              is needed, tree-shaking is cleaner, and lazy loading is one line.
            </p>
            <CodeBlock
              filename="navbar.component.ts (Standalone)"
              language="ts"
              code={`@Component({
  selector: 'app-navbar',
  standalone: true, // Default in Angular 19+
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {}`}
            />
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-3">
            <span className="rounded bg-slate-200 px-2 py-0.5 text-xs font-bold text-slate-700">
              LEGACY PATTERN (Older Projects)
            </span>
            <h3 className="text-base font-bold text-slate-900">
              NgModule Architecture
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Before Angular 14/17, every component had to be listed inside an{" "}
              <code className="font-mono text-xs">@NgModule</code>{" "}
              <code className="font-mono text-xs">declarations</code> array before
              another component could use it. You still see this in legacy codebases.
            </p>
            <CodeBlock
              filename="app.module.ts (Legacy NgModule)"
              language="ts"
              code={`@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}`}
            />
          </div>
        </div>
      </DocSection>

      {/* 05: Creating & Loading Components Together */}
      <DocSection {...sectionMap["component-composition"]}>
        <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-3">
          <h3 className="text-base font-bold text-slate-900">
            3-Step Process to Load One Component Into Another
          </h3>
          <ol className="list-decimal pl-5 space-y-1.5 text-sm text-slate-700">
            <li>
              <strong>Generate the child component:</strong> Run{" "}
              <code className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded">
                ng g c shared/user-card
              </code>
              .
            </li>
            <li>
              <strong>Import it into the parent TypeScript file:</strong> Add{" "}
              <code className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded">
                UserCardComponent
              </code>{" "}
              to both the <code className="font-mono text-xs">import</code> statement and
              the parent <code className="font-mono text-xs">@Component(&#123; imports: [UserCardComponent] &#125;)</code>{" "}
              array.
            </li>
            <li>
              <strong>Place its HTML selector tag:</strong> Write{" "}
              <code className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded">
                &lt;app-user-card /&gt;
              </code>{" "}
              inside the parent component&apos;s HTML template.
            </li>
          </ol>
        </div>

        <ComponentWiringLab />
      </DocSection>

      {/* 06: Data Binding & Control Flow */}
      <DocSection {...sectionMap["bindings-control-flow"]}>
        <div className="grid gap-4 lg:grid-cols-2">
          <CodeBlock
            filename="bindings.component.html"
            language="html"
            code={`<!-- 1. Interpolation (TS -> HTML text) -->
<h2>Hello, {{ userName }}</h2>

<!-- 2. Property Binding (TS -> HTML attribute) -->
<button [disabled]="isSaving">Save Profile</button>

<!-- 3. Event Binding (HTML event -> TS method) -->
<button (click)="incrementCount()">Count: {{ count }}</button>

<!-- 4. Two-Way Binding (requires FormsModule in imports[]) -->
<input [(ngModel)]="searchText" placeholder="Live filter..." />`}
          />

          <CodeBlock
            filename="control-flow.component.html"
            language="html"
            code={`<!-- Modern Built-in Control Flow (Angular 17+) -->
@if (isLoggedIn) {
  <p>Welcome back, {{ userName }}!</p>
} @else {
  <p>Please sign in to continue.</p>
}

<ul>
  @for (course of courses; track course.id) {
    <li>{{ course.title }} — {{ course.duration }}</li>
  } @empty {
    <li>No courses enrolled yet.</li>
  }
</ul>`}
          />
        </div>
      </DocSection>

      {/* 07: Services, Dependency Injection & HTTP */}
      <DocSection {...sectionMap["services-di"]}>
        <p className="text-sm text-slate-700 leading-relaxed">
          Keep components focused on UI. Put API calls, authentication state, and{" "}
          <code className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded">
            localStorage
          </code>{" "}
          logic inside an{" "}
          <code className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded">
            @Injectable(&#123; providedIn: &apos;root&apos; &#125;)
          </code>{" "}
          service, then inject it into any component using{" "}
          <code className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded">
            inject()
          </code>
          .
        </p>

        <div className="grid gap-4 lg:grid-cols-2">
          <CodeBlock
            filename="src/app/core/services/course.service.ts"
            language="ts"
            code={`import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root', // Single shared instance across the whole app
})
export class CourseService {
  private http = inject(HttpClient);

  getCourses() {
    return this.http.get<Course[]>('/api/courses');
  }
}`}
          />
          <CodeBlock
            filename="src/app/features/courses/courses.component.ts"
            language="ts"
            code={`import { Component, OnInit, inject } from '@angular/core';
import { CourseService } from '../../core/services/course.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  template: \`<p>Loaded {{ courses.length }} courses</p>\`,
})
export class CoursesComponent implements OnInit {
  private courseService = inject(CourseService);
  courses: Course[] = [];

  ngOnInit() {
    this.courseService.getCourses().subscribe((data) => {
      this.courses = data;
    });
  }
}`}
          />
        </div>
      </DocSection>

      {/* 08: Routing, Lifecycle & Signals */}
      <DocSection {...sectionMap["routing-signals"]}>
        <div className="grid gap-4 lg:grid-cols-2">
          <CodeBlock
            filename="src/app/shared/navbar/navbar.component.html"
            language="html"
            code={`<!-- Use routerLink instead of href to avoid full page reloads -->
<nav>
  <a routerLink="/" routerLinkActive="active">Dashboard</a>
  <a routerLink="/courses" routerLinkActive="active">Courses</a>
  <a routerLink="/profile" routerLinkActive="active">Profile</a>
</nav>

<!-- Routed page component renders below -->
<router-outlet />`}
          />

          <CodeBlock
            filename="src/app/features/counter/counter.component.ts (Signals)"
            language="ts"
            code={`import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal-counter',
  standalone: true,
  template: \`
    <p>Count: {{ count() }} | Doubled: {{ doubled() }}</p>
    <button (click)="increment()">+1</button>
  \`,
})
export class SignalCounterComponent {
  count = signal(0);
  doubled = computed(() => this.count() * 2);

  constructor() {
    effect(() => {
      localStorage.setItem('ng_count', String(this.count()));
    });
  }

  increment() {
    this.count.update((n) => n + 1);
  }
}`}
          />
        </div>
      </DocSection>
    </div>
  );
};

export default AngularDocsContent;
