import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
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
class BuscarDatosPaciente extends Component {
  state = {};
  render() {
    return (
      <div className="contenedor-box">
        <div>Datos Paciente</div>
        <Card className="card-contenedor" body outline color="info">
          <CardBody>
            <Form style={formStyles}>
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
                  <Input
                    type="select"
                    name="emailhistorial"
                    id="selecthistorial"
                  />
                </div>
                <div className="col-sm-6">
                  <Button
                    className="btn btn-info btn-fill btn-wd"
                    style={btnStyle}
                  >
                    Buscar Historial
                  </Button>
                </div>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default BuscarDatosPaciente;
