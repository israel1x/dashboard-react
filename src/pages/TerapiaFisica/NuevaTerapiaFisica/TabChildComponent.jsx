import axios from "axios";
import moment from "moment";
import React, { Component } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { SingleDatePicker } from "react-dates";
import { Button, Col, FormGroup, Input, Label, Row } from "reactstrap";
import MyAutoCompleteField from "./MyAutoCompleteField";

const apiEndpoint =
  "http://ec2-34-216-62-59.us-west-2.compute.amazonaws.com:5000/medicalcards/";
const endPointCodeCie =
  "http://ec2-34-216-62-59.us-west-2.compute.amazonaws.com:5000/cies/";
class TabChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hipertension: false,
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

      antecedentes: {
        personales: {
          hipertensionArterial: false,
          diabetes: false,
          colesterolAlto: false,
          osteoartritis: false,
          acv: false,
          infarto: false,
          arritmias: false,
          cancer: false,
          epatitis: false,
          tuberculosis: false,
          transfuciones: false,
          accidentes: false,
          otros: false
        },
        familiares: {
          hipertensionArterial: false,
          diabetes: false,
          infartoDelMiocardio: false,
          demencia: false,
          cancer: false,
          otros: false
        },
        descripAntYOtros: "String"
      },

      date: moment(),
      startDate: moment(),
      endDate: moment(),
      dateRangeFocusedInput: null,

      //VARIABLES PARA LAS TABS
      activeTab: 1,

      //VARIABLES DEL AUTOCOMPLETE
      descrip: "",
      dataCodes: [],
      dataCodes2: [
        { code: "A00", descrip: "Colera" },
        { code: "A00", descrip: "Colera con tA" },
        { code: "A00", descrip: "Colera con C" },
        { code: "A00", descrip: "Colera con b" }
      ]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    //this.handleChecked = this.handleChecked.bind(this);

    this.MyOnChangeAutoComplete = this.MyOnChangeAutoComplete.bind(this);
  }

  componentDidMount() {
    axios.get(endPointCodeCie).then(response => {
      this.setState({ dataCodes: response.data });
      console.log(response.data);
    });
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
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  /* handleChecked(event) {
    const target = event.target;
    const status = target.checked;
    const name = target.name;

    this.setState({
      [name]: status
    });
  } */

  validate = () => {};

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
    console.log(dataJson);

    // var datax = this.buildJsonDataToSend(dataJson);
    // this.sendFormMedicinaGeneral(datax);
  }

  handleButtonNextTab = event => {
    let currentTab = this.state.activeTab;
    if (currentTab === 7) {
      this.setState({ activeTab: currentTab });
    } else {
      this.setState({ activeTab: currentTab + 1 });
    }
  };

  MyOnChangeAutoComplete = (selectedEnfermedad, stateAndHelpers) => {
    const element = document.querySelector(`#${stateAndHelpers.id}-input`);
    //console.log(element.name);
    //console.log(`${selectedEnfermedad.descrip}`);
    this.setState({
      [element.name]: selectedEnfermedad.code + " " + selectedEnfermedad.descrip
    });
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
              id="tab-with-icons"
              activeKey={this.state.activeTab}
              onSelect={activeTab => this.setState({ activeTab })}
              // onTabChange={e => this.setState({ activeIndex: e.index })}
            >
              <Tab eventKey={1} title={<span>Antecedentes</span>}>
                <Row>
                  <Col sm="12">
                    <FormGroup>
                      <fieldset>
                        <label
                          htmlFor="antePersonal"
                          className="col-sm-2 control-label"
                        >
                          Antecedentes Personales:
                        </label>

                        <div className="col-sm-3 col-sm-offset-1 checkbox-group">
                          <div>
                            <label>
                              <Input
                                type="checkbox"
                                name="hipertension"
                                value={this.state.hipertension}
                                onChange={this.handleInputChange}
                              />{" "}
                              Hipertension Arterial
                            </label>
                          </div>
                          <div>
                            <label>
                              <Input
                                type="checkbox"
                                name="diabestes"
                                value={this.state.diabetes}
                                onChange={this.handleInputChange}
                              />{" "}
                              Diabetes
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
                <div className="content">
                  <div className="form-group">
                    <label className="control-label">
                      Reaciones adversas a medicamentos:{" "}
                    </label>
                    <label className="control-label">
                      {" "}
                      SI ( <Input type="checkbox" name="SI" /> )
                    </label>
                    <label className="control-label">
                      {" "}
                      NO ( <Input type="checkbox" name="NO" /> )
                    </label>
                  </div>
                  <div className="form-group">
                    <label className="control-label">Otros:</label>
                    <div className="">
                      <Input
                        type="text"
                        name="otrosMedicamentos"
                        id="otrosMedicamentos"
                        value={this.state.otrosMedicamnetos} //ppppppp
                        onChange={this.handleInputChange}
                        placeholder="Otros medicamentos"
                      />
                    </div>
                  </div>
                </div>
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
                  <div className="form-horizontal">
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
                          type="number"
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
                          type="textarea"
                          name="anEvolucion"
                          id="anEvolucion"
                          rows="3"
                          value={this.state.anEvolucion} //ppppppp
                          onChange={this.handleInputChange}
                          placeholder="Ingrese la evolución"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey={5} title={<span>Exploración Física</span>}>
                <div className="content">
                  <div className="form-group">
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
                  </div>

                  <div className="form-froup">
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
                  </div>

                  <div className="form-group">
                    <MyAutoCompleteField
                      items={this.state.dataCodes}
                      onChange={this.MyOnChangeAutoComplete}
                      id="descrip"
                      label="Código CIE10:"
                      name="descrip"
                      placeholder="Enfermedad"
                    />
                  </div>
                </div>
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
                onClick={this.handleButtonNextTab}
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
