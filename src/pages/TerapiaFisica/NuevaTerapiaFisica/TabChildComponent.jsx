import axios from "axios";
import Joi from "joi-browser";
import moment from "moment";
import React, { Component } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { SingleDatePicker } from "react-dates";
import { Button, Col, FormGroup, Input, Label, Row } from "reactstrap";
import MyAutoCompleteField from "./MyAutoCompleteField";

const apiEndpoint =
  "http://ec2-34-216-62-59.us-west-2.compute.amazonaws.com:5000/medicalcards/";

const apiEndpointTerapiaFisica =
  "http://ec2-34-216-62-59.us-west-2.compute.amazonaws.com:5000/tfisicamedicalcards/";

/* const endPointCodeCie =
  "http://ec2-34-216-62-59.us-west-2.compute.amazonaws.com:5000/cies/"; */

const endPointCodeCie = "http://192.168.1.10:5000/cies/";
class TabChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hipertension: false,
      problemaFuncionalH: "",

      //varibles del componente buscardatos
      idPacienteTf: "",

      idpaciente: "",
      fechahora: "",

      cmotivo: "",

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
      otros: false,

      fhipertensionArterial: false,
      fdiabetes: false,
      finfartoDelMiocardio: false,
      fdemencia: false,
      fcancer: false,
      fotros: false,

      descripAntYOtros: "",

      mutilizacion: "",
      mnombre: "",

      mrresp: false,
      mrcual: "",

      pfdescription: "",

      adduracion: "",
      adescalaIntensidad: "",
      adfrecuencia: "",
      adhorario: "",
      adevolucion: "",

      efobservaciones: "",
      efimpDiagnostica: "",

      ciecode: "",
      ciedescrip: "",

      mqultrasonido: false,
      mqelecEstim: false,
      mqmagnetoTerapia: false,
      mqlaser: false,
      mqnebulizacion: false,
      mqondasChoque: false,
      mqparafina: false,

      mfcompresQuimicas: "",
      mfcrioterapia: "",
      mfmasoterapai: "",
      mfto: "",

      etactivos: false,
      etpasivos: false,
      etactivosAsistidos: false,
      etActivosResistidos: false,

      nota: "",

      sgfecha: "",
      sgtratamiento: "",
      sgindicaciones: "",

      date: moment(),
      startDate: moment(),
      endDate: moment(),
      dateRangeFocusedInput: null,

      //SETEAR EL FORMULARIO CON DATOS
      antecedentesdescripAntYOtros: "",
      jsonDataForFechaIdMongoOnTab: [],
      banderaTab: 0,
      banderaTabClean: 0,

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
      ],

      // VARIABLES PARA LOS ERRORES
      errors: {
        descripAntYOtros: "La Descripción es requerida "
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    //this.handleChecked = this.handleChecked.bind(this);

    this.MyOnChangeAutoComplete = this.MyOnChangeAutoComplete.bind(this);
  }

  ///
  handleListHistoryTF = () => {
    console.log("traigo lista de TF desde el select buscar historial");
    // USE .filter()  para obtener los datos de la fecha seleccionada
    //
  };

  // JOI VALIDATION: schema and validateTF
  schema = {
    descripAntYOtros: Joi.string(),
    problemaFuncionalH: Joi.string()
  };

  validateTF = () => {
    const result = Joi.validate(this.state.descripAntYOtros, this.schema);
    console.log(result);
  };

  componentDidMount() {
    console.log("props tabchild", this.props);

    // LLAMADA PARA LOS CODIGOS CIE10
    /* axios.get(endPointCodeCie).then(response => {
      this.setState({ dataCodes: response.data });
      console.log(response.data);
    }); */

    //this.getJsonHistorialFecha();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  buildJsonDataToSend = dataJson => {
    /* var dataMask =
      '{ "consulta" : { "motivo": ""}, "antecedentes": { "antecedentespaciente": "", "antecedentesfapaciente": "" }, "problemaActual": { "problemaactualpaciente": "" }, "preConsulta": {"revactorganospaciente": "", "sigsVitYAntropaciente":""} ,"examenFisico": {"examFisicoReg": ""}, "tratamiento": { "tratamiento":""}, "evolucionYPrescrip": { "evolucion": "", "prescrip":""}, "namepaciente":"", "diagnostic":[ {"description": "", "cie":"","pre":"","def":""},{"description": "", "cie":"","pre":"","def":""},{"description": "", "cie":"","pre":"","def":""}] } ';
 */
    let namepaciente = "Paciente Prueba Israel";
    let idpaciente = "007";
    //ANTECEDENTES
    // personales
    let hipertensionArterial = dataJson.hipertensionArterial;
    let diabetes = dataJson.diabetes;
    let pcolesterolAlto = dataJson.antecedentespersonalescolesterolAlto;
    let parttritis = dataJson.antecedentespersonalesosteoartritis;
    let pacv = dataJson.antecedentespersonalesacv;
    let pinfarto = dataJson.antecedentespersonalesinfarto;
    let parritmia = dataJson.antecedentespersonalesarritmias;
    let pcancer = dataJson.antecedentespersonalescancer;
    let phepatitis = dataJson.antecedentespersonaleshepatitis;
    let ptuberculosis = dataJson.antecedentespersonalestuberculosis;
    let ptransfuciones = dataJson.antecedentespersonalestransfuciones;
    let paccidentes = dataJson.antecedentespersonalesaccidentes;
    let potros = dataJson.ntecedentespersonalesotros;
    //familiares
    let fharterial = dataJson.antecedentesfamiliareshipertensionArterial;
    let fdiabetes = dataJson.antecedentesfamiliaresdiabetes;
    let fmiocardio = dataJson.antecedentesfamiliaresinfartoDelMiocardio;
    let fdemencia = dataJson.antecedentesfamiliaresdemencia;
    let fcancer = dataJson.antecedentesfamiliarescancer;
    let fotros = dataJson.antecedentesfamiliaresotros;
    let fdotros = dataJson.antecedentesdescripAntYOtros;
    // medicamnetos
    let mutilizacion = dataJson.medUsoFrecutilizacion;
    let mnombre = dataJson.medUsoFrecnombre;
    let mdsi = dataJson.SIMedUseFor;
    let mdno = dataJson.NOMedUseFor;
    let mdcual = dataJson.estricAMediccual;
    // h. problema funcional
    let hpfdescrip = dataJson.istProblemFuncdescription;
    // anamesis del dolor
    let adduracion = dataJson.anamesisDolorduracion;
    let adintesidad = dataJson.anamesisDolorescalaIntensidad;
    let adfrecuencia = dataJson.anamesisDolorfrecuencia;
    let adhorario = dataJson.anamesisDolorhorario;
    let adrevolucion = dataJson.anamesisDolorevolucion;
    // exploracion fisica
    let exobservacion = dataJson.exploFisicaobservaciones;
    let eximpDiag = dataJson.exploFisicaimpDiagnostica;
    let excie = dataJson.descrip;
    // tratamiento
    // quimicos
    let tultrasonido = dataJson.mquimicosultrasonido;
    let telecEstim = dataJson.mquimicoselectroEstim;
    let tmagnetoTerapia = dataJson.mquimicosmagnetoterapia;
    let tlaser = dataJson.mquimicosLaser;
    let tnebulizacion = dataJson.mquimicosnebulizacion;
    let tondasChoque = dataJson.mquimicosondasChoque;
    let tparafina = dataJson.mquimicosparafina;
    //fisicos
    let fcompresQuimicas = dataJson.mfisicoscompresQuimicas;
    let fcrioterapia = dataJson.mfisicoscrioterapia;
    let fmasoterapai = dataJson.mfisicosmasoterapia;
    let fto = dataJson.mfisicosto;
    // ejercicios terapeuticos
    let ejactivos = dataJson.ejerTerapeuticosactivos;
    let ejpasivos = dataJson.ejerTerapeuticospasivos;
    let ejactivosAsistidos = dataJson.ejerTerapeuticosactivosAsistidos;
    let ejActivosResistidos = dataJson.ejerTerapeuticosActivosResistidos;
    let ejnota = dataJson.ejerTerapeuticosnota;
    //SEGUIMIENTO
    let sefecha = dataJson.date;
    let setratamiento = dataJson.seguimientotratamiento;
    let seindicaciones = dataJson.seguimientoindicaciones;

    var newJsonData = {
      idpaciente: idpaciente,
      antecedentes: {
        personales: {
          hipertensionArterial: hipertensionArterial,
          diabetes: diabetes,
          colesterolAlto: pcolesterolAlto,
          osteoartritis: parttritis,
          acv: pacv,
          infarto: pinfarto,
          arritmias: parritmia,
          cancer: pcancer,
          epatitis: phepatitis,
          tuberculosis: ptuberculosis,
          transfuciones: ptransfuciones,
          accidentes: paccidentes,
          otros: potros
        },
        familiares: {
          hipertensionArterial: fharterial,
          diabetes: fdiabetes,
          infartoDelMiocardio: fmiocardio,
          demencia: fdemencia,
          cancer: fcancer,
          otros: fotros
        },
        descripAntYOtros: fdotros
      },
      medUsoFrec: {
        utilizacion: mutilizacion,
        nombre: mnombre,
        restricAMedic: {
          resp: mdsi ? mdsi : mdno,
          cual: mdcual
        }
      },
      // H problema funcional
      histProblemFunc: {
        description: hpfdescrip
      },
      anamesisDolor: {
        duracion: adduracion,
        escalaIntensidad: adintesidad,
        frecuencia: adfrecuencia,
        horario: adhorario,
        evolucion: adrevolucion
      },
      // exploracion fisica
      exploFisica: {
        observaciones: exobservacion,
        impDiagnostica: eximpDiag,
        cie: {
          code: excie,
          descrip: excie
        }
      },
      tfisioterap: {
        mquimicos: {
          ultrasonido: tultrasonido,
          elecEstim: telecEstim,
          magnetoTerapia: tmagnetoTerapia,
          laser: tlaser,
          nebulizacion: tnebulizacion,
          ondasChoque: tondasChoque,
          parafina: tparafina
        },
        mfisicos: {
          compresQuimicas: fcompresQuimicas,
          crioterapia: fcrioterapia,
          masoterapai: fmasoterapai,
          to: fto
        },
        ejerTerapeuticos: {
          activos: ejactivos,
          pasivos: ejpasivos,
          activosAsistidos: ejactivosAsistidos,
          ActivosResistidos: ejActivosResistidos
        },
        nota: ejnota
      },
      seguimiento: [
        {
          fecha: sefecha,
          tratamiento: setratamiento,
          indicaciones: seindicaciones
        }
      ]
    };

    var dataPreview = JSON.stringify(newJsonData);
    console.log(dataPreview);
    return dataPreview;
  };

  validate = () => {};

  async sendFormTerapiaFisica(obj) {
    //console.log(obj);
    var jsonObjt = JSON.parse(obj);
    //console.log(jsonObjt);
    const data = await axios.post(apiEndpointTerapiaFisica, jsonObjt);
    console.log(data);
  }

  handleSubmit(event) {
    // console.log("El State actual es:" + JSON.stringify(this.state));
    ///alert("El State actual es:" + JSON.stringify(this.state));

    event.preventDefault();

    const errors = this.validate();
    this.setState({ errors });
    if (errors) return;
    /* const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} }); */

    let dataJson = JSON.parse(JSON.stringify(this.state));
    console.log(dataJson);

    var datax = this.buildJsonDataToSend(dataJson);
    this.sendFormTerapiaFisica(datax);
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

  setInfoOfHistory = () => {
    this.setState({ antecedentesdescripAntYOtros: "hola" });
  };

  componentWillReceiveProps(props) {
    console.log("bandera tab", this.state.banderaTab);
    console.log("bandera props ", this.props.bandera);

    console.log("bandera tabClean", this.state.banderaTabClean);
    console.log("bandera propsClean ", this.props.banderaClean);

    if (this.state.banderaTab !== this.props.bandera) {
      this.setState({
        jsonDataForFechaIdMongoOnTab: this.props.jsonDataForFechaIdMongo
      });
      console.log("DATOS", this.state.jsonDataForFechaIdMongoOnTab);
      console.log("PROPS", this.props.jsonDataForFechaIdMongo);
      this.setState({ antecedentesdescripAntYOtros: "hola israel dale" });
      console.log("se actualizo el estado en el component TabChild");
    }
    if (this.props.banderaClean !== this.state.banderaTabClean) {
      console.log("VOY A LIMPIAR EL FORMULARIO");
      this.setState({ antecedentesdescripAntYOtros: " " });
    }
  }

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
                                name="hipertensionArterial"
                                value={this.state.hipertensionArterial}
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
                              <Input
                                type="checkbox"
                                name="antecedentespersonalescolesterolAlto"
                                value={
                                  this.state
                                    .antecedentespersonalescolesterolAlto
                                }
                                onChange={this.handleInputChange}
                              />{" "}
                              Colesterol Alto
                            </label>
                          </div>
                          <div>
                            <label>
                              <Input
                                type="checkbox"
                                name="antecedentespersonalesosteoartritis"
                                value={
                                  this.state.antecedentespersonalesosteoartritis
                                }
                                onChange={this.handleInputChange}
                              />{" "}
                              Osteoartritis
                            </label>
                          </div>
                          <div>
                            <label>
                              <Input
                                type="checkbox"
                                name="antecedentespersonalesacv"
                                value={this.state.antecedentespersonalesacv}
                                onChange={this.handleInputChange}
                              />{" "}
                              ACV
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-3 checkbox-group">
                          <div>
                            <label>
                              <Input
                                type="checkbox"
                                name="antecedentespersonalesinfarto"
                                value={this.state.antecedentespersonalesinfarto}
                                onChange={this.handleInputChange}
                              />{" "}
                              Infarto
                            </label>
                          </div>
                          <div>
                            <label>
                              <Input
                                type="checkbox"
                                name="antecedentespersonalesarritmias"
                                value={
                                  this.state.antecedentespersonalesarritmias
                                }
                                onChange={this.handleInputChange}
                              />{" "}
                              Arritmias
                            </label>
                          </div>
                          <div>
                            <label>
                              <Input
                                type="checkbox"
                                name="antecedentespersonalescancer"
                                value={this.state.antecedentespersonalescancer}
                                onChange={this.handleInputChange}
                              />{" "}
                              Cancer
                            </label>
                          </div>
                          <div>
                            <label>
                              <Input
                                type="checkbox"
                                name="antecedentespersonaleshepatitis"
                                value={
                                  this.state.antecedentespersonaleshepatitis
                                }
                                onChange={this.handleInputChange}
                              />{" "}
                              Hepatitis
                            </label>
                          </div>
                          <div>
                            <label>
                              <Input
                                type="checkbox"
                                name="antecedentespersonalestuberculosis"
                                value={
                                  this.state.antecedentespersonalestuberculosis
                                }
                                onChange={this.handleInputChange}
                              />{" "}
                              Tuberculosis
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-3 checkbox-group">
                          <div>
                            <label>
                              <Input
                                type="checkbox"
                                name="antecedentespersonalestransfuciones"
                                value={
                                  this.state.antecedentespersonalestransfuciones
                                }
                                onChange={this.handleInputChange}
                              />{" "}
                              Transfuciones
                            </label>
                          </div>
                          <div>
                            <label>
                              <Input
                                type="checkbox"
                                name="antecedentespersonalesaccidentes"
                                value={
                                  this.state.antecedentespersonalesaccidentes
                                }
                                onChange={this.handleInputChange}
                              />{" "}
                              Accidentes
                            </label>
                          </div>
                          <div>
                            <label>
                              <Input
                                type="checkbox"
                                name="antecedentespersonalesotros"
                                value={this.state.antecedentespersonalesotros}
                                onChange={this.handleInputChange}
                              />{" "}
                              Otros
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
                                <Input
                                  type="checkbox"
                                  name="antecedentesfamiliareshipertensionArterial"
                                  value={
                                    this.state
                                      .antecedentesfamiliareshipertensionArterial
                                  }
                                  onChange={this.handleInputChange}
                                />
                                Hipertension Arterial
                              </label>
                            </div>
                            <div>
                              <label>
                                <Input
                                  type="checkbox"
                                  name="antecedentesfamiliaresdiabetes"
                                  value={
                                    this.state.antecedentesfamiliaresdiabetes
                                  }
                                  onChange={this.handleInputChange}
                                />{" "}
                                Diabetes
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-3 checkbox-group">
                            <div>
                              <label>
                                <Input
                                  type="checkbox"
                                  name="antecedentesfamiliaresinfartoDelMiocardio"
                                  value={
                                    this.state
                                      .antecedentesfamiliaresinfartoDelMiocardio
                                  }
                                  onChange={this.handleInputChange}
                                />{" "}
                                Infarto del Miocardio
                              </label>
                            </div>
                            <div>
                              <label>
                                <Input
                                  type="checkbox"
                                  name="antecedentesfamiliaresdemencia"
                                  value={
                                    this.state.antecedentesfamiliaresdemencia
                                  }
                                  onChange={this.handleInputChange}
                                />{" "}
                                Demencia
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-3 checkbox-group">
                            <div>
                              <label>
                                <Input
                                  type="checkbox"
                                  name="antecedentesfamiliarescancer"
                                  value={
                                    this.state.antecedentesfamiliarescancer
                                  }
                                  onChange={this.handleInputChange}
                                />{" "}
                                Cancer
                              </label>
                            </div>
                            <div>
                              <label>
                                <Input
                                  type="checkbox"
                                  name="antecedentesfamiliaresotros"
                                  value={this.state.antecedentesfamiliaresotros}
                                  onChange={this.handleInputChange}
                                />{" "}
                                Otros
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
                          name="antecedentesdescripAntYOtros"
                          id="antecedentesdescripAntYOtros"
                          rows="2"
                          value={this.state.antecedentesdescripAntYOtros}
                          onChange={this.handleInputChange}
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
                        name="medUsoFrecutilizacion"
                        id="medUsoFrecutilizacion"
                        rows="6"
                        value={this.state.medUsoFrecutilizacion}
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
                        name="medUsoFrecnombre"
                        id="medUsoFrecnombre"
                        rows="6"
                        value={this.state.medUsoFrecnombre}
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
                      SI ({" "}
                      <Input
                        type="checkbox"
                        name="SIMedUseFor"
                        value={this.state.SIMedUseFor}
                        onChange={this.handleInputChange}
                      />{" "}
                      )
                    </label>
                    <label className="control-label">
                      {" "}
                      NO ({" "}
                      <Input
                        type="checkbox"
                        name="NOMedUseFor"
                        value={this.state.NOMedUseFor}
                        onChange={this.handleInputChange}
                      />{" "}
                      )
                    </label>
                  </div>
                  <div className="form-group">
                    <label className="control-label">Otros:</label>
                    <div className="">
                      <Input
                        type="text"
                        name="estricAMediccual"
                        id="estricAMediccual"
                        value={this.state.medUsoFrecrestricAMediccual} //ppppppp
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
                        name="istProblemFuncdescription"
                        id="istProblemFuncdescription"
                        rows="6"
                        value={this.state.istProblemFuncdescription}
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
                          name="anamesisDolorduracion"
                          id="anamesisDolorduracion"
                          value={this.state.anamesisDolorduracion} //ppppppp
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
                          name="anamesisDolorescalaIntensidad"
                          id="anamesisDolorescalaIntensidad"
                          value={this.state.anamesisDolorescalaIntensidad}
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
                          name="anamesisDolorfrecuencia"
                          id="anamesisDolorfrecuencia"
                          value={this.state.anamesisDolorfrecuencia} //ppppppp
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
                          name="anamesisDolorhorario"
                          id="anamesisDolorhorario"
                          value={this.state.anamesisDolorhorario}
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
                          name="anamesisDolorevolucion"
                          id="anamesisDolorevolucion"
                          rows="3"
                          value={this.state.anamesisDolorevolucion} //ppppppp
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
                      name="exploFisicaobservaciones"
                      id="exploFisicaobservaciones"
                      rows="2"
                      value={this.state.exploFisicaobservaciones}
                      onChange={this.handleInputChange}
                      placeholder="Ingrese los antecedentes aquí"
                    />
                  </div>

                  <div className="form-froup">
                    <Label for="datosADolor">Impresión Diagnostica:</Label>
                    <Input
                      type="textarea"
                      name="exploFisicaimpDiagnostica"
                      id="exploFisicaimpDiagnostica"
                      rows="3"
                      value={this.state.exploFisicaimpDiagnostica}
                      onChange={this.handleInputChange}
                      placeholder="Ingrese los antecedentes familiares aquí"
                    />
                  </div>

                  <div className="form-group">
                    <MyAutoCompleteField
                      items={this.state.dataCodes}
                      onChange={this.MyOnChangeAutoComplete}
                      id="exploFisicaciedescrip"
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
                          <Input
                            type="checkbox"
                            name="mquimicosultrasonido"
                            value={this.state.mquimicosultrasonido}
                            onChange={this.handleInputChange}
                          />{" "}
                          Ultrasonido
                        </label>
                      </div>
                      <div>
                        <label>
                          <Input
                            type="checkbox"
                            name="mquimicosmagnetoterapia"
                            value={this.state.mquimicosmagnetoterapia}
                            onChange={this.handleInputChange}
                          />{" "}
                          Magnetoterapia
                        </label>
                      </div>
                      <div>
                        <label>
                          <Input
                            type="checkbox"
                            name="mquimicosondasChoque"
                            value={this.state.mquimicosondasChoque}
                            onChange={this.handleInputChange}
                          />{" "}
                          Ondas de Choque
                        </label>
                      </div>
                      <div>
                        <label>
                          <Input
                            type="checkbox"
                            name="mquimicosparafina"
                            value={this.state.mquimicosparafina}
                            onChange={this.handleInputChange}
                          />{" "}
                          Parafina
                        </label>
                      </div>
                    </div>
                    <div className="col-sm-3 checkbox-group">
                      <div>
                        <label>
                          <Input
                            type="checkbox"
                            name="mquimicoselectroEstim"
                            value={this.state.mquimicoselectroEstim}
                            onChange={this.handleInputChange}
                          />{" "}
                          Electro Estimulación
                        </label>
                      </div>
                      <div>
                        <label>
                          <Input
                            type="checkbox"
                            name="mquimicosLaser"
                            value={this.state.mquimicosLaser}
                            onChange={this.handleInputChange}
                          />{" "}
                          Laser
                        </label>
                      </div>
                      <div>
                        <label>
                          <Input
                            type="checkbox"
                            name="mquimicosnebulizacion"
                            value={this.state.mquimicosnebulizacion}
                            onChange={this.handleInputChange}
                          />{" "}
                          Nebulización
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
                          <Input
                            type="checkbox"
                            name="mfisicoscompresQuimicas"
                            value={this.state.mfisicoscompresQuimicas}
                            onChange={this.handleInputChange}
                          />{" "}
                          Compresas Químicas
                        </label>
                      </div>
                      <div>
                        <label>
                          <Input
                            type="checkbox"
                            name="mfisicosmasoterapia"
                            value={this.state.mfisicosmasoterapia}
                            onChange={this.handleInputChange}
                          />{" "}
                          Masoterapia
                        </label>
                      </div>
                    </div>
                    <div className="col-sm-3 checkbox-group">
                      <div>
                        <label>
                          <Input
                            type="checkbox"
                            name="mfisicoscrioterapia"
                            value={this.state.mfisicoscrioterapia}
                            onChange={this.handleInputChange}
                          />{" "}
                          Crioterapia
                        </label>
                      </div>
                      <div>
                        <label>
                          <Input
                            type="checkbox"
                            name="mfisicosto"
                            value={this.state.mfisicosto}
                            onChange={this.handleInputChange}
                          />{" "}
                          T.O.
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
                          <Input
                            type="checkbox"
                            name="ejerTerapeuticosactivos"
                            value={this.state.ejerTerapeuticosactivos}
                            onChange={this.handleInputChange}
                          />{" "}
                          Activos
                        </label>
                      </div>
                      <div>
                        <label>
                          <Input
                            type="checkbox"
                            name="ejerTerapeuticospasivos"
                            value={this.state.ejerTerapeuticospasivos}
                            onChange={this.handleInputChange}
                          />{" "}
                          Pasivos
                        </label>
                      </div>
                    </div>
                    <div className="col-sm-3 checkbox-group">
                      <div>
                        <label>
                          <Input
                            type="checkbox"
                            name="ejerTerapeuticosactivosAsistidos"
                            value={this.state.ejerTerapeuticosactivosAsistidos}
                            onChange={this.handleInputChange}
                          />{" "}
                          Activos Asistidos
                        </label>
                      </div>
                      <div>
                        <label>
                          <Input
                            type="checkbox"
                            name="ejerTerapeuticosActivosResistidos"
                            value={this.state.ejerTerapeuticosActivosResistidos}
                            onChange={this.handleInputChange}
                          />{" "}
                          Activos Resistidos
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
                        name="ejerTerapeuticosnota"
                        id="ejerTerapeuticosnota"
                        rows="1"
                        value={this.state.ejerTerapeuticosnota}
                        onChange={this.handleInputChange}
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
                        name="seguimientotratamiento"
                        id="seguimientotratamiento"
                        rows="6"
                        value={this.state.seguimientotratamiento}
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
                        name="seguimientoindicaciones"
                        id="seguimientoindicaciones"
                        rows="6"
                        value={this.state.seguimientoindicaciones}
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
