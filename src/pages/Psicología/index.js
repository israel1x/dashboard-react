import React from "react";
import { Route } from "react-router-dom";
import NuevaPsicologia from "./NuevaPsicologia";

const Psicologia = ({ match }) => (
  <div className="content">
    <Route path={`${match.url}/nuevapsicologia`} component={NuevaPsicologia} />
  </div>
);
export default Psicologia;
