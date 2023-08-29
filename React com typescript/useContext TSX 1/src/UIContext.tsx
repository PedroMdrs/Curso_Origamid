import React from "react";

type IUiContext = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};
export const UIContext = React.createContext<IUiContext | null>(null);
export const useUi = () => {
  const context = React.useContext(UIContext);
  if (context === null)
    throw new Error("useContext deve estar dentro do Provider");
  return context;
};
export const UIContextProvider = ({ children }: React.PropsWithChildren) => {
  const [dark, setDark] = React.useState(false);

  return (
    <UIContext.Provider value={{ dark, setDark }}>
      {children}
    </UIContext.Provider>
  );
};
