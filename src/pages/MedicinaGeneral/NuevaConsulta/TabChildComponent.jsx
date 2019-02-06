/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { Component } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { Button, Col, FormGroup, Input, Label, Row } from "reactstrap";
import MyInput from "./Myinput";

const apiEndpoint =
  "http://ec2-34-216-62-59.us-west-2.compute.amazonaws.com:5000/medicalcards/";

class TabChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      defaultActiveKey: 0,
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

  /* schema = {
    desPacienteA: Joi.string().required()
  };
 */
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  validate = () => {
    /* const error = Joi.validate(this.state.desPacienteA, this.schema, {
      abortEarly: false
    });
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
 */
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
          <div className="feature-intro" />
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="content-section implementation">
            <Tabs
              defaultActiveKey={1}
              id="tab-with-icons"
              activeIndex={this.state.activeIndex}
              onTabChange={e => this.setState({ activeIndex: e.index })}
            >
              <Tab eventKey={1} title={<span>Consulta</span>}>
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
                  </Col>
                </Row>
              </Tab>

              <Tab eventKey={2} title={<span>Antecedentes</span>}>
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
              </Tab>

              <Tab eventKey={3} title={<span>Problema Actual</span>}>
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
              </Tab>
              <Tab eventKey={4} title={<span>Pre-Consulta</span>}>
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
              </Tab>
              <Tab eventKey={5} title={<span>Examen Físico</span>}>
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
              </Tab>
              <Tab eventKey={6} title={<span>Diagnóstico</span>}>
                <Row>
                  <Col sm="12">
                    <FormGroup>
                      <Label for="diagnostiPac">8. Diagnóstico</Label>
                      <Row>
                        <div className="col-sm-9">
                          <Label for="desPacienteA">Descripción</Label>
                        </div>
                        <div className="col-sm-1">
                          <Label for="ciePacienteA">CIE</Label>
                        </div>
                        <div className="col-sm-1">
                          <Label for="prePacienteA">PRE</Label>
                        </div>
                        <div className="col-sm-1">
                          <Label for="defPacienteA">DEF</Label>
                        </div>
                      </Row>
                      <Row>
                        <div className="col-sm-1">
                          <label>1</label>
                        </div>
                        <div className="col-sm-8">
                          <Input
                            type="text"
                            name="desPaciente1"
                            id="desPaciente1"
                            rows="3"
                            value={this.state.desPaciente1}
                            onChange={this.handleInputChange}
                            placeholder=""
                          />
                        </div>
                        <div className="col-sm-1">
                          <div>
                            <label>
                              <Input type="checkbox" name="SI" />
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-1">
                          <label>
                            <Input type="checkbox" name="SI" />
                          </label>
                        </div>
                        <div className="col-sm-1">
                          <label>
                            <Input type="checkbox" name="SI" />
                          </label>
                        </div>
                      </Row>
                      <Row>
                        <div className="col-sm-1">
                          <label>2</label>
                        </div>
                        <div className="col-sm-8">
                          <Input
                            type="text"
                            name="desPaciente2"
                            id="desPaciente2"
                            rows="3"
                            value={this.state.desPaciente2}
                            onChange={this.handleInputChange}
                            placeholder=""
                          />
                        </div>
                        <div className="col-sm-1">
                          <div>
                            <label>
                              <Input type="checkbox" name="SI" />
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-1">
                          <label>
                            <Input type="checkbox" name="SI" />
                          </label>
                        </div>
                        <div className="col-sm-1">
                          <label>
                            <Input type="checkbox" name="SI" />
                          </label>
                        </div>
                      </Row>
                      <Row>
                        <div className="col-sm-1">
                          <label>3</label>
                        </div>
                        <div className="col-sm-8">
                          <Input
                            type="text"
                            name="desPaciente3"
                            id="desPaciente3"
                            rows="3"
                            value={this.state.desPaciente3}
                            onChange={this.handleInputChange}
                            placeholder=""
                          />
                        </div>
                        <div className="col-sm-1">
                          <div>
                            <label>
                              <Input type="checkbox" name="SI" />
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-1">
                          <label>
                            <Input type="checkbox" name="SI" />
                          </label>
                        </div>
                        <div className="col-sm-1">
                          <label>
                            <Input type="checkbox" name="SI" />
                          </label>
                        </div>
                      </Row>
                    </FormGroup>
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey={7} title={<span>Tratamiento</span>}>
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
              </Tab>
              <Tab eventKey={8} title={<span>Evolución y Prescripción</span>}>
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
              </Tab>
            </Tabs>
            <div>
              <Button type="submit" className="btn btn-info btn-fill btn-wd">
                Guardar
              </Button>
              <Button
                onClick={this.handleButtonNext}
                className="btn btn-default btn-fill btn-wd"
                is-outlined="true"
              >
                Siguiente{" "}
                <span className="btn-label btn-label-right">
                  <i className="fa fa-arrow-right" />
                </span>
              </Button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default TabChild;
