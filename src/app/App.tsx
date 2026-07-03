import { RouterProvider, useRouter } from "./components/Router";
import { UIProvider, useUI } from "./components/UIContext";
import { Navbar } from "./components/Navbar";
import { TasacionModal } from "./components/TasacionModal";
import { HomeView } from "./components/views/HomeView";
import { PropiedadesView } from "./components/views/PropiedadesView";
import { PropiedadDetalleView } from "./components/views/PropiedadDetalleView";
import { NosotrosView } from "./components/views/NosotrosView";
import { ContactoView } from "./components/views/ContactoView";

function AppInner() {
  const { path } = useRouter();
  const { tasacionOpen } = useUI();

  return (
    <div className="h-screen overflow-hidden bg-[#0e0e0c]">
      <Navbar />

      {path === "/" && <HomeView />}
      {path === "/propiedades" && <PropiedadesView />}
      {path === "/propiedad" && <PropiedadDetalleView />}
      {path === "/nosotros" && <NosotrosView />}
      {path === "/contacto" && <ContactoView />}

      {tasacionOpen && <TasacionModal />}
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <UIProvider>
        <AppInner />
      </UIProvider>
    </RouterProvider>
  );
}
