import { Container } from "./styles";

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