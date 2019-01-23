import React from "react";
import { Route } from "react-router-dom";

import NuevaTerapiaFisica from "./NuevaTerapiaFisica";

const TerapiaFisica = ({ match }) => (
  <div className="content">
    <Route
      path={`${match.url}/nuevaterapiafisica`}
      component={NuevaTerapiaFisica}
    />
  </div>
);

export default TerapiaFisica;
