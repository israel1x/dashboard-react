import React from "react";
import { Route } from "react-router-dom";
import NuevaTerapiaFisica from "./TerapiaFisica/NuevaTerapiaFisica";
import NuevaTerapiaLenguaje from "./TerapiaLenguaje/NuevaTerapiaLenguaje";

const Terapias = ({ match }) => (
  <div className="content">
    <div className="container-fluid">
      <Route
        path={`${match.url}/nuevaterapiafisica`}
        component={NuevaTerapiaFisica}
      />
      <Route
        path={`${match.url}/nuevaterapialenguaje`}
        component={NuevaTerapiaLenguaje}
      />
    </div>
  </div>
);

export default Terapias;
