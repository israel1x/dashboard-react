import React from "react";
import { Route } from "react-router-dom";
import NuevaTerapiaLenguaje from "./NuevaTerapiaLenguaje";

const TerapiaLenguaje = ({ match }) => {
  <div className="content">
    <Route
      path={`${match.url}/nuevaterapialenguaje`}
      component={NuevaTerapiaLenguaje}
    />
  </div>;
};

export default TerapiaLenguaje;
