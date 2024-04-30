import { Container, Title } from "@/core/style/styleGlobal";
import CheckIcon from "@mui/icons-material/Check";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import CloseIcon from "@mui/icons-material/Close";
import LockClockIcon from "@mui/icons-material/LockClock";
import SearchIcon from "@mui/icons-material/Search";
import {
  Divider,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";
import CardQuarto from "./components/Quarto";
import { Content, ContentInput, ContentQuartos, ContentTop } from "./style";

export default function Quartos() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Container>
      <Content>
        <ContentTop>
          <Title>Quartos</Title>
          <ContentInput
          >
            <FormControl
              sx={{
                m: 1,
                minWidth: 120,
              }}
            >
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                sx={{ borderRadius: "25px" }}
              >
                <MenuItem value="">
                  <em
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <SearchIcon /> Selecione um status
                  </em>
                </MenuItem>
                <MenuItem value={1}>
                  <CheckIcon />
                  Disponível
                </MenuItem>
                <MenuItem value={2}>
                  <CloseIcon />
                  Ocupado
                </MenuItem>
                <MenuItem value={3}>
                  <CleaningServicesIcon />
                  Limpeza
                </MenuItem>
                <MenuItem value={4}>
                  <LockClockIcon />
                  Reservado
                </MenuItem>
              </Select>
            </FormControl>
          </ContentInput>
        </ContentTop>

        <Divider />

        <ContentQuartos>
          <CardQuarto />
          <CardQuarto />
          <CardQuarto />
          <CardQuarto />
          <CardQuarto />
          <CardQuarto />
          <CardQuarto />
          <CardQuarto />
          <CardQuarto />
          <CardQuarto />
          <CardQuarto />
          <CardQuarto />
          <CardQuarto />
          <CardQuarto />
          <CardQuarto />
          <CardQuarto />
          <CardQuarto />
        </ContentQuartos>
      </Content>
    </Container>
  );
}
