import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100%;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    position: absolute;
    overflow: hidden;
`;

export const Title = styled.h1`
  color: #FF3358;
  font-size: 20px;
  margin-bottom: -20px;
  margin-top: 40px;
`;

export const FileArea = styled.div`
    display: flex;
    height: 85%;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    overflow: hidden;
`;

export const Content = styled.div`
    width: ${props => props.active ? '87%' : '90%'};
    height: 90%;
    background-color: #F1F5F9;
    border-radius: 20px;
    border: 2px dashed #C3DDF8;
    padding: 30px 10px 30px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    overflow-y: auto;
    overflow-x: hidden;
    transition: .3s;
    margin-left: ${props => props.active ? '10px' : '0'};


    @media(max-width: 820px){
      width: 90%;
      margin-left: 0;
    }

    &::-webkit-scrollbar {
  width: 8px;
}
    &::-webkit-scrollbar-track {
  background: #F1F5F9; 
}

    &::-webkit-scrollbar-thumb {
  background: #888; 
  border-radius: 20px;
}
`;

export const Result = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PdfResultSize = styled.span`
  background: #2E2E32;
  padding: 10px 18px;
  color: #fff;
  font-size: 10px;
  border-radius: 100px;
  font-weight: 500;
`;

export const Menu = styled.div`
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

export const MenuButton = styled.button`
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

export const FileInputLabel = styled.label`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 100px;
  cursor: ${props => props.disabled ? 'default': 'pointer'};
`;
