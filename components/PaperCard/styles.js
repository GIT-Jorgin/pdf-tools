import styled from "styled-components";

export const Container = styled.div`
    width: 168px;
    position: relative;
    height: 237.6px;
    background-color: white;
    cursor: move;
    border-radius: 5px;
    margin: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    touch-action: none;
`;

export const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    border-radius: 5px;
    z-index: 10;
`;

export const Badge = styled.div`
    width: 50px;
    height: 20px;
    background-color: #EC233B;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    position: absolute;
    margin: auto;
    right: 5px;
    bottom: 5px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    cursor: default;

    & > p {
        color: white;
    }
`;

export const Delete = styled.button`
    width: 35px;
    height: 35px;
    position: absolute;
    margin: auto;
    top: 5px;
    right: 5px;
    border-radius: 100px;
    border: none;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.10);
    display: flex;
    justify-content: center;
    align-items: center;

    &:disabled{
        cursor: default;
    }
`;

export const DraggableArea = styled.div`
    width: 100%;
    height: 100%;
`;