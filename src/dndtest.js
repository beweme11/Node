import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const DraggableItem = ({ id, text, children }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { id, type: 'draggableItem' }, // Ensure 'type' property is defined
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {text}
      {children}
    </div>
  );
};

const DroppableContainer = ({ id, children }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'draggableItem',
    drop: () => ({ id }),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} style={{ background: isOver ? 'lightblue' : 'transparent' }}>
      {children}
    </div>
  );
};

const NestedDragAndDropExample = () => {
  return (
    <DroppableContainer id="container1">
      <DraggableItem id="item1" text="Draggable Item 1">
        <DroppableContainer id="container2">
          <DraggableItem id="item2" text="Draggable Item 2" />
          <DraggableItem id="item3" text="Draggable Item 3" />
        </DroppableContainer>
        <DroppableContainer id="container3">
          <DraggableItem id="item4" text="Draggable Item 4" />
          <DraggableItem id="item5" text="Draggable Item 5" />
        </DroppableContainer>
      </DraggableItem>
      <DraggableItem id="item6" text="Draggable Item 6">
        <DroppableContainer id="container4">
          <DraggableItem id="item7" text="Draggable Item 7" />
          <DraggableItem id="item8" text="Draggable Item 8" />
        </DroppableContainer>
        <DroppableContainer id="container5">
          <DraggableItem id="item9" text="Draggable Item 9" />
          <DraggableItem id="item10" text="Draggable Item 10" />
        </DroppableContainer>
      </DraggableItem>
    </DroppableContainer>
  );
};

export default NestedDragAndDropExample;
