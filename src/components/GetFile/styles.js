import styled from "styled-components";

export const Container = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 720px){
        width: 90%;
    }
`;

export const Label = styled.label`
    background-color: rgba(199, 0, 57, .2);
    width: 70%;
    height: 150px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
    font-weight: 500;
    cursor: pointer;
    
    font-size: 20px;
    text-align: center;

    @media(max-width: 540px){
        width: 90%;
        height: 100px;
        border-radius: 5px;
    }
`;

export const Input = styled.input`
    display: none;
`;