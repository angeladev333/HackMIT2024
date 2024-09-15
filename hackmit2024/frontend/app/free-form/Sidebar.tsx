import React from "react";
import { useDnD } from "./DnDContext";

type NodeType = "primary" | "secondary" | "tertiary";

interface DraggableNodeProps {
  type: NodeType;
  label: string;
  className?: string;
}

const DraggableNode: React.FC<DraggableNodeProps> = ({
  type,
  label,
  className = "",
}) => {
  const [, setType] = useDnD();

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    setType(type);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className={`dndnode ${className}`} onDragStart={onDragStart} draggable>
      {label}
    </div>
  );
};

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-slate-100 w-48 p-4">
      <h2 className="text-lg font-semibold p-6 bg-white text-black mb-4">
        Drag and drop nodes
      </h2>
      <div className="p-2 font-normal">
        <DraggableNode
          type="primary"
          label="Primary Search"
          className="input"
        />
        <DraggableNode type="secondary" label="Secondary Search" />
        <DraggableNode
          type="tertiary"
          label="Tertiary Search"
          className="output"
        />
      </div>
    </aside>
  );
};

export default Sidebar;
