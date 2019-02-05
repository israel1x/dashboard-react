import React from "react";
import BuscarDatosPaciente from "./BuscarDatosPacienteComponent";
import TabFather from "./TabFatherComponent";

const NuevaTerapiaFisica = () => (
  <div>
    <div className="row">
      <div className="col-md-12">
        <BuscarDatosPaciente idPacienteTf={"2000"} />
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <TabFather
          idPacienteTf={"2000"}
          idHistoriaFecha={""}
          dataJsonHistorias={""}
        />
      </div>
    </div>
  </div>
);

export default NuevaTerapiaFisica;
