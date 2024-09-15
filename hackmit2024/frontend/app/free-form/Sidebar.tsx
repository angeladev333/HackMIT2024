import React from 'react'
import { useDnD } from './DnDContext'

type NodeType = 'input' | 'default' | 'output'

interface DraggableNodeProps {
  type: NodeType
  label: string
  className?: string
}

const DraggableNode: React.FC<DraggableNodeProps> = ({ type, label, className = '' }) => {
  const [, setType] = useDnD()

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    setType(type)
    event.dataTransfer.effectAllowed = 'move'
  }

  return (
    <div
      className={`dndnode ${className}`}
      onDragStart={onDragStart}
      draggable
    >
      {label}
    </div>
  )
}

const Sidebar: React.FC = () => {
  return (
    <aside>
      <div className="description">You can drag these nodes to the pane on the right.</div>
      <DraggableNode type="input" label="Input Node" className="input" />
      <DraggableNode type="default" label="Default Node" />
      <DraggableNode type="output" label="Output Node" className="output" />
    </aside>
  )
}

export default Sidebar