import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: antiquewhite; */
`;

export const ContentInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  margin-right: 80px;

  @media (max-width: 376px) {
    justify-content: center;
    padding: 0px;
  }
`;

export const ContentTop = styled.div`
  display: flex;

  @media (max-width: 376px) {
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
  }
`;

export const ContentQuartos = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  // gap do conteudo para baixo
  padding-bottom: 100px;

  //scroll
  overflow-y: auto;
  max-height: 100vh;

  //esconder scroll
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }



  @media (max-width: 719px) {
    justify-content: center;
  }

  @media (max-width: 575px) {
    justify-content: flex-start;
  }

  
`;
