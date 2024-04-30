import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
`;

export const Content = styled.div`
  width: 33%;
  min-width: 330px;
  min-height: 330px;

 
`;

export const ContentCard = styled.div`
  border-radius: 18px;
  background-color: #6963634f;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);

  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
  
`;

export const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const TitleTop = styled.h1`
  font-size: 24px;
  font-weight: 700;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BodyContent = styled.div`
  height: 240px;
  padding: 10px;
`;

export const ContentItem = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  /* background-color: #ffffff;
  margin-bottom: 5px;
  padding: 5px;
  border-radius: 15px; */
`;
