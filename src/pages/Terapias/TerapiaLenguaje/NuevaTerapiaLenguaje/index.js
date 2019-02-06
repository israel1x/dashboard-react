import React, { Component } from "react";
import BuscarDatosPaciente from "./BuscarDatosPacienteComponent";
import TabChild from "./TabChildComponent";

class NuevaTerapiaLenguaje extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <BuscarDatosPaciente
              idPacienteTf={"2000"}
              /* idHistoriaFecha={""}
              dataJsonHistorias={""}
              getHistorial={this.getHistorialTerapiaFisica}
              jsonFechas={this.state.listDatesH}
              handleSelect={this.handleChangeSelect}
              botonNuevaConsulta={this.sendBanderaCleanForm} */
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <TabChild
              idPacienteTf={"2000"}
              /*  jsonFechas={this.state.listDatesH}
              jsonFechaSelecionda={this.state.fechaSelecionada}
              jsonDataForFechaIdMongo={this.state.dataFormHistorialId}
              bandera={this.state.bandera}
              banderaClean={this.state.banderaClean} */
            />
          </div>
        </div>
      </div>
    );
  }
}

export default NuevaTerapiaLenguaje;
