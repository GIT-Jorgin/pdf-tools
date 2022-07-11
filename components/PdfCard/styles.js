import styled, { css } from "styled-components";

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
`;

export const Badge = styled.div`
    width: 50px;
    height: 20px;
    background-color: #C62518;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    position: absolute;
    margin: auto;
    right: 5px;
    bottom: 5px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;