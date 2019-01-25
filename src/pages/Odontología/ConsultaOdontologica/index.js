import React from "react";
import BuscarDatosPaciente from "./BuscarDatosPacienteComponent";
import TabFather from "./TabFatherComponent";

const ConsultaOdontologica = () => (
  <div>
    <div className="row">
      <div className="col-md-12">
        <BuscarDatosPaciente />
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <TabFather />
      </div>
    </div>
  </div>
);

export default ConsultaOdontologica;
