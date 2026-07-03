import { createContext, useContext, useState, ReactNode } from "react";

interface UIContextValue {
  tasacionOpen: boolean;
  openTasacion: () => void;
  closeTasacion: () => void;
}

export const UIContext = createContext<UIContextValue>({
  tasacionOpen: false,
  openTasacion: () => {},
  closeTasacion: () => {},
});

export function UIProvider({ children }: { children: ReactNode }) {
  const [tasacionOpen, setTasacionOpen] = useState(false);
  return (
    <UIContext.Provider
      value={{
        tasacionOpen,
        openTasacion: () => setTasacionOpen(true),
        closeTasacion: () => setTasacionOpen(false),
      }}
    >
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  return useContext(UIContext);
}
