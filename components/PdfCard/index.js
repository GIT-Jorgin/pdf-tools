import { useRef, useState } from "react";
import { Badge, Container, Overlay } from "./styles";
import {useSortable} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { IoIosDocument } from 'react-icons/io';

export default function PdfCard({ children, id, index, numPages }){

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
        <Container ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <Overlay>
              <Badge>
                <IoIosDocument style={{color: 'white'}}/>
                <p style={{color: 'white'}}>{numPages || 0}</p>
              </Badge>
            </Overlay>
            { children }
        </Container>
    )
}