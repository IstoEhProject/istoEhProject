import PasswordIcon from "@mui/icons-material/Password";
import PersonIcon from "@mui/icons-material/Person";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Content, ContentLogin, ContentTitle, Title } from "./style";

export default function Signin() {
  return (
    <Container>
      <Content>
        <ContentTitle>Isto É Pousada</ContentTitle>
        <ContentLogin>
          <Title>Entrar</Title>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "35ch", display: "flex" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="user"
              label={"Usuário"}
              variant="outlined"
              InputProps={{
                startAdornment: <PersonIcon color="primary" />,
              }}
              sx={{
                "& > :not(style)": {
                  width: "100%",
                  borderRadius: "20px",
                  color: "#FFFFFF",
                  fontSize: "30px",
                },
              }}
            />
            <TextField
              id="password"
              label="Senha"
              variant="outlined"
              InputProps={{
                startAdornment: <PasswordIcon color="primary" />,
              }}
              sx={{
                "& > :not(style)": {
                  width: "100%",
                  borderRadius: "20px",
                  color: "#FFFFFF",
                  fontSize: "30px",
                },
              }}
            />
          </Box>
        </ContentLogin>
      </Content>
    </Container>
  );
}
