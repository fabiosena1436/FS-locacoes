import React from "react";
import { SideMenuAdmin } from "../../components";
import Orders from "./Orders";
import ListProducts from "./ListProducts";
import { Container, ContainerItems } from "./styles";
import PropTypes from "prop-types";
import paths from "../../constants/paths";
import NewProduct from "./NewProduct";

function Admin({ match: { path } }) {
  return (
    <Container>
      <SideMenuAdmin path={path} />
      <ContainerItems>
        {path === paths.Order && <Orders />}
        {path === paths.Products && <ListProducts />}
        {path === paths.NewProduct && <NewProduct />}
      </ContainerItems>
    </Container>
  );
}
Admin.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }),
};

export default Admin;