import React from "react";
import { Route } from "react-router-dom";
import ConsultaOdontologica from "./ConsultaOdontologica";

const Odontologia = ({ match }) => (
  <div className="content">
    <Route
      path={`${match.url}/consultaodontologica`}
      component={ConsultaOdontologica}
    />
  </div>
);

export default Odontologia;
