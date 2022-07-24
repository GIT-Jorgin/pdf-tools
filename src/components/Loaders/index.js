import { Container } from "./styles";
import PropTypes from 'prop-types'

export function SimpleSpinner({ scale, color, style }) {
    return (
        <Container style={style} scale={scale} color={color}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </Container>
    )
}

SimpleSpinner.defaultProps = {
    scale: 1,
    color: '#000'
}

SimpleSpinner.propTypes = {
    scale: PropTypes.number,
    color: PropTypes.string,
}