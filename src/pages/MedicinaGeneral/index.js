import React from "react";
import { Route } from "react-router-dom";

/* import Grid from "./Grid";
import Icons from "./Icons";
import Notifications from "./Notifications";
import Panels from "./Panels";
import SweetAlert from "./SweetAlert";
import Typography from "./Typography"; */

import NuevaConsulta from "./NuevaConsulta";

const MedicinaGeneral = ({ match }) => (
  <div className="content">
    {/*  <Route path={`${match.url}/nuevobeneficiario`} component={IngresoBeneficiarios} /> */}
    <Route path={`${match.url}/nuevaconsulta`} component={NuevaConsulta} />
    {/* <Route path={`${match.url}/icons`} component={Icons} />
    <Route path={`${match.url}/notifications`} component={Notifications} />
    <Route path={`${match.url}/panels`} component={Panels} />
    <Route path={`${match.url}/sweetalert`} component={SweetAlert} />
    <Route path={`${match.url}/typography`} component={Typography} /> */}
  </div>
);

export default MedicinaGeneral;
