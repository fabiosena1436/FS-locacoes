import React from "react";
import { StyleSheetManager } from "styled-components";

import listLinks from "./menuList";
import LogoutIcon from "@mui/icons-material/Logout";
import PropTypes from "prop-types";
import { useUser } from "../../hooks/UserContext";
import { Container, ItemContainer, ListLink } from "./styles";

export function SideMenuAdmin({ path }) {
  const { logout } = useUser();
  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "isActive"}>
      <Container>
        <hr></hr>
        {listLinks.map((item) => (
          <ItemContainer key={item.id} isActive={path === item.link}>
            <item.icon className="icon" />
            <ListLink to={item.link}>{item.label}</ListLink>
          </ItemContainer>
        ))}
        <hr></hr>
        <ItemContainer style={{ position: "fixed", bottom: "30px" }}>
          <LogoutIcon style={{ color: "#FFFFFF" }} />
          <ListLink to="/login" onClick={logout}>
            Sair
          </ListLink>
        </ItemContainer>
      </Container>
    </StyleSheetManager>
  );
}

SideMenuAdmin.propTypes = {
  path: PropTypes.string,
};
