import React, { Component } from "react";
import axios from "axios";
import MyInput from "./Myinput";
//import Joi from "joi-browser";
//import { Link } from "react-router-dom";
import { TabView, TabPanel } from "primereact/tabview";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
//import { Control, LocalForm, Errors } from "react-redux-form";
//import classnames from "classnames";

const apiEndpoint =
  "http://ec2-34-216-62-59.us-west-2.compute.amazonaws.com:5000/medicalcards/";

class TabChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      motivoConsulta: "",
      antePersonal: "",
      anteFamiliares: "",
      pactualPaciente: "",
      ractualOrgPac: "",
      svitalesPac: "",
      exfisicoRegA: "",
      exfisicoRegB: "",
      desPacienteA: "",
      ciePacienteA: "",
      prePacienteA: "",
      defPacienteA: "",
      desPacienteB: "",
      ciePacienteB: "",
      prePacienteB: "",
      defPacienteB: "",
      desPacienteC: "",
      ciePacienteC: "",
      prePacienteC: "",
      defPacienteC: "",
      trataPac: "",
      evoluPac: "",
      prescripPac: ""
      // diagnosticoPac: ""

      /*  errors: {
        desPacienteA: "No a ingresado el diagnóstico del paciente"
      } */
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  async componentDidMount() {
    /*  const response = await axios.get(
      "http://ec2-34-216-62-59.us-west-2.compute.amazonaws.com:5000/medicalcards/"
    ); */
    // p const { data: registro } = await axios.get(apiEndpoint);
    //const response = await promise;
    //console.log(promise);
    // p console.log(registro);
  }

  async sendFormMedicinaGeneral(obj) {
    //console.log(obj);
    var jsonObjt = JSON.parse(obj);
    //console.log(jsonObjt);
    const data = await axios.post(apiEndpoint, jsonObjt);
    console.log(data);
  }

  schema = {
    desPacienteA: Joi.string().required()
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  validate = () => {
    const error = Joi.validate(this.state.desPacienteA, this.schema, {
      abortEarly: false
    });
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;

    /* console.log(result);

    const errros = {};
    if (this.state.desPacienteA.trim() === "") {
      errros.desPacienteA =
        "Es necesario ingresar el diagnóstico del paciente A";
    }
    return Object.keys(errros).length === 0 ? null : errros; */
  };

  buildJsonDataToSend = dataJson => {
    /* var dataMask =
      '{ "consulta" : { "motivo": ""}, "antecedentes": { "antecedentespaciente": "", "antecedentesfapaciente": "" }, "problemaActual": { "problemaactualpaciente": "" }, "preConsulta": {"revactorganospaciente": "", "sigsVitYAntropaciente":""} ,"examenFisico": {"examFisicoReg": ""}, "tratamiento": { "tratamiento":""}, "evolucionYPrescrip": { "evolucion": "", "prescrip":""}, "namepaciente":"", "diagnostic":[ {"description": "", "cie":"","pre":"","def":""},{"description": "", "cie":"","pre":"","def":""},{"description": "", "cie":"","pre":"","def":""}] } ';
 */
    let namepaciente = "Paciente Prueba Israel";
    let motivo = dataJson.motivoConsulta;
    let antecedentespaciente = dataJson.antePersonal;
    let antecedentesfapaciente = dataJson.anteFamiliares;
    let problemaactualpaciente = dataJson.pactualPaciente;
    let revactorganospaciente = dataJson.ractualOrgPac;
    let sigsVitYAntropaciente = dataJson.svitalesPac;
    let examFisicoReg = dataJson.exfisicoRegA;
    let tratamiento = dataJson.trataPac;
    let evolucion = dataJson.evoluPac;
    let prescrip = dataJson.prescripPac;

    let descripcion1 = dataJson.desPacienteA;
    let cie1 = dataJson.ciePacienteA;
    let pre1 = dataJson.prePacienteA;
    let def1 = dataJson.defPacienteA;

    let descripcion2 = dataJson.desPacienteB;
    let cie2 = dataJson.ciePacienteB;
    let pre2 = dataJson.prePacienteB;
    let def2 = dataJson.defPacienteB;

    let descripcion3 = dataJson.desPacienteC;
    let cie3 = dataJson.ciePacienteC;
    let pre3 = dataJson.prePacienteC;
    let def3 = dataJson.defPacienteC;

    var newJsonData = {
      consulta: { motivo: motivo },
      antecedentes: {
        antecedentespaciente: antecedentespaciente,
        antecedentesfapaciente: antecedentesfapaciente
      },
      problemaActual: { problemaactualpaciente: problemaactualpaciente },
      preConsulta: {
        revactorganospaciente: revactorganospaciente,
        sigsVitYAntropaciente: sigsVitYAntropaciente
      },
      examenFisico: { examFisicoReg: examFisicoReg },
      tratamiento: { tratamiento: tratamiento },
      evolucionYPrescrip: { evolucion: evolucion, prescrip: prescrip },
      namepaciente: namepaciente,
      diagnostic: [
        {
          description: descripcion1,
          cie: cie1,
          pre: pre1,
          def: def1
        },
        {
          description: descripcion2,
          cie: cie2,
          pre: pre2,
          def: def2
        },
        {
          description: descripcion3,
          cie: cie3,
          pre: pre3,
          def: def3
        }
      ]
    };
    var dataPreview = JSON.stringify(newJsonData);
    /// console.log(dataPreview);
    return dataPreview;
  };

  handleSubmit(event) {
    // console.log("El State actual es:" + JSON.stringify(this.state));
    ///alert("El State actual es:" + JSON.stringify(this.state));

    event.preventDefault();
    /* const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} }); */

    let dataJson = JSON.parse(JSON.stringify(this.state));
    //console.log(dataJson);

    var datax = this.buildJsonDataToSend(dataJson);
    this.sendFormMedicinaGeneral(datax);
  }

  handleButtonNext = event => {
    let currentTab = this.state.activeIndex;
    if (currentTab === 7) {
      this.setState({ activeIndex: currentTab });
    } else {
      this.setState({ activeIndex: currentTab + 1 });
    }
  };

  ///state = {  }
  render() {
    return (
      <div>
        <div className="content-section introduction">
          <div className="feature-intro">
            {/* <h1>TabView</h1>
            <p>TabView is a container component to group content with tabs.</p> */}
          </div>
        </div>
        <Form onSubmit={this.handleSubmit}>
          <div className="content-section implementation">
            <TabView
              activeIndex={this.state.activeIndex}
              onTabChange={e => this.setState({ activeIndex: e.index })}
            >
              <TabPanel header="Consulta">
                <Row form="true">
                  <Col sm="12">
                    <MyInput
                      name="motivoConsulta"
                      label="1. Motivo de Consulta"
                      value={this.state.motivoConsulta}
                      onChange={this.handleInputChange}
                      placeholder="Ingrese los motivos de la consulta aquí"
                      rows="6"
                    />
                    {/* <FormGroup>
                      <Label for="motivoConsulta">1. Motivo de Consulta</Label>
                      <Input
                        type="textarea"
                        // model=".consulta"
                        name="motivoConsulta"
                        id="motivoConsulta"
                        rows="6"
                        value={this.state.motivoConsulta}
                        onChange={this.handleInputChange}
                        placeholder="Ingrese los motivos de la consulta aquí"
                      />
                    </FormGroup> */}
                  </Col>
                </Row>
              </TabPanel>
              <TabPanel header="Antecedentes">
                <Row form="true">
                  <Col sm="12">
                    <FormGroup>
                      <Label for="antePersonal">
                        2. Antecedentes Personales
                      </Label>
                      <Input
                        type="textarea"
                        name="antePersonal"
                        id="antePersonal"
                        rows="2"
                        value={this.state.antePersonal}
                        onChange={this.handleInputChange}
                        placeholder="Ingrese los antecedentes aquí"
                      />
                      {/*   <Control.text
                      model=".antecedentespaciente"
                      id="antecedentespaciente"
                      name="antecedentespaciente"
                      placeholder="First Name"
                      className="form-control"
                      value={this.state.antepersonal}
                    /> */}
                      <Label for="anteFamiliares">
                        3. Antecedentes Familiares
                      </Label>
                      <Input
                        type="textarea"
                        name="anteFamiliares"
                        id="anteFamiliares"
                        rows="3"
                        value={this.state.anteFamiliares}
                        onChange={this.handleInputChange}
                        placeholder="Ingrese los antecedentes familiares aquí"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </TabPanel>
              <TabPanel
                header="Problema Actual"
                //leftIcon="pi pi-search"
                //rightIcon="pi pi-check"
              >
                <Row>
                  <Col sm="12">
                    <FormGroup>
                      <Label for="pactualPaciente">
                        4. Enfermedad o Problema Actual
                      </Label>
                      <Input
                        type="textarea"
                        name="pactualPaciente"
                        id="pactualPaciente"
                        rows="6"
                        value={this.state.pactualPaciente}
                        onChange={this.handleInputChange}
                        placeholder="Ingrese la enfermedad o problema actual aquí"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </TabPanel>
              <TabPanel header="Pre-Consulta">
                <Row>
                  <Col sm="12">
                    <FormGroup>
                      <Label for="ractualOrgPac">
                        5. Revision Actual de Organos
                      </Label>
                      <Input
                        type="textarea"
                        name="ractualOrgPac"
                        id="ractualOrgPac"
                        rows="2"
                        value={this.state.ractualOrgPac}
                        onChange={this.handleInputChange}
                        placeholder="Ingrese los antecedentes aquí"
                      />
                      <Label for="svitalesPac">
                        6. Signos Vitales y Antropometría
                      </Label>
                      <Input
                        type="textarea"
                        name="svitalesPac"
                        id="svitalesPac"
                        rows="3"
                        value={this.state.svitalesPac}
                        onChange={this.handleInputChange}
                        placeholder="Ingrese los antecedentes familiares aquí"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </TabPanel>
              <TabPanel header="Examen Físico">
                <Row>
                  <Col sm="12">
                    <FormGroup>
                      <Label for="exfisicoReg">7. Examen Físico Regional</Label>
                      <Input
                        type="textarea"
                        name="exfisicoRegA"
                        id="exfisicoRegA"
                        rows="2"
                        value={this.state.exfisicoRegA}
                        onChange={this.handleInputChange}
                        placeholder="Ingrese los antecedentes aquí"
                      />
                      <br />
                      <Input
                        type="textarea"
                        name="exfisicoRegB"
                        id="exfisicoRegB"
                        rows="3"
                        value={this.state.exfisicoRegB}
                        onChange={this.handleInputChange}
                        placeholder="Ingrese los antecedentes familiares aquí"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </TabPanel>
              <TabPanel header="Diagnóstico">
                <Row>
                  <Col sm="12">
                    <FormGroup>
                      <Label for="diagnostiPac">8. Diagnóstico</Label>
                      <Row>
                        <Col sm="1">
                          <br />
                          <label>1</label>
                        </Col>
                        <Col sm="4">
                          <Label for="desPacienteA">Descripción</Label>
                          <Input
                            type="text"
                            name="desPacienteA"
                            id="desPacienteA"
                            rows="3"
                            value={this.state.desPacienteA}
                            onChange={this.handleInputChange}
                            placeholder=""
                          />
                        </Col>
                        <Col sm="3">
                          <Label for="ciePacienteA">CIE</Label>
                          <Input
                            type="text"
                            name="ciePacienteA"
                            id="ciePacienteA"
                            rows="3"
                            value={this.state.ciePacienteA}
                            onChange={this.handleInputChange}
                            placeholder=""
                          />
                        </Col>
                        <Col sm="2">
                          <Label for="prePacienteA">PRE</Label>
                          <Input
                            type="text"
                            name="prePacienteA"
                            id="prePacienteA"
                            rows="3"
                            value={this.state.prePacienteA}
                            onChange={this.handleInputChange}
                            placeholder=""
                          />
                        </Col>
                        <Col sm="2">
                          <Label for="defPacienteA">DEF</Label>
                          <Input
                            type="text"
                            name="defPacienteA"
                            id="defPacienteA"
                            rows="3"
                            value={this.state.defPacienteA}
                            onChange={this.handleInputChange}
                            placeholder=""
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col sm="1">
                          <label>2</label>
                        </Col>
                        <Col sm="4">
                          <Input
                            type="text"
                            name="desPacienteB"
                            id="desPacienteB"
                            rows="3"
                            value={this.state.desPacienteB}
                            onChange={this.handleInputChange}
                            placeholder=""
                          />
                        </Col>
                        <Col sm="3">
                          <Input
                            type="text"
                            name="ciePacienteB"
                            id="ciePacienteB"
                            rows="3"
                            value={this.state.ciePacienteB}
                            onChange={this.handleInputChange}
                            placeholder=""
                          />
                        </Col>
                        <Col sm="2">
                          <Input
                            type="text"
                            name="prePacienteB"
                            id="prePacienteB"
                            rows="3"
                            value={this.state.prePacienteB}
                            onChange={this.handleInputChange}
                            placeholder=""
                          />
                        </Col>
                        <Col sm="2">
                          <Input
                            type="text"
                            name="defPacienteB"
                            id="defPacienteB"
                            rows="3"
                            value={this.state.defPacienteB}
                            onChange={this.handleInputChange}
                            placeholder=""
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col sm="1">
                          <label>3</label>
                        </Col>
                        <Col sm="4">
                          <Input
                            type="text"
                            name="desPacienteC"
                            id="desPacienteC"
                            rows="3"
                            value={this.state.desPacienteC}
                            onChange={this.handleInputChange}
                            placeholder=""
                          />
                        </Col>
                        <Col sm="3">
                          <Input
                            type="text"
                            name="ciePacienteC"
                            id="ciePacienteC"
                            rows="3"
                            value={this.state.ciePacienteC}
                            onChange={this.handleInputChange}
                            placeholder=""
                          />
                        </Col>
                        <Col sm="2">
                          <Input
                            type="text"
                            name="prePacienteC"
                            id="prePacienteC"
                            rows="3"
                            value={this.state.prePacienteC}
                            onChange={this.handleInputChange}
                            placeholder=""
                          />
                        </Col>
                        <Col sm="2">
                          <Input
                            type="text"
                            name="defPacienteC"
                            id="defPacienteC"
                            rows="3"
                            value={this.state.defPacienteC}
                            onChange={this.handleInputChange}
                            placeholder=""
                          />
                        </Col>
                      </Row>
                    </FormGroup>
                  </Col>
                </Row>
              </TabPanel>
              <TabPanel header="Tratamiento">
                <Row>
                  <Col sm="12">
                    <FormGroup>
                      <Label for="trataPac">9. Tratamiento</Label>
                      <Input
                        type="textarea"
                        name="trataPac"
                        id="trataPac"
                        rows="8"
                        value={this.state.trataPac}
                        onChange={this.handleInputChange}
                        placeholder="Ingrese el tratamiento"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </TabPanel>
              <TabPanel header="Evolución y Prescripción">
                <Row>
                  <Col sm="6">
                    <FormGroup>
                      <Label for="evoluPac">Evolución:</Label>
                      <Input
                        type="textarea"
                        name="evoluPac"
                        id="evoluPac"
                        rows="6"
                        value={this.state.evoluPac}
                        onChange={this.handleInputChange}
                        placeholder="Ingrese los detalles de la evolución"
                      />
                    </FormGroup>
                  </Col>
                  <Col sm="6">
                    <FormGroup>
                      <Label for="prescripPac">Prescripción:</Label>
                      <Input
                        type="textarea"
                        name="prescripPac"
                        id="prescripPac"
                        rows="6"
                        value={this.state.prescripPac}
                        onChange={this.handleInputChange}
                        placeholder="Ingrese la prescripción"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </TabPanel>
            </TabView>
            <div>
              <Button type="submit" color="primary">
                Guardar
              </Button>
              <Button
                onClick={this.handleButtonNext}
                color="link"
                is-outlined="true"
              >
                Siguiente
              </Button>
            </div>
          </div>
        </Form>
      </div>
    );
  }
}

export default TabChild;
