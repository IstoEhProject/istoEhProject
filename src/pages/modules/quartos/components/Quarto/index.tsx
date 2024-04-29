import {
  BodyContent,
  Container,
  Content,
  ContentCard,
  ContentItem,
  TitleTop,
  TopContent,
} from "./style";

export default function CardQuarto() {
  return (
    <Container>
      <Content>
        <ContentCard>
          <TopContent>
            <TitleTop>QUARTO 1</TitleTop>
            <div
              style={{
                backgroundColor: "green",
                padding: "5px",
                borderRadius: "5px",
                color: "white",
              }}
            >
              Disponível
            </div>
          </TopContent>
          <BodyContent>
            <ContentItem>
              <div
                style={{
                  fontWeight: 700,
                  width: "40%",
                  display: "flex",
                  alignItems: "center",
                  // justifyContent: "center",
                  backgroundColor: "#ff5555",
                }}
              >
                Capacidade de pessoas:
              </div>{" "}
              <div
                style={{
                  width: "60%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#f5f5f5",
                }}
              >
                2
              </div>
            </ContentItem>
            <ContentItem>
              <div
                style={{
                  fontWeight: 700,
                  width: "40%",
                  display: "flex",
                  alignItems: "center",
                  // justifyContent: "center",
                  backgroundColor: "#ff5555",
                }}
              >
                Descrição:
              </div>
              <span
                style={{
                  width: "60%",
                  display: "flex",
                  alignItems: "center",
                  // justifyContent: "center",
                  backgroundColor: "#f5f5f5",
                }}
              >
                Quarto com TV, frigobar, ar con...
              </span>
            </ContentItem>
            <ContentItem>
              <div
                style={{
                  fontWeight: 700,
                  width: "40%",
                  display: "flex",
                  alignItems: "center",
                  // justifyContent: "center",
                  backgroundColor: "#ff5555",
                }}
              >
                Tipo:
              </div>
              <div
                style={{
                  width: "60%",
                  display: "flex",
                  alignItems: "center",
                  // justifyContent: "center",
                  backgroundColor: "#f5f5f5",
                }}
              >
                Quarto Duplo
              </div>
            </ContentItem>
          </BodyContent>
        </ContentCard>
      </Content>
    </Container>
  );
}
