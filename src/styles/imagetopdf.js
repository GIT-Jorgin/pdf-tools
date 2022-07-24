import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  max-width: 100%;
  position: absolute;
  overflow: hidden;
`;

export const Title = styled.h1`
  color: #ff3358;
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
  width: ${(props) => (props.active ? "87%" : "90%")};
  height: 90%;
  background-color: #f1f5f9;
  border-radius: 20px;
  border: ${(props) => (props.finalFile ? "none" : "2px dashed #C3DDF8")};
  padding: 30px 10px 30px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow-y: auto;
  overflow-x: hidden;
  transition: 0.3s;
  margin-left: ${(props) => (props.active ? "10px" : "0")};

  @media (max-width: 820px) {
    width: 90%;
    margin-left: 0;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f5f9;
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
  background: #2e2e32;
  padding: 10px 18px;
  color: #fff;
  font-size: 10px;
  border-radius: 100px;
  font-weight: 500;
`;

export const FileInputLabel = styled.label`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 100px;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
`;
