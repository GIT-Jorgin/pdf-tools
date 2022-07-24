import { ButtonMenu, Container } from "./styles";
import PropTypes from "prop-types";

export function Menu({ children, active }) {
  return <Container active={active}>{children}</Container>;
}

Menu.defaultProps = {
  active: false
};

Menu.propTypes = {
  active: PropTypes.number
};

export function MenuButton({ children, onClick, disabled }) {
  return (
    <ButtonMenu disabled={disabled} onClick={onClick}>
      {children}
    </ButtonMenu>
  );
}

Menu.defaultProps = {
    disabled: false,
  };
  
  Menu.propTypes = {
    onClick: PropTypes.func,
    disabled: PropTypes.bool
  };
