import React from "react";

import TabChildComponent from "./TabChildComponent";
import BuscarDatosPaciente from "./BuscarDatosPacienteComponent";
import TabFather from "./TabFatherComponent";

const NuevaConsulta = () => (
  <div>
    <div className="row">
      <div className="col-md-12">
        <BuscarDatosPaciente />
      </div>
      {/* <div className="col-md-6">
        <HorizontalForm
          onSubmit={values =>
            alert("Enter values: " + JSON.stringify(values, null, 2))
          }
        />
      </div> */}
    </div>
    <div className="row">
      <div className="col-md-12">
        <TabFather />
      </div>
    </div>
  </div>
);

export default NuevaConsulta;
