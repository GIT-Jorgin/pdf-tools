import { DndContext, closestCenter, TouchSensor, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, rectSortingStrategy } from '@dnd-kit/sortable';
import PropTypes from 'prop-types';


export default function DroppableArea({ items, sortItems, children }) {

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        }),
        useSensor(TouchSensor, {
            // Press delay of 250ms, with tolerance of 5px of movement
            activationConstraint: {
                delay: 250,
                tolerance: 2,
            },
        })
    );

    return (
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext strategy={rectSortingStrategy} items={items}>
                {children}
            </SortableContext>
        </DndContext>
    )

    function handleDragEnd(event) {
        const { active, over } = event;

        if (active.id !== over.id) {
            sortItems((items) => {
                const oldIndex = items.findIndex(x => x.id === active.id);
                const newIndex = items.findIndex(x => x.id === over.id);
                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }
}

DroppableArea.defaultProps = {
    
}

DroppableArea.propTypes = {
    items: PropTypes.array,
    sortItems: PropTypes.func,
    children: PropTypes.element
}