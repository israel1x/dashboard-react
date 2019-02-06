import axios from "axios";
import moment from "moment";
import React, { Component } from "react";
import { SingleDatePicker } from "react-dates";
import { Input, Label } from "reactstrap";

const myStyleLabel = {
  color: "#555"
};

const apiEndpointPsicologiaPost =
  "http://ec2-34-216-62-59.us-west-2.compute.amazonaws.com:5000/psicomedicalcards/";

class NuevaPsicologia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment(),
      startDate: moment(),
      endDate: moment(),
      dateRangeFocusedInput: null,
      interpretaciones: "",
      reactivosUsados: "",
      datosRelevantes: ""
    };

    this.baseStateInicial = this.state;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  async sendDataFormPsicologia(obj) {
    //console.log(obj);
    var jsonObjt = JSON.parse(obj);
    //console.log(jsonObjt);
    const data = await axios.post(apiEndpointPsicologiaPost, jsonObjt);
    console.log(data.status);

    if (data.status === 201) {
      console.log("codigo devuelto 201");

      //this.setState({ state: "" });
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    let dataJson = JSON.parse(JSON.stringify(this.state));
    console.log(dataJson);

    var datosEnviar = this.buildDataJsonPsicologia(dataJson);
    console.log("listo para enviar", datosEnviar);

    this.sendDataFormPsicologia(datosEnviar);

    this.setState({ state: this.baseStateInicial });
  }

  buildDataJsonPsicologia = dataJson => {
    let idpaciente = "007";

    let fechahora = dataJson.date;
    let interpretaciones = dataJson.interpretaciones;
    let reactivosUsados = dataJson.reactivosUsados;
    let datosRelevantes = dataJson.datosRelevantes;

    var newJsonData = {
      idpaciente,
      fechahora,
      interpretaciones,
      reactivosUsados,
      datosRelevantes
    };

    var dataPreview = JSON.stringify(newJsonData);
    console.log(dataPreview);
    return dataPreview;
  };

  render() {
    let { date } = this.state;
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="header">
              <h4 style={myStyleLabel}>Nueva Consulta</h4>
            </div>
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
              <div className="content">
                <div className="form-group">
                  <Label
                    className="col-sm-3 control-label"
                    style={myStyleLabel}
                  >
                    Fecha::
                  </Label>
                  <div className="col-sm-9">
                    <SingleDatePicker
                      date={date}
                      onDateChange={date => this.setState({ date })}
                      focused={this.state.focused}
                      onFocusChange={({ focused }) =>
                        this.setState({ focused })
                      }
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    className="col-sm-3 control-label"
                    style={myStyleLabel}
                  >
                    Interpretaciones:
                  </label>
                  <div className="col-sm-9">
                    <Input
                      type="textarea"
                      rows="2"
                      name="interpretaciones"
                      value={this.state.interpretaciones}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label
                    className="col-sm-3 control-label"
                    style={myStyleLabel}
                  >
                    Reactivos Usados:
                  </label>
                  <div className="col-sm-9">
                    <Input
                      type="textarea"
                      rows="3"
                      name="reactivosUsados"
                      value={this.state.reactivosUsados}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label
                    className="col-sm-3 control-label"
                    style={myStyleLabel}
                  >
                    Datos Relevantes:
                  </label>
                  <div className="col-sm-9">
                    <Input
                      type="textarea"
                      rows="4"
                      name="datosRelevantes"
                      value={this.state.datosRelevantes}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="footer text-center">
                <button type="submit" className="btn btn-info btn-fill">
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NuevaPsicologia;
