import { memo } from "react";
import { Badge, Container, Delete, DraggableArea, Overlay } from "./styles";
import {useSortable} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { IoIosDocument } from 'react-icons/io';
import { FaTrash } from 'react-icons/fa';

const PdfCard = memo(({ children, id, index, numPages, onRemove }) => {

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
      } = useSortable({id: id});

      const style = {
        transform: CSS.Transform.toString(transform),
        transition,
      };

    return(
        <Container ref={setNodeRef} style={style}>
            <Overlay>
              <Delete onClick={() => onRemove(id)}><FaTrash fontSize={14} color="#EC233B" /></Delete>
              <Badge>
                <IoIosDocument style={{color: 'white'}}/>
                <p style={{color: 'white'}}>{numPages || 0}</p>
              </Badge>
              <DraggableArea {...attributes} {...listeners} />
            </Overlay>
            { children }
        </Container>
    )
})

export default PdfCard