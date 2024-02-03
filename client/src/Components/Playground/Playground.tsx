import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop, DragSourceMonitor, XYCoord } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './Playground.css'
// Define item types for drag and drop
const ItemTypes = {
    BOX: 'box',
};

// Define TypeScript interfaces for props and items
interface Box {
    left: number;
    top: number;
}

interface BoxProps {
    id: string;
    left: number;
    top: number;
}


interface BoxMap {
    [key: string]: Box;
}

interface DraggableItemProps {
    id: string;
    left: number;
    top: number;
    children: React.ReactNode;
}

// Draggable item component
const DraggableItem: React.FC<DraggableItemProps> = ({ id, left, top, children }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.BOX,
        item: { id, left, top },
        collect: (monitor: DragSourceMonitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }), [id, left, top]);

    return (
        <div
            ref={drag}
            style={{
                left,
                top,
                position: 'absolute',
                opacity: isDragging ? 0.5 : 1,
            }}
        >
            {children}
        </div>
    );
};

const Box: React.FC<BoxProps> = ({ id, left, top }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.BOX,
        item: { id, left, top },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }), [id, left, top]);

    return (
        <div
            ref={drag}
            style={{
                position: 'absolute',
                border: '1px dashed gray',
                backgroundColor: 'white',
                padding: '0.5rem 1rem',
                cursor: 'move',
                left,
                top,
                opacity: isDragging ? 0.5 : 1,
            }}
        >
            Drag me!
        </div>
    );
};

// Main playground component
const Playground: React.FC = () => {
    const [boxes, setBoxes] = useState<Record<string, { top: number; left: number }>>({
        box1: { top: 20, left: 80 },
        box2: { top: 180, left: 20 },
    });

    const moveBox = (id: string, left: number, top: number) => {
        setBoxes((prevBoxes) => ({
            ...prevBoxes,
            [id]: { left, top },
        }));
    };

    const [, drop] = useDrop(() => ({
        accept: ItemTypes.BOX,
        drop: (item: BoxProps, monitor) => {
            const delta = monitor.getDifferenceFromInitialOffset();
            if (delta) {
                const left = Math.round(item.left + delta.x);
                const top = Math.round(item.top + delta.y);
                moveBox(item.id, left, top);
            }
        },
    }));

    return (
        <div ref={drop} style={{ width: '100%', height: '500px', position: 'relative', border: '1px solid black' }}>
            {Object.entries(boxes).map(([id, { left, top }]) => (
                <Box key={id} id={id} left={left} top={top} />
            ))}
        </div>
    );
};


export default Playground;