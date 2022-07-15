import { Container, Input, Label } from "./style";
import PropTypes from 'prop-types'

export default function GetFile({ files }) {

    return (
        <Container>
            <Label htmlFor="file">Selecionar arquivos</Label>
            <Input
                onChange={(data) => files(data)}
                type="file"
                id="file"
                name="file"
                accept={"application/pdf"}
                multiple />
        </Container>
    )
}

GetFile.defaultProps = {
    
}

GetFile.propTypes = {
    files: PropTypes.func
}