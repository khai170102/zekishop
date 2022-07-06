import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import Listpage from "./Product/page/Listpage";
import Box from "@mui/material/Box";
FeatersProduct.propTypes = {};

function FeatersProduct(props) {
  const match = useRouteMatch;
  return (
    <Box pt={3}>
      <Switch>
        <Route path={match.url} component={Listpage} />
      </Switch>
    </Box>
  );
}

export default FeatersProduct;
