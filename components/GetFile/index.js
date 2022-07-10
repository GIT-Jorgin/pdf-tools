import { useContext } from 'react';
import { Container, Input, Label } from "./style";
import PdfContext from '../../contexts/PdfContext';

export default function GetFile(){
    const { GetFileInfo } = useContext(PdfContext);

    return (
        <Container>
            <Label htmlFor="file">Selecionar arquivos</Label>
            <Input onChange={(data) => GetFileInfo(data)} type="file" id="file" name="file" accept={"application/pdf"} multiple />
        </Container>
    )
}