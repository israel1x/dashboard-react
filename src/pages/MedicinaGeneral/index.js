import React from "react";
import { Route } from "react-router-dom";

import NuevaConsulta from "./NuevaConsulta";

const MedicinaGeneral = ({ match }) => (
  <div className="content">
    <Route path={`${match.url}/nuevaconsulta`} component={NuevaConsulta} />
  </div>
);

export default MedicinaGeneral;
