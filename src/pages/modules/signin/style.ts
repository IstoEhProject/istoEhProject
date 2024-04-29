import styled from "styled-components";

export const Container = styled.div`
  background-image: url("https://s3-alpha-sig.figma.com/img/a854/7fbe/343deab7ff623721af4c673c3281d154?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xq2lRgeRu0SwbgOJK-NypYcUmwwsZlBl5mI3WiwxwRQoFongaXY8nN-s6YtE9FW8UfmD1Y~DlrPqussK5Fsu-adYzkBQS5izaY1gZ-MReZVoEvmGGeIvU86TAyuuUbm6MEudsW6QYx332l13dqkWDfbzzVz-twiXeVN~Jpcb-03teZVLwKcUk77Hs3sYBzn~6xdM94-kwnSFvM0ThrdE9Hbx2wQ9PveAiqr4BGUznGBdTcIdoUbpCsgPqFVGegiUwp90oJy-nAlLPFjnqHBgfepcUqXYU7cTCBLNq8B8lSodWKC0RIDJGIcSQWTttSzz6k65gibyLXaL9lj9zQJ1CA__");
  background-size: cover;
  background-position: center;
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

export const ContentTitle = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 100px;
  font-weight: 800;
  color: #ffffff;
  text-shadow: 
    -1px -1px 0 #555,  
     1px -1px 0 #555,
    -1px  1px 0 #555,
     1px  1px 0 #555, 
    -2px -2px 0 #333,
     2px -2px 0 #333,
    -2px  2px 0 #333,
     2px  2px 0 #333;
`;

export const ContentLogin = styled.div`
  width: 50%;
  height: 100%;
  background-color: #371f76;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 20px;
  border-radius: 20px;
`;

export const Title = styled.h1`
  font-size: 50px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 20px;
`;
