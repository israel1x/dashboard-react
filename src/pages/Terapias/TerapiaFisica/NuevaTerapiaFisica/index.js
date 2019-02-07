import axios from "axios";
import React, { Component } from "react";
import BuscarDatosPaciente from "./BuscarDatosPacienteComponent";
import TabChild from "./TabChildComponent";

const apiEndPointHistorialTerapiaFisica =
  "http://ec2-34-216-62-59.us-west-2.compute.amazonaws.com:5000/tfisicamedicalcards?where[idpaciente]=2000&fields[fechahora]=1";
/*  "http://ec2-34-216-62-59.us-west-2.compute.amazonaws.com:5000/tfisicamedicalcards?where[idpaciente]=2000&fields[fechahora]=1" solo las
"http://ec2-34-216-62-59.us-west-2.compute.amazonaws.com:5000/tfisicamedicalcards/5c58d3bb6cb27b185bc43761"; ID DE MONGO
 */

const apiEndPointHistorialFechaPorIdTratamiento =
  "http://ec2-34-216-62-59.us-west-2.compute.amazonaws.com:5000/tfisicamedicalcards/";
class NuevaTerapiaFisica extends Component {
  constructor(props) {
    super(props);
    this.state = {
      historialTF: [],
      fechaSelecionada: [],
      arraySeguimiento: [],
      listDatesH: [
        /*  {
          value: "2019-02-04T16:00:00.000Z",
          label: "febrero"
        },
        { value: "2019-03-01T16:00:00.000Z", label: "marzo" } */
      ],
      dataFormHistorialId: [],
      bandera: 0,
      banderaClean: 0,
      modalState: false
    };
    this.sendBanderaCleanForm = this.sendBanderaCleanForm.bind(this);
  }

  getHistorialTerapiaFisica = () => {
    axios.get(apiEndPointHistorialTerapiaFisica).then(response => {
      if (response.data.length === 0) {
        console.log("NO TIENE HISTORIAL");
        /* return (
          
        ); */
      } else {
        this.setState({ historialTF: response.data });
      }
      console.log(response.data);
      console.log(this.state.historialTF.length);
      this.showListHistorial(this.state.historialTF);
    });
  };

  showListHistorial = data => {
    //const data = this.state.historialTF;
    // `<li>${item.fechahora}</li>`
    const items = data.map(item => ({
      label: item.fechahora,
      value: item._id
    }));
    console.log("array con fechas ->");
    console.log(items);
    this.setState({ listDatesH: items });
  };

  armarURLFechaConId = (
    apiEndPointHistorialFechaPorIdTratamiento,
    fechaSelecionada
  ) => {
    return apiEndPointHistorialFechaPorIdTratamiento + fechaSelecionada;

    //console.log("URL", fechaSelecionada);
  };

  getJsonHistorialFecha(idFormMongo) {
    // LLAMADA AL HISTORIAL POR FECHA
    //DESPUES QUE SELCCIONA UNA FECHA DEL SELECT
    let url = this.armarURLFechaConId(
      apiEndPointHistorialFechaPorIdTratamiento,
      idFormMongo
    );
    console.log(
      "Voy a treaer los datos del formulario con Id del from Mongo",
      url
    );
    axios.get(url).then(response => {
      this.setState({ dataFormHistorialId: response.data });
      //console.log(dataFormHistorialId);
    });
  }

  handleChangeSelect = fechaSelecionada => {
    this.setState({ fechaSelecionada });

    // MODAL
    /* this.setState({ modalState: true });
    console.log("ESTADO DEL MODAL", this.state.modalState); */
    ///////////////////

    console.log(`Eligio:`, fechaSelecionada.value);

    this.getJsonHistorialFecha(fechaSelecionada.value);
    if (this.state.bandera === 0) {
      this.setState({ bandera: 1 });
    } else {
      this.setState({ bandera: 0 });
    }
  };

  // boton nueva consulta
  sendBanderaCleanForm() {
    console.log("hola soy el boton nueva consulta y clean");
    if (this.state.banderaClean === 0) {
      this.setState({ banderaClean: 1 });
    } else {
      this.setState({ banderaClean: 0 });
    }
  }

  /* handleClose() {
    this.setState({ show: false });
  } */

  render() {
    //console.log("bsajdjsdfsbfjksbfkjbskdfb");
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <BuscarDatosPaciente
              stateOfModal={this.state.modalState}
              cerrarM={this.handleClose}
              idPacienteTf={"2000"}
              idHistoriaFecha={""}
              dataJsonHistorias={""}
              getHistorial={this.getHistorialTerapiaFisica}
              jsonFechas={this.state.listDatesH}
              handleSelect={this.handleChangeSelect}
              botonNuevaConsulta={this.sendBanderaCleanForm}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <TabChild
              idPacienteTf={"2000"}
              jsonFechas={this.state.listDatesH}
              jsonFechaSelecionda={this.state.fechaSelecionada}
              jsonDataForFechaIdMongo={this.state.dataFormHistorialId}
              bandera={this.state.bandera}
              banderaClean={this.state.banderaClean}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default NuevaTerapiaFisica;
