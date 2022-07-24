import { Badge, Container, Delete, DraggableArea, Overlay } from "./styles";
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { IoIosDocument } from 'react-icons/io';
import { FaTrash } from 'react-icons/fa';
import PropTypes from 'prop-types'

//A4 paper
export function PaperCard({ children, numPages }) {
  return (
    <Container style={{ cursor: 'default' }}>
      <Overlay>
        {numPages > 0 && <Badge>
          <IoIosDocument color="white" />
          <p>{numPages || 0}</p>
        </Badge>}
      </Overlay>
      {children}
    </Container>
  )
}

PaperCard.defaultProps = {
  numPages: 0
}

PaperCard.propTypes = {
  numPages: PropTypes.number
}

//A4 paper draggable
export function PaperCardDraggable({ children, id, numPages, onRemove, disabled, deletable }) {

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: id, disabled: disabled });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Container disabled={!!disabled} ref={setNodeRef} style={style}>
      <Overlay>
        {deletable && <Delete disabled={disabled} onClick={() => onRemove(id)}><FaTrash fontSize={14} color="#EC233B" /></Delete>}
        {numPages > 0 && <Badge>
          <IoIosDocument color="white" />
          <p>{numPages || 0}</p>
        </Badge>}
        <DraggableArea {...attributes} {...listeners} />
      </Overlay>
      {children}
    </Container>
  )
};

PaperCardDraggable.defaultProps = {
  id: null,
  numPages: 0,
  disabled: false,
  deletable: false
}

PaperCardDraggable.propTypes = {
  children: PropTypes.element,
  id: PropTypes.string,
  numPages: PropTypes.number,
  onRemove: PropTypes.func,
  disabled: PropTypes.bool,
  deletable: PropTypes.bool
}