import { ButtonMenu, Container } from "./styles";

export function Menu({ children, active }){
    return (
        <Container active={active}>
            { children }
        </Container>
    )
}

export function MenuButton({ children, onClick, disabled }){
    return (
        <ButtonMenu disabled={disabled} onClick={onClick}>
            { children }
        </ButtonMenu>
    )
}