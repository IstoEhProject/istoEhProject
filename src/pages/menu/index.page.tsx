import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import LiquorIcon from '@mui/icons-material/Liquor';
import LogoutIcon from "@mui/icons-material/Logout";
import MapIcon from '@mui/icons-material/Map';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import NightShelterIcon from '@mui/icons-material/NightShelter';
import PaidIcon from '@mui/icons-material/Paid';
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import { Avatar, Divider, Drawer } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Sidebar = () => {
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Box
        width="100%"
        height={80}
        display={"flex"}
        alignItems={"center"}
        // justifyContent={"center"}
      >
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{
            width: 50,
            height: 50,
            marginLeft: 2,
            marginRight: 2,
          }}
        />
        <div>
          <p
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#000",
              marginBottom: 0,
            }}
          >
            Nome do Usuário
          </p>
          <span
            style={{
              fontSize: 14,
              color: "#000",
              marginTop: 0,
            }}
          >
            Função
          </span>
        </div>
      </Box>
      <List>
        {[
          "DASHBOARD",
          "QUARTOS",
          "ENTRADAS",
          "PERNOITES",
          "MAPA GERAL",
          "CLIENTES",
          "PRODUTOS",
          "RESERVAS",
          "VALOR DIÁRIA",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {
                  [
                    <DashboardIcon />,
                    <BedroomChildIcon />,
                    <MeetingRoomIcon />,
                    <NightShelterIcon />,
                    <MapIcon />,
                    <GroupIcon />,
                    <LiquorIcon />,
                    <RoomPreferencesIcon />,
                    <PaidIcon />,
                  ][index]
                }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <List>
        {["SAIR"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Container>
      <Drawer open={open} onClose={toggleDrawer(true)}>
        {DrawerList}
      </Drawer>
    </Container>
  );
};

export default Sidebar;
