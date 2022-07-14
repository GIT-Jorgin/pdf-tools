import { Badge, Container, Delete, DraggableArea, Overlay } from "./styles";
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { IoIosDocument } from 'react-icons/io';
import { FaTrash } from 'react-icons/fa';


//A4 paper
export function PaperCard({ children, numPages }) {
  return (
    <Container style={{cursor: 'default'}}>
      <Overlay>
        <Badge>
          <IoIosDocument color="white" />
          <p>{numPages || 0}</p>
        </Badge>
      </Overlay>
      {children}
    </Container>
  )
}

//A4 paper draggable
export function PaperCardDraggable({ children, id, numPages, onRemove, disabled, deletable }) {

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: id, disabled: disabled });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Container ref={setNodeRef} style={style}>
      <Overlay>
        {deletable && <Delete disabled={disabled} onClick={() => onRemove(id)}><FaTrash fontSize={14} color="#EC233B" /></Delete>}
        <Badge>
          <IoIosDocument color="white" />
          <p>{numPages || 0}</p>
        </Badge>
        <DraggableArea {...attributes} {...listeners} />
      </Overlay>
      {children}
    </Container>
  )
};