export const DOC_SECTIONS = [
  {
    id: "architecture",
    number: "01",
    title: "Angular Architecture & Boot Flow",
    level: "Foundation",
    summary:
      "Understand how Angular starts in the browser: from index.html to main.ts, app.config.ts, and your root AppComponent.",
  },
  {
    id: "cli-commands",
    number: "02",
    title: "Angular CLI & ng Commands",
    level: "Essential",
    summary:
      "Master every essential npm and ng command to install Angular, create projects, run the dev server, generate files, and build for production.",
  },
  {
    id: "folder-structure",
    number: "03",
    title: "Folder Structure & First File to Open",
    level: "Workflow",
    summary:
      "Learn exactly which folders to maintain as your app grows and which files to open and edit first to display UI on screen.",
  },
  {
    id: "standalone",
    number: "04",
    title: "Standalone Components vs NgModules",
    level: "Core Concept",
    summary:
      "Why modern Angular defaults to standalone components, how component-level imports work, and when legacy NgModules appear.",
  },
  {
    id: "component-composition",
    number: "05",
    title: "Creating & Loading Components Together",
    level: "Intermediate",
    summary:
      "Create a new component with ng g c, import it into another component, render its selector, and pass data via input() and output().",
  },
  {
    id: "bindings-control-flow",
    number: "06",
    title: "Data Binding & Modern Control Flow",
    level: "Intermediate",
    summary:
      "Connect TypeScript class state to HTML templates using interpolation, property/event binding, two-way ngModel, @if, and @for.",
  },
  {
    id: "services-di",
    number: "07",
    title: "Services, Dependency Injection & HTTP",
    level: "Intermediate",
    summary:
      "Share business logic and API calls cleanly using @Injectable({ providedIn: 'root' }), inject(), and HttpClient.",
  },
  {
    id: "routing-signals",
    number: "08",
    title: "Routing, Lifecycle & Signals",
    level: "Intermediate",
    summary:
      "Configure multi-view navigation with app.routes.ts, hook into component lifecycle (ngOnInit), and manage reactive state with Signals.",
  },
];

export const CLI_COMMANDS_REFERENCE = [
  {
    cmd: "npm install -g @angular/cli",
    alias: "One-time global setup",
    purpose: "Installs the `ng` command globally on your computer.",
    output: [
      "added 198 packages in 6s",
      "Angular CLI installed globally. Run `ng version` to verify.",
    ],
  },
  {
    cmd: "ng new my-angular-app",
    alias: "Create workspace",
    purpose: "Generates a new standalone Angular project with routing and CSS/SCSS options.",
    output: [
      "CREATE my-angular-app/angular.json",
      "CREATE my-angular-app/package.json",
      "CREATE my-angular-app/src/index.html",
      "CREATE my-angular-app/src/main.ts",
      "CREATE my-angular-app/src/app/app.component.ts",
      "CREATE my-angular-app/src/app/app.component.html",
      "✔ Packages installed successfully.",
    ],
  },
  {
    cmd: "ng serve -o",
    alias: "ng s -o",
    purpose: "Compiles TypeScript + templates in memory, starts http://localhost:4200, and watches for file changes.",
    output: [
      "Initial chunk files   | Names         | Raw size",
      "main.js               | main          | 42.10 kB",
      "styles.css            | styles        |  2.40 kB",
      "Application bundle generation complete. [0.412 seconds]",
      "Watch mode enabled. Watching for file changes...",
      "➜ Local: http://localhost:4200/",
    ],
  },
  {
    cmd: "ng generate component components/navbar",
    alias: "ng g c components/navbar",
    purpose: "Creates 4 files (.ts, .html, .css, .spec.ts) inside src/app/components/navbar/.",
    output: [
      "CREATE src/app/components/navbar/navbar.component.html (21 bytes)",
      "CREATE src/app/components/navbar/navbar.component.spec.ts (598 bytes)",
      "CREATE src/app/components/navbar/navbar.component.ts (245 bytes)",
      "CREATE src/app/components/navbar/navbar.component.css (0 bytes)",
    ],
  },
  {
    cmd: "ng generate service core/services/auth",
    alias: "ng g s core/services/auth",
    purpose: "Creates a singleton injectable service in src/app/core/services/ for API or auth logic.",
    output: [
      "CREATE src/app/core/services/auth.service.spec.ts (347 bytes)",
      "CREATE src/app/core/services/auth.service.ts (135 bytes)",
    ],
  },
  {
    cmd: "ng build",
    alias: "Production bundle",
    purpose: "Compiles, tree-shakes, and minifies your app into dist/ for deployment.",
    output: [
      "Building in production mode...",
      "chunk-ABCD1234.js | main   | 118.4 kB",
      "styles-EFGH5678.css | styles | 4.8 kB",
      "Output location: dist/my-angular-app/browser",
    ],
  },
];

