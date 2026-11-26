import AngularDocsProvider from "./context/AngularDocsProvider";
import SidebarNav from "./components/SidebarNav";
import AngularDocsContent from "./components/AngularDocsContent";

const App = () => {
  return (
    <AngularDocsProvider>
      <div className="min-h-screen bg-slate-50 text-slate-900 lg:flex">
        <SidebarNav />
        <main className="flex-1 min-w-0">
          <AngularDocsContent />
        </main>
      </div>
    </AngularDocsProvider>
  );
};

export default App;
