import { Container, Input, Label } from "./styles";
import PropTypes from 'prop-types'

export default function GetFile({ files, accept, style }) {

    return (
        <Container>
            <Label style={style} htmlFor="file">Selecionar arquivos</Label>
            <Input
                onChange={(data) => files(data)}
                type="file"
                id="file"
                name="file"
                accept={accept}
                multiple />
        </Container>
    )
}

GetFile.defaultProps = {
    accept: ''
}

GetFile.propTypes = {
    files: PropTypes.func,
    accept: PropTypes.string
}