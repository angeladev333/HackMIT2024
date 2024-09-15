import React, { createContext, useContext, useState, ReactNode } from "react";

type NodeType = string | null;

type DnDContextType = readonly [
  NodeType,
  React.Dispatch<React.SetStateAction<NodeType>>
];

const DnDContext = createContext<DnDContextType>([null, () => {}]);

interface DnDProviderProps {
  children: ReactNode;
}

export const DnDProvider: React.FC<DnDProviderProps> = ({ children }) => {
  const typeState = useState<NodeType>(null);

  return (
    <DnDContext.Provider value={typeState as DnDContextType}>
      {children}
    </DnDContext.Provider>
  );
};

export const useDnD = (): DnDContextType => useContext(DnDContext);

export default DnDContext;
