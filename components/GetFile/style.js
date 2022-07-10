import styled from "styled-components";

export const Container = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Label = styled.label`
    background-color: #C70039;
    width: 70%;
    height: 150px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: pointer;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    font-size: 20px;
    text-align: center;
`;

export const Input = styled.input`
    display: none;
`;