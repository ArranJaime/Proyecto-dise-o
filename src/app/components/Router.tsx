import { createContext, useContext, useState, ReactNode } from "react";

export type RoutePath = "/" | "/propiedades" | "/propiedad" | "/nosotros" | "/contacto";

interface RouterContextType {
  path: string;
  setPath: (path: string) => void;
  navigate: (path: string, params?: any) => void;
  params: any;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState("/");
  const [params, setParams] = useState<any>({});

  const navigate = (newPath: string, newParams?: any) => {
    setPath(newPath);
    if (newParams) {
      setParams(newParams);
    } else {
      setParams({});
    }
  };

  return (
    <RouterContext.Provider value={{ path, setPath, navigate, params }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (context === undefined) {
    throw new Error("useRouter must be used within a RouterProvider");
  }
  return context;
}
