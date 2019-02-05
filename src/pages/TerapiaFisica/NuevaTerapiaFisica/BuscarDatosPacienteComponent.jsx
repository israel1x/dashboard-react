import axios from "axios";
import React, { Component } from "react";
import Select from "react-select";
import {
  Button,
  Card,
  CardBody,
  Col,
  FormGroup,
  Input,
  Label,
  Row
} from "reactstrap";

const formStyles = {
  margin: "15px"
};
const divCont = {
  display: "flex",
  "align-items": "center",
  "justify-content": "center"
};
const btnStyle = {
  float: "left",
  "margin-top": "18px"
};

const apiEndPointHistorialTerapiaFisica =
  "http://ec2-34-216-62-59.us-west-2.compute.amazonaws.com:5000/tfisicamedicalcards?where[idpaciente]=2000";

/* handleSelect() {
  
} */

class BuscarDatosPaciente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idPacienteTF: "",
      historialTF: [],
      listDatesH: [
        {
          value: "2019-02-04T16:00:00.000Z",
          label: "febrero"
        },
        { value: "2019-03-01T16:00:00.000Z", label: "marzo" }
      ],
      fechaSelecionada: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.mostrarAlert = this.mostrarAlert.bind(this);
  }

  componentDidMount() {
    console.log("props", this.props);
    //this.getHistorialTerapiaFisica(apiEndPointHistorialTerapiaFisica);
  }

  mostrarAlert = () => {
    return (
      <h1>hola</h1>
      /*  <Alert
        title=""
        show={this.state.message1}
        text="El Paciente no tiene historial!"
        onConfirm={() => this.setState({ message1: true })}
      /> */
    );
  };

  getHistorialTerapiaFisica = apiEndPointHistorialTerapiaFisica => {
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

  // Muestra la lista de fechas del historial en el select, coge del estado
  showListHistorial = data => {
    //const data = this.state.historialTF;
    // `<li>${item.fechahora}</li>`
    const items = data.map(item => ({
      label: item.fechahora,
      value: item.fechahora
    }));
    console.log("array con fechas ->");
    console.log(items);
    this.setState({ listDatesH: items });
  };

  // funcion para manejar el select
  handleChangeSelect = fechaSelecionada => {
    this.setState({ fechaSelecionada });
    console.log(`Eligio:`, fechaSelecionada);
  };

  handleSubmit(event) {
    event.preventDefault();
    console.log("hola");
    this.handleChangeSelect();
  }

  render() {
    return (
      <div className="contenedor-box">
        <div>Datos Paciente</div>
        <Card className="card-contenedor" body outline color="info">
          <CardBody>
            <form style={formStyles} onSubmit={this.handleSubmit}>
              <Row className="form-group">
                <Col md={2}>
                  <FormGroup>
                    <div className="col-data-paciente">
                      <Label for="namepaciente">Nombres</Label>
                      <Input
                        type="text"
                        name="namepaciente"
                        id="namepaciente"
                        placeholder="Nombre del Paciente"
                      />
                    </div>
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for="lastnamepaciente">Apellidos</Label>
                    <Input
                      type="text"
                      name="lastnamepaciente"
                      id="lastnamepaciente"
                      placeholder="Apellidos del Paciente"
                    />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for="lastnamepaciente">Genero</Label>
                    <Input
                      type="text"
                      name="lastnamepaciente"
                      id="lastnamepaciente"
                      placeholder="Genero"
                    />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for="lastnamepaciente">Edad</Label>
                    <Input
                      type="number"
                      name="lastnamepaciente"
                      id="lastnamepaciente"
                      placeholder="Edad"
                    />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for="lastnamepaciente">Cédula</Label>
                    <Input
                      type="text"
                      name="lastnamepaciente"
                      id="lastnamepaciente"
                      placeholder="Cedula del Paciente"
                    />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for="lastnamepaciente">N. Historia Clínica</Label>
                    <Input
                      type="number"
                      name="lastnamepaciente"
                      id="lastnamepaciente"
                      placeholder="Número de Historia"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row className="form-group row-buscar" style={divCont}>
                <div className="col-sm-6">
                  <Label for="selecthistorial">Historial:</Label>
                  {/*  <Input
                    type="select"
                    name="emailhistorial"
                    id="selecthistorial"
                  /> */}

                  {/*  <DropdownButton
                    bsSize="large"
                    title="Historial"
                    id="dropdown-size-medium"
                  >
                    <MenuItem eventKey="1" onClick={this.handleSelect}>
                      Lunes{" "}
                    </MenuItem>
                    <MenuItem eventKey="2">Martes </MenuItem>
                    <MenuItem eventKey="3">Miercoles </MenuItem>
                  </DropdownButton> */}

                  <Select
                    value={this.state.fechaSelecionada}
                    onChange={this.handleChangeSelect}
                    options={this.state.listDatesH}
                    defaultValue={this.state.listDatesH[0]}
                  />
                </div>
                <div className="col-sm-6">
                  <Button
                    className="btn btn-info btn-fill btn-wd"
                    type="submit"
                    style={btnStyle}
                  >
                    Buscar Historial
                  </Button>
                </div>
              </Row>
            </form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default BuscarDatosPaciente;
