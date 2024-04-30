import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  max-width: 800px;
  width: 100%;
  max-height: 500px;
  height: 100%;
  padding: 20px;
  border-radius: 20px;

  background-color: rgba(255, 255, 255, 0.5);
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
