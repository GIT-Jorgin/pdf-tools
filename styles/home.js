import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.a`
  width: 300px;
  height: 70px;
  margin: 15px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
  font-size: 14px;
  background: ${(props) => props.bg};
  border-radius: 100px;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;