export const PROJECT_FILES = [
  {
    id: "app-component-ts",
    path: "src/app/app.component.ts",
    folder: "src/app/",
    badge: "OPEN FIRST (Logic)",
    role: "Root Component Controller",
    whyOpen:
      "Open this file first alongside app.component.html. Define properties, signals, and import child components in the `imports: []` array.",
    code: `import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  selector: 'app-root',       // Matches <app-root></app-root> in index.html
  standalone: true,           // No NgModule required
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Student Portal';
}`,
  },
  {
    id: "app-component-html",
    path: "src/app/app.component.html",
    folder: "src/app/",
    badge: "OPEN FIRST (Screen UI)",
    role: "Root Screen Template",
    whyOpen:
      "Anything you write here immediately appears on the browser screen inside <app-root>. Place child component tags and <router-outlet /> here.",
    code: `<!-- Loaded child component from AppComponent.imports -->
<app-navbar />

<main class="container">
  <h1>Welcome to {{ title }}</h1>
  <p>Edit src/app/app.component.html and save to update screen live.</p>

  <!-- Active route component renders right here -->
  <router-outlet />
</main>`,
  },
  {
    id: "main-ts",
    path: "src/main.ts",
    folder: "src/",
    badge: "Entry Point",
    role: "Application Bootstrapper",
    whyOpen:
      "Runs first when JavaScript loads. It mounts AppComponent onto the DOM and attaches global providers from app.config.ts.",
    code: `import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));`,
  },
  {
    id: "index-html",
    path: "src/index.html",
    folder: "src/",
    badge: "Browser Shell",
    role: "Single HTML Host Page",
    whyOpen:
      "Angular is a Single Page Application (SPA). You rarely edit this file except for page <title>, fonts, or favicon—<app-root> is where Angular mounts.",
    code: `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>My Angular App</title>
  <base href="/">
</head>
<body>
  <!-- AppComponent replaces / renders inside this tag -->
  <app-root></app-root>
</body>
</html>`,
  },
  {
    id: "app-config-ts",
    path: "src/app/app.config.ts",
    folder: "src/app/",
    badge: "Global Providers",
    role: "App-Wide Services Setup",
    whyOpen:
      "Register global capabilities once here—like provideRouter(routes) and provideHttpClient()—instead of an old AppModule.",
    code: `import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
  ],
};`,
  },
  {
    id: "app-routes-ts",
    path: "src/app/app.routes.ts",
    folder: "src/app/",
    badge: "Navigation",
    role: "URL-to-Component Map",
    whyOpen:
      "Maps browser URLs like /dashboard or /login to standalone components (supports lazy loading with loadComponent).",
    code: `import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'profile',
    loadComponent: () =>
      import('./features/profile/profile.component').then(
        (m) => m.ProfileComponent
      ),
  },
];`,
  },
];

export const FOLDER_CONVENTIONS = [
  {
    folder: "src/app/core/",
    maintain: "Singleton services, auth guards, HTTP interceptors",
    example: "auth.service.ts, auth.guard.ts",
  },
  {
    folder: "src/app/shared/",
    maintain: "Reusable UI components, pipes, and directives used across pages",
    example: "navbar/, button/, badge.pipe.ts",
  },
  {
    folder: "src/app/features/",
    maintain: "Page-level domain modules/views (each feature folder owns its UI + subcomponents)",
    example: "dashboard/, login/, courses/",
  },
  {
    folder: "src/app/models/",
    maintain: "TypeScript interfaces and data contracts",
    example: "user.model.ts, course.model.ts",
  },
];

export const ARCHITECTURE_3D_LAYERS = [
  {
    id: "dom",
    layer: "Layer 5 — Browser DOM",
    file: "src/index.html",
    summary: "Hosts the single <app-root></app-root> anchor element in the browser.",
    detail:
      "When the user opens localhost:4200, the browser parses index.html first and loads the compiled main.js bundle.",
    colorClass: "bg-slate-900 text-white border-slate-700",
  },
  {
    id: "bootstrap",
    layer: "Layer 4 — Bootstrap & Config",
    file: "src/main.ts + app.config.ts",
    summary: "Calls bootstrapApplication(AppComponent, appConfig) to wire Router and HttpClient.",
    detail:
      "main.ts starts the Angular runtime, registers global Dependency Injection providers, and attaches AppComponent to <app-root>.",
    colorClass: "bg-red-700 text-white border-red-800",
  },
  {
    id: "root",
    layer: "Layer 3 — Root Component",
    file: "src/app/app.component.ts + .html",
    summary: "Renders the global shell (Navbar + <router-outlet />) and controls top-level layout.",
    detail:
      "This is the first component file you edit to change what displays on screen immediately.",
    colorClass: "bg-white text-slate-900 border-slate-300",
  },
  {
    id: "children",
    layer: "Layer 2 — Feature & Child Components",
    file: "src/app/features/** + shared/**",
    summary: "Standalone UI blocks loaded via parent `imports: [...]` or `<router-outlet />`.",
    detail:
      "Parent components pass data down via input() / [prop] and receive events back via output() / (event).",
    colorClass: "bg-slate-100 text-slate-900 border-slate-300",
  },
  {
    id: "services",
    layer: "Layer 1 — Core Services & DI",
    file: "src/app/core/services/*.service.ts",
    summary: "Shared state, authentication, localStorage, and HttpClient API logic injected via inject().",
    detail:
      "Provided in 'root' so every component reads the same single instance without prop drilling.",
    colorClass: "bg-amber-50 text-slate-900 border-amber-300",
  },
];
