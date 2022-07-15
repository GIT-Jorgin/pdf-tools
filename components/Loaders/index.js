import { Container } from "./styles";
import PropTypes from 'prop-types'

export function SimpleSpinner({ scale, color }) {
    return (
        <Container scale={scale} color={color}>
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
    color: '#fff'
}

SimpleSpinner.propTypes = {
    scale: PropTypes.number,
    color: PropTypes.string,
}