import React, { Component } from "react";
import axios from "axios";
import MyInput from "./Myinput";
import { TabView, TabPanel } from "primereact/tabview";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import renderField from "components/FormInputs/renderField";

import { Tabs, Tab, ControlLabel, Checkbox } from "react-bootstrap";
import { SingleDatePicker, DateRangePicker } from "react-dates";
import moment from "moment";

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
      prescripPac: "",
      // diagnosticoPac: ""

      /*  errors: {
        desPacienteA: "No a ingresado el diagnóstico del paciente"
      } */

      date: moment(),
      startDate: moment(),
      endDate: moment(),
      dateRangeFocusedInput: null
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

  render() {
    let { date } = this.state;
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
              <Tab eventKey={1} title={<span>Antecedentes</span>}>
                <Row form="true">
                  <Col sm="12">
                    <FormGroup>
                      <fieldset>
                        <label
                          for="antePersonal"
                          className="col-sm-2 control-label"
                        >
                          Antecedentes Personales:
                        </label>

                        <div className="col-sm-3 col-sm-offset-1 checkbox-group">
                          <div>
                            <label>
                              <Input type="checkbox" name="SI" /> Hipertension
                              Arterial
                            </label>
                          </div>
                          <div>
                            <label>
                              <Input type="checkbox" name="SI" /> Diabetes
                            </label>
                          </div>
                          <div>
                            <label>
                              <Input type="checkbox" name="SI" /> Colesterol
                              Alto
                            </label>
                          </div>
                          <div>
                            <label>
                              <Input type="checkbox" name="SI" /> Osteoartritis
                            </label>
                          </div>
                          <div>
                            <label>
                              <Input type="checkbox" name="SI" /> ACV
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-3 checkbox-group">
                          <div>
                            <label>
                              <Input type="checkbox" name="SI" /> Infarto
                            </label>
                          </div>
                          <div>
                            <label>
                              <Input type="checkbox" name="SI" /> Arritmias
                            </label>
                          </div>
                          <div>
                            <label>
                              <Input type="checkbox" name="SI" /> Cancer
                            </label>
                          </div>
                          <div>
                            <label>
                              <Input type="checkbox" name="SI" /> Hepatitis
                            </label>
                          </div>
                          <div>
                            <label>
                              <Input type="checkbox" name="SI" /> Tuberculosis
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-3 checkbox-group">
                          <div>
                            <label>
                              <Input type="checkbox" name="SI" /> Transfuciones
                            </label>
                          </div>
                          <div>
                            <label>
                              <Input type="checkbox" name="SI" /> Accidentes
                            </label>
                          </div>
                          <div>
                            <label>
                              <Input type="checkbox" name="SI" /> Otros
                            </label>
                          </div>
                        </div>
                      </fieldset>
                      <div>
                        <fieldset>
                          <legend />
                          <label className="col-sm-2">
                            Antecedentes Familiares:
                          </label>
                          <div className="col-sm-3 col-sm-offset-1 checkbox-group">
                            <div>
                              <label>
                                <Input type="checkbox" name="SI" />
                                Hipertension Arterial
                              </label>
                            </div>
                            <div>
                              <label>
                                <Input type="checkbox" name="SI" /> Diabetes
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-3 checkbox-group">
                            <div>
                              <label>
                                <Input type="checkbox" name="SI" /> Infarto del
                                Miocardio
                              </label>
                            </div>
                            <div>
                              <label>
                                <Input type="checkbox" name="SI" /> Demencia
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-3 checkbox-group">
                            <div>
                              <label>
                                <Input type="checkbox" name="SI" /> Cancer
                              </label>
                            </div>
                            <div>
                              <label>
                                <Input type="checkbox" name="SI" /> Otros
                              </label>
                            </div>
                          </div>
                        </fieldset>
                      </div>
                      <fieldset>
                        <legend />
                        <Label for="anteDescripcionOtros">
                          Descripción de Antecedentes y Otros
                        </Label>
                        <Input
                          type="textarea"
                          name="anteDescripcionOtros"
                          id="anteDescripcionOtros"
                          rows="2"
                          value={this.state.anteDescripcionOtros} //pppppppppppppp
                          onChange={this.handleInputChange} //ppppppppppp
                          placeholder="Ingrese la descripción aquí"
                        />
                      </fieldset>
                    </FormGroup>
                  </Col>
                </Row>
              </Tab>

              <Tab eventKey={2} title={<span>Medicamentos</span>}>
                <Row>
                  <Col sm="6">
                    <FormGroup>
                      <Label for="medicamentoUtil">Utilización:</Label>
                      <Input
                        type="textarea"
                        name="medicamentoUtil"
                        id="medicamentoUtil"
                        rows="6"
                        value={this.state.medicamentoUtil}
                        onChange={this.handleInputChange}
                        placeholder="Ingrese los detalles ..."
                      />
                    </FormGroup>
                  </Col>
                  <Col sm="6">
                    <FormGroup>
                      <Label for="medicamentoName">Nombre:</Label>
                      <Input
                        type="textarea"
                        name="medicamentoName"
                        id="medicamentoName"
                        rows="6"
                        value={this.state.medicamentoName}
                        onChange={this.handleInputChange}
                        placeholder="Ingrese el nombre de los medicamentos"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <FormGroup>
                    <ControlLabel>
                      Reaciones adversas a medicamentos:
                    </ControlLabel>
                    <label>
                      {" "}
                      SI(
                      <Input type="checkbox" name="SI" />)
                    </label>
                    <ControlLabel>
                      {" "}
                      NO(
                      <Input type="checkbox" name="NO" />)
                    </ControlLabel>
                  </FormGroup>
                </Row>
              </Tab>
              <Tab eventKey={3} title={<span>H. Problema Funcional</span>}>
                <Row>
                  <Col sm="12">
                    <FormGroup>
                      <Label for="problemaFuncionalH">Descripción</Label>
                      <Input
                        type="textarea"
                        name="problemaFuncionalH"
                        id="problemaFuncionalH"
                        rows="6"
                        value={this.state.problemaFuncionalH}
                        onChange={this.handleInputChange}
                        placeholder="Ingrese la descripción"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey={4} title={<span>Anamnesis del Dolor</span>}>
                <div className="content">
                  <form className="form-horizontal">
                    <div className="form-group">
                      <label className="control-label col-md-2">Duración</label>
                      <div className="col-md-5">
                        <Input
                          type="text"
                          name="dolorDuracion"
                          id="dolorDuracion"
                          value={this.state.dolorDuracion} //ppppppp
                          onChange={this.handleInputChange}
                          placeholder="Ingrese la duración"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-md-2">
                        Escala de Intensidad
                      </label>
                      <div className="col-md-5">
                        <Input
                          type="text"
                          name="escalaIntensidad"
                          id="escalaIntensidad"
                          value={this.state.escalaIntensidad} //ppppppp
                          onChange={this.handleInputChange}
                          placeholder="Ingrese la escala de intensidad"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-md-2">
                        Frecuencia
                      </label>
                      <div className="col-md-5">
                        <Input
                          type="text"
                          name="anFrecuencia"
                          id="anFrecuencia"
                          value={this.state.anFrecuencia} //ppppppp
                          onChange={this.handleInputChange}
                          placeholder="Ingrese la frecuencia"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-md-2">Horario</label>
                      <div className="col-md-5">
                        <Input
                          type="text"
                          name="anHorario"
                          id="anHorario"
                          value={this.state.anHorario} //ppppppp
                          onChange={this.handleInputChange}
                          placeholder="Ingrese el horario"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-md-2">
                        Evolución
                      </label>
                      <div className="col-md-5">
                        <Input
                          type="text"
                          name="anEvolucion"
                          id="anEvolucion"
                          value={this.state.anEvolucion} //ppppppp
                          onChange={this.handleInputChange}
                          placeholder="Ingrese la evolución"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </Tab>
              <Tab eventKey={5} title={<span>Exploración Física</span>}>
                <Row>
                  <Col sm="12">
                    <FormGroup>
                      <Label for="datosADolor">Observaciones:</Label>
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
                      <Label for="datosADolor">Impresión Diagnostica:</Label>
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
              <Tab eventKey={6} title={<span>Tratamiento</span>}>
                <div>
                  <fieldset>
                    <label className="col-sm-2">Medios Químicos:</label>
                    <div className="col-sm-3 col-sm-offset-1 checkbox-group">
                      <div>
                        <label>
                          <Input type="checkbox" name="SI" /> Ultrasonido
                        </label>
                      </div>
                      <div>
                        <label>
                          <Input type="checkbox" name="SI" /> Magnetoterapia
                        </label>
                      </div>
                      <div>
                        <label>
                          <Input type="checkbox" name="SI" /> Ondas de Choque
                        </label>
                      </div>
                      <div>
                        <label>
                          <Input type="checkbox" name="SI" /> Parafina
                        </label>
                      </div>
                    </div>
                    <div className="col-sm-3 checkbox-group">
                      <div>
                        <label>
                          <Input type="checkbox" name="SI" /> Electro
                          Estimulación
                        </label>
                      </div>
                      <div>
                        <label>
                          <Input type="checkbox" name="SI" /> Laser
                        </label>
                      </div>
                      <div>
                        <label>
                          <Input type="checkbox" name="SI" /> Nebulización
                        </label>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend />
                    <label className="col-sm-2">Medios Físicos:</label>
                    <div className="col-sm-3 col-sm-offset-1 checkbox-group">
                      <div>
                        <label>
                          <Input type="checkbox" name="SI" /> Compresas Químicas
                        </label>
                      </div>
                      <div>
                        <label>
                          <Input type="checkbox" name="SI" /> Masoterapia
                        </label>
                      </div>
                    </div>
                    <div className="col-sm-3 checkbox-group">
                      <div>
                        <label>
                          <Input type="checkbox" name="SI" /> Crioterapia
                        </label>
                      </div>
                      <div>
                        <label>
                          <Input type="checkbox" name="SI" /> T.O.
                        </label>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend />
                    <label className="col-sm-2">Ejercicios Terapeuticos:</label>
                    <div className="col-sm-3 col-sm-offset-1 checkbox-group">
                      <div>
                        <label>
                          <Input type="checkbox" name="SI" /> Activos
                        </label>
                      </div>
                      <div>
                        <label>
                          <Input type="checkbox" name="SI" /> Pasivos
                        </label>
                      </div>
                    </div>
                    <div className="col-sm-3 checkbox-group">
                      <div>
                        <label>
                          <Input type="checkbox" name="SI" /> Activos Asistidos
                        </label>
                      </div>
                      <div>
                        <label>
                          <Input type="checkbox" name="SI" /> Activos Resistidos
                        </label>
                      </div>
                    </div>
                  </fieldset>
                  <div>
                    <fieldset>
                      <legend />
                      <Label for="notaTratamiento">Nota:</Label>
                      <Input
                        type="textarea"
                        name="notaTratamiento"
                        id="notaTratamiento"
                        rows="1"
                        value={this.state.notaTratamiento} //pppppppppppppp
                        onChange={this.handleInputChange} //ppppppppppp
                        placeholder="Ingrese su mensaje"
                      />
                    </fieldset>
                  </div>
                </div>
              </Tab>
              <Tab eventKey={7} title={<span>Seguimiento</span>}>
                <div className="row">
                  <div className="col-md-2">
                    <Label for="evoluPac">Fecha:</Label>
                    <div className="form-group">
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
                  <div className="col-md-5">
                    <FormGroup>
                      <Label for="evoluPac">Tratamiento:</Label>
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
                  </div>
                  <div className="col-md-5">
                    <FormGroup>
                      <Label for="prescripPac">Indicaciones:</Label>
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
                  </div>
                </div>
              </Tab>
            </Tabs>
            <div>
              <Button type="submit" className="btn btn-info btn-fill btn-wd">
                Guardar
              </Button>
              <Button
                className="btn btn-default btn-fill btn-wd"
                is-outlined="true"
                onClick={this.handleButtonNext}
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
