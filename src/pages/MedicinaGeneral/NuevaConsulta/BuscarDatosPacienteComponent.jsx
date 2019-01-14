import React, { Component } from "react";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody
} from "reactstrap";
import "./buscardatospaciente.scss";

class BuscarDatosPaciente extends Component {
  state = {};
  render() {
    return (
      <div className="contenedor-box">
        <div>Datos Paciente</div>
        <Card className="card-contenedor" body outline color="info">
          <CardBody>
            <Form>
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
              <Row className="form-group row-buscar">
                <Col md={6}>
                  <FormGroup>
                    <Label for="selecthistorial">Historial:</Label>
                    <Input
                      type="select"
                      name="emailhistorial"
                      id="selecthistorial"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Button color="primary">Buscar Paciente</Button>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default BuscarDatosPaciente;
