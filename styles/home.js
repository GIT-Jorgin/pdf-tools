import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    max-width: 100vw;
    overflow: hidden;
`;

export const Content = styled.div`
    width: 90%;
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