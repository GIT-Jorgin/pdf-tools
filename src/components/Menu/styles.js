import styled from "styled-components";

export const Container = styled.div`
  width: 80px;
  height: 45%;
  border-radius: 100px;
  background-color: rgba(179, 0, 51, .1);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transition: .3s;
  margin-right: ${props => props.active ? '0' : '-200px'};
  z-index: 999;

  @media(max-width: 820px){
    position: fixed;
    width: 40%;
    height: 80px;
    flex-direction: row;
    margin: auto;
    bottom: ${props => props.active ? '10px' : '-100px'};
    margin-right: 0;
  }

  @media(max-width: 650px){
    position: fixed;
    width: 50%;
    height: 80px;
    flex-direction: row;
    margin: auto;
  }

  @media(max-width: 450px){
    position: fixed;
    width: 70%;
    height: 80px;
    flex-direction: row;
    margin: auto;
  }
`;

export const ButtonMenu = styled.button`
  width: 50px;
  height: 50px;
  position: relative;
  background: rgb(252,24,47);
  background: linear-gradient(42deg, rgba(252,24,47,1) 0%, rgba(236,82,82,1) 100%);
  border-radius: 100px;
  border: none;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:nth-child(2) {
    width: 60px;
    height: 60px;
  }

  &:disabled {
    background: #ACADB8;
    cursor: default;
    box-shadow: none;
  }
`;