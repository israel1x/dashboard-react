/* eslint-disable no-unused-vars */
import axios from "axios";
import Joi from "joi-browser";
import moment from "moment";
import React, { Component } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { Button, Input } from "reactstrap";

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

      // KEY PRESS
      currentKey: "",

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

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  ///
  handleListHistoryTF = () => {
    console.log("traigo lista de TF desde el select buscar historial");
    // USE .filter()  para obtener los datos de la fecha seleccionada
    //
  };

  // PARA MANEJAR EL KEYPRESS
  handleKeyPress(e) {
    this.setState({ currentKey: e.keyCode });
    if (e.keyCode === 83) {
      console.log("You just pressed Escape!");
      let currentTab = this.state.activeTab;
      if (currentTab === 7) {
        this.setState({ activeTab: 1 });
      } else {
        this.setState({ activeTab: currentTab + 1 });
      }
    }
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

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

    document.addEventListener("keydown", this.handleKeyPress);

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
            >
              <Tab eventKey={1} title={<span>Consulta</span>}>
                <div className="content">
                  <div className="form-horizontal">
                    <div className="form-group">
                      <label className="control-label col-md-2">
                        Motivo de Ingreso:
                      </label>
                      <div className="col-md-5">
                        <Input
                          type="text"
                          name="motivoIngreso"
                          id="motivoIngreso"
                          value={this.state.motivoIngreso} //ppppppp
                          onChange={this.handleInputChange}
                          placeholder="Ingrese la duración"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-md-2">
                        Quién lo Remitió:
                      </label>
                      <div className="col-md-5">
                        <Input
                          type="text"
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
                        A qué edad se iniciaron los síntomas:
                      </label>
                      <div className="col-md-5">
                        <Input
                          type="textarea"
                          rows="2"
                          name="anamesisDolorfrecuencia"
                          id="anamesisDolorfrecuencia"
                          value={this.state.anamesisDolorfrecuencia} //ppppppp
                          onChange={this.handleInputChange}
                          placeholder="Ingrese la frecuencia"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-md-2">
                        Ha Recibido Tratamiento Anterior:
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

              <Tab eventKey={2} title={<span>Anamnesis Personal A</span>}>
                <div className="content">
                  <div className="form-horizontal">
                    <div className="form-group">
                      <label className="control-label col-md-2">
                        Edad de la Madre:
                      </label>
                      <div className="col-md-4">
                        <Input
                          type="number"
                          name="motivoIngreso"
                          id="motivoIngreso"
                          value={this.state.motivoIngreso} //ppppppp
                          onChange={this.handleInputChange}
                          placeholder="Al momeneto de la cocepción"
                        />
                      </div>
                      <label className="control-label col-md-2">
                        Embarazo Controlado:
                      </label>
                      <div className="col-md-4">
                        <Input
                          type="text"
                          name="motivoIngreso"
                          id="motivoIngreso"
                          value={this.state.motivoIngreso} //ppppppp
                          onChange={this.handleInputChange}
                          placeholder="Ingrese la duración"
                        />
                      </div>
                    </div>
                    <legend />
                    <div className="form-group">
                      <label className="control-label col-md-2">
                        Estado Emocional de la Madre:
                      </label>
                      <div className="col-md-4">
                        <Input
                          type="textarea"
                          rows="2"
                          name="anamesisDolorescalaIntensidad"
                          id="anamesisDolorescalaIntensidad"
                          value={this.state.anamesisDolorescalaIntensidad}
                          onChange={this.handleInputChange}
                          placeholder="Ingrese los comentarios..."
                        />
                      </div>
                      <label className="control-label col-md-2">
                        Alimentación:
                      </label>
                      <div className="col-md-4">
                        <Input
                          type="text"
                          name="motivoIngreso"
                          id="motivoIngreso"
                          value={this.state.motivoIngreso} //ppppppp
                          onChange={this.handleInputChange}
                          placeholder="Ingrese la duración"
                        />
                      </div>
                    </div>

                    <legend />
                    <div className="form-group">
                      <label className="control-label col-md-2">
                        Enfermedades o Infecciones:
                      </label>
                      <div className="col-md-10">
                        <Input
                          type="textarea"
                          rows="2"
                          name="anamesisDolorfrecuencia"
                          id="anamesisDolorfrecuencia"
                          value={this.state.anamesisDolorfrecuencia} //ppppppp
                          onChange={this.handleInputChange}
                          placeholder="Ingrese las enfermedades o Infecciones"
                        />
                      </div>
                    </div>

                    <legend />
                    <div className="form-group">
                      <label className="control-label col-md-3">
                        Medicamentos:
                      </label>
                      <div className="col-md-3">
                        <label>
                          <Input
                            type="radio"
                            name="radioGroup"
                            id="anamesisDolorevolucion"
                            value={this.state.anamesisDolorevolucion} //ppppppp
                            onChange={this.handleInputChange}
                          />
                          SI
                        </label>
                        <label>
                          <Input
                            type="radio"
                            name="radioGroup"
                            id="anamesisDolorevolucion"
                            value={this.state.anamesisDolorevolucion} //ppppppp
                            onChange={this.handleInputChange}
                          />
                          NO
                        </label>
                      </div>

                      <label className="control-label col-md-3">
                        Tramumatismo:
                      </label>
                      <div className="col-md-3">
                        <label>
                          <Input
                            type="radio"
                            name="radioGroup"
                            id="anamesisDolorevolucion"
                            value={this.state.anamesisDolorevolucion} //ppppppp
                            onChange={this.handleInputChange}
                          />
                          SI
                        </label>
                        <label>
                          <Input
                            type="radio"
                            name="radioGroup"
                            id="anamesisDolorevolucion"
                            value={this.state.anamesisDolorevolucion} //ppppppp
                            onChange={this.handleInputChange}
                          />
                          NO
                        </label>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-md-3">Rayos X:</label>
                      <div className="col-md-3">
                        <label>
                          <Input
                            type="radio"
                            name="radioGroup"
                            id="anamesisDolorevolucion"
                            value={this.state.anamesisDolorevolucion} //ppppppp
                            onChange={this.handleInputChange}
                          />
                          SI
                        </label>
                        <label>
                          <Input
                            type="radio"
                            name="radioGroup"
                            id="anamesisDolorevolucion"
                            value={this.state.anamesisDolorevolucion} //ppppppp
                            onChange={this.handleInputChange}
                          />
                          NO
                        </label>
                      </div>

                      <label className="control-label col-md-3">
                        Traumatismo Sanguineo:
                      </label>
                      <div className="col-md-3">
                        <label>
                          <Input
                            type="radio"
                            name="radioGroup"
                            id="anamesisDolorevolucion"
                            value={this.state.anamesisDolorevolucion} //ppppppp
                            onChange={this.handleInputChange}
                          />
                          SI
                        </label>
                        <label>
                          <Input
                            type="radio"
                            name="radioGroup"
                            id="anamesisDolorevolucion"
                            value={this.state.anamesisDolorevolucion} //ppppppp
                            onChange={this.handleInputChange}
                          />
                          NO
                        </label>
                      </div>
                    </div>

                    <legend />

                    <div className="form-group">
                      <label className="control-label col-md-2">
                        Tipo de Gestación:
                      </label>
                      <div className="col-md-4">
                        <Input
                          type="text"
                          name="tipoGestacion"
                          id="anamesisDolorevolucion"
                          value={this.state.anamesisDolorevolucion} //ppppppp
                          onChange={this.handleInputChange}
                        />
                      </div>

                      <label className="control-label col-md-2">
                        Asistido por:
                      </label>
                      <div className="col-md-4">
                        <Input
                          type="text"
                          name="asistidoPor"
                          id="asistidopor"
                          value={this.state.anamesisDolorevolucion} //ppppppp
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-md-2">
                        Tipo de Parto:
                      </label>
                      <div className="col-md-4">
                        <Input
                          type="text"
                          name="tipoParto"
                          id="anamesisDolorevolucion"
                          value={this.state.anamesisDolorevolucion} //ppppppp
                          onChange={this.handleInputChange}
                        />
                      </div>

                      <label className="control-label col-md-2">Hipoxia:</label>
                      <div className="col-md-4">
                        <label>
                          <Input
                            type="radio"
                            name="radioGroup"
                            id="anamesisDolorevolucion"
                            value={this.state.anamesisDolorevolucion} //ppppppp
                            onChange={this.handleInputChange}
                          />
                          SI
                        </label>
                        <label>
                          <Input
                            type="radio"
                            name="radioGroup"
                            id="anamesisDolorevolucion"
                            value={this.state.anamesisDolorevolucion} //ppppppp
                            onChange={this.handleInputChange}
                          />
                          NO
                        </label>
                      </div>
                    </div>

                    <legend />

                    <div className="form-group">
                      <label className="control-label col-md-2">
                        Complicaciones Durante el Embarazo y/o Parto:
                      </label>
                      <div className="col-md-10">
                        <Input
                          type="textarea"
                          rows="2"
                          name="anamesisDolorfrecuencia"
                          id="anamesisDolorfrecuencia"
                          value={this.state.anamesisDolorfrecuencia} //ppppppp
                          onChange={this.handleInputChange}
                          placeholder="Ingrese las enfermedades o Infecciones"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey={3} title={<span>Anamnesis Personal B</span>}>
                <div className="content">
                  <div className="form-horizontal">
                    <div className="form-group">
                      <label className="control-label col-md-2">
                        Estado del niño al nacer:
                      </label>
                      <div className="col-md-10">
                        <Input
                          type="textarea"
                          rows="2"
                          name="estadoNacer"
                          id="estadoNacer"
                          value={this.state.anamesisDolorfrecuencia} //ppppppp
                          onChange={this.handleInputChange}
                          placeholder="Ingrese las enfermedades o Infecciones"
                        />
                      </div>
                    </div>

                    <legend />
                    <div className="form-group">
                      <label className="control-label col-md-2">
                        Necesidad Incubadora:
                      </label>
                      <div className="col-md-3">
                        <Input
                          type="text"
                          name="necesidadIncubadora"
                          id="necesidadIncubadora"
                          value={this.state.necesidadIncubadora} //ppppppp
                          onChange={this.handleInputChange}
                        />
                      </div>

                      <label className="control-label col-md-2">
                        Malformación:
                      </label>
                      <div className="col-md-2">
                        <Input
                          type="text"
                          name="malformacion"
                          id="malformacion"
                          value={this.state.malformacion} //ppppppp
                          onChange={this.handleInputChange}
                        />
                      </div>

                      <label className="control-label col-md-1">Tiempo:</label>
                      <div className="col-md-2">
                        <Input
                          type="text"
                          name="cuantotiempo"
                          id="cuantotiempo"
                          value={this.state.cuantotiempo} //ppppppp
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>
                    <legend />

                    <div className="form-group">
                      <label className="control-label col-md-2">
                        Tipo de Alimentación:
                      </label>
                      <div className="col-md-3">
                        <Input
                          type="text"
                          name="necesidadIncubadora"
                          id="necesidadIncubadora"
                          value={this.state.necesidadIncubadora} //ppppppp
                          onChange={this.handleInputChange}
                        />
                      </div>

                      <label className="control-label col-md-2">
                        Hasta qué edad:
                      </label>
                      <div className="col-md-1">
                        <Input
                          type="text"
                          name="malformacion"
                          id="malformacion"
                          value={this.state.malformacion} //ppppppp
                          onChange={this.handleInputChange}
                        />
                      </div>

                      <label className="control-label col-md-2">
                        Dificultad de Succión:
                      </label>
                      <div className="col-md-2">
                        <Input
                          type="text"
                          name="cuantotiempo"
                          id="cuantotiempo"
                          value={this.state.cuantotiempo} //ppppppp
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>
                    <legend />

                    <div className="form-group">
                      <label className="control-label col-md-2">
                        Duerme solo:
                      </label>
                      <div className="col-md-2">
                        <Input
                          type="text"
                          name="necesidadIncubadora"
                          id="necesidadIncubadora"
                          value={this.state.necesidadIncubadora} //ppppppp
                          onChange={this.handleInputChange}
                        />
                      </div>

                      <label className="control-label col-md-3">
                        Necesita Luz para Dormir:
                      </label>
                      <div className="col-md-1">
                        <Input
                          type="text"
                          name="malformacion"
                          id="malformacion"
                          value={this.state.malformacion} //ppppppp
                          onChange={this.handleInputChange}
                        />
                      </div>

                      <label className="control-label col-md-2">
                        Traumatismo:
                      </label>
                      <div className="col-md-2">
                        <Input
                          type="text"
                          name="cuantotiempo"
                          id="cuantotiempo"
                          value={this.state.cuantotiempo} //ppppppp
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>
                    <legend />

                    <div className="form-group">
                      <label className="control-label col-md-2">
                        Enfermedad que presenta el niño/a:
                      </label>
                      <div className="col-md-10">
                        <Input
                          type="textarea"
                          rows="2"
                          name="estadoNacer"
                          id="estadoNacer"
                          value={this.state.anamesisDolorfrecuencia} //ppppppp
                          onChange={this.handleInputChange}
                          placeholder="Ingrese las enfermedades o Infecciones"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>

              <Tab eventKey={4} title={<span>Desarrollo Motor</span>}>
                <div className="content">
                  <div className="form-horizontal">
                    <div className="form-group">
                      <label className="control-label col-md-2">
                        Sostuvo la cabeza:
                      </label>
                      <div className="col-md-2">
                        <Input
                          type="text"
                          name="sostuvoCabeza"
                          id="sostuvoCabeza"
                          value={this.state.sostuvoCabeza} //ppppppp
                          onChange={this.handleInputChange}
                        />
                      </div>

                      <label className="control-label col-md-3">
                        Se sentó:
                      </label>
                      <div className="col-md-1">
                        <Input
                          type="text"
                          name="malformacion"
                          id="malformacion"
                          value={this.state.malformacion} //ppppppp
                          onChange={this.handleInputChange}
                        />
                      </div>

                      <label className="control-label col-md-2">Gateó:</label>
                      <div className="col-md-2">
                        <Input
                          type="text"
                          name="cuantotiempo"
                          id="cuantotiempo"
                          value={this.state.cuantotiempo} //ppppppp
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>
                    <legend />

                    <div className="form-group">
                      <label className="control-label col-md-2">Se paró:</label>
                      <div className="col-md-2">
                        <Input
                          type="text"
                          name="sostuvoCabeza"
                          id="sostuvoCabeza"
                          value={this.state.sostuvoCabeza} //ppppppp
                          onChange={this.handleInputChange}
                        />
                      </div>

                      <label className="control-label col-md-3">
                        Caminó solo:
                      </label>
                      <div className="col-md-1">
                        <Input
                          type="text"
                          name="malformacion"
                          id="malformacion"
                          value={this.state.malformacion} //ppppppp
                          onChange={this.handleInputChange}
                        />
                      </div>

                      <label className="control-label col-md-2">Otro:</label>
                      <div className="col-md-2">
                        <Input
                          type="text"
                          name="cuantotiempo"
                          id="cuantotiempo"
                          value={this.state.cuantotiempo} //ppppppp
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>
                    <legend />
                  </div>
                </div>
              </Tab>

              <Tab eventKey={5} title={<span>Desarrollo del Lenguaje</span>}>
                <div className="content">
                  <div className="form-horizontal">
                    <div className="form-group">
                      <label className="control-label col-md-1">Sonrisa:</label>
                      <div className="col-md-2">
                        <Input
                          type="text"
                          name="sostuvoCabeza"
                          id="sostuvoCabeza"
                          value={this.state.sostuvoCabeza} //ppppppp
                          onChange={this.handleInputChange}
                        />
                      </div>

                      <label className="control-label col-md-1">Gorjeo:</label>
                      <div className="col-md-2">
                        <Input
                          type="text"
                          name="malformacion"
                          id="malformacion"
                          value={this.state.malformacion} //ppppppp
                          onChange={this.handleInputChange}
                        />
                      </div>

                      <label className="control-label col-md-1">
                        Balbuceo:
                      </label>
                      <div className="col-md-2">
                        <Input
                          type="text"
                          name="cuantotiempo"
                          id="cuantotiempo"
                          value={this.state.cuantotiempo} //ppppppp
                          onChange={this.handleInputChange}
                        />
                      </div>

                      <label className="control-label col-md-1">Laleo:</label>
                      <div className="col-md-2">
                        <Input
                          type="text"
                          name="cuantotiempo"
                          id="cuantotiempo"
                          value={this.state.cuantotiempo} //ppppppp
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>
                    <legend />

                    <div className="form-group">
                      <label className="control-label col-md-2">
                        Primeras palabras:
                      </label>
                      <div className="col-md-4">
                        <Input
                          type="text"
                          name="motivoIngreso"
                          id="motivoIngreso"
                          value={this.state.motivoIngreso} //ppppppp
                          onChange={this.handleInputChange}
                          placeholder="Al momeneto de la cocepción"
                        />
                      </div>
                      <label className="control-label col-md-2">
                        Frases de dos palabras:
                      </label>
                      <div className="col-md-4">
                        <Input
                          type="text"
                          name="motivoIngreso"
                          id="motivoIngreso"
                          value={this.state.motivoIngreso} //ppppppp
                          onChange={this.handleInputChange}
                          placeholder="Ingrese la duración"
                        />
                      </div>
                    </div>
                    <legend />

                    <div className="form-group">
                      <label className="control-label col-md-2">
                        Oraciones completas:
                      </label>
                      <div className="col-md-4">
                        <Input
                          type="text"
                          name="motivoIngreso"
                          id="motivoIngreso"
                          value={this.state.motivoIngreso} //ppppppp
                          onChange={this.handleInputChange}
                        />
                      </div>
                      <label className="control-label col-md-2">
                        Comprende el NO:
                      </label>
                      <div className="col-md-4">
                        <Input
                          type="text"
                          name="motivoIngreso"
                          id="motivoIngreso"
                          value={this.state.motivoIngreso} //ppppppp
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>
                    <legend />

                    <div className="form-group">
                      <label className="control-label col-md-2">
                        Comportamiento:
                      </label>
                      <div className="col-md-10">
                        <Input
                          type="textarea"
                          rows="2"
                          name="comportamiento"
                          id="comportamiento"
                          value={this.state.comportamiento} //ppppppp
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey={6} title={<span>Anamnesis Familiar</span>}>
                <div className="content">
                  <div className="form-horizontal">
                    <div className="form-group">
                      <label className="control-label col-md-2">
                        Enfermedad del Padre:
                      </label>
                      <div className="col-md-5">
                        <Input
                          type="text"
                          name="emfermedadPadre"
                          id="emfermedadPadre"
                          value={this.state.emfermedadPadre} //ppppppp
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-md-2">
                        Enfermedad de la Madre:
                      </label>
                      <div className="col-md-5">
                        <Input
                          type="textarea"
                          rows="1"
                          name="enfermedadMadre"
                          id="enfermedadMadre"
                          value={this.state.enfermedadMadre}
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-md-2">
                        Familiares Paternos con Discapacidad:
                      </label>
                      <div className="col-md-5">
                        <Input
                          type="textarea"
                          rows="2"
                          name="anamesisDolorfrecuencia"
                          id="anamesisDolorfrecuencia"
                          value={this.state.anamesisDolorfrecuencia} //ppppppp
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-md-2">
                        Familiares Maternos con Discapacidad:
                      </label>
                      <div className="col-md-5">
                        <Input
                          type="textarea"
                          name="anamesisDolorevolucion"
                          id="anamesisDolorevolucion"
                          rows="2"
                          value={this.state.anamesisDolorevolucion} //ppppppp
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>

              <Tab eventKey={7} title={<span>Desarrollo Psicosocial</span>}>
                <div className="content">
                  <div className="form-horizontal">
                    <div className="form-group">
                      <label className="control-label col-md-2">
                        Con quién vive el niño/a:
                      </label>
                      <div className="col-md-5">
                        <Input
                          type="text"
                          name="emfermedadPadre"
                          id="emfermedadPadre"
                          value={this.state.emfermedadPadre} //ppppppp
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-md-2">
                        Como se relaciona con los padres:
                      </label>
                      <div className="col-md-5">
                        <Input
                          type="textarea"
                          rows="1"
                          name="enfermedadMadre"
                          id="enfermedadMadre"
                          value={this.state.enfermedadMadre}
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-md-2">
                        Como se relaciona con los hermanos:
                      </label>
                      <div className="col-md-5">
                        <Input
                          type="textarea"
                          rows="1"
                          name="anamesisDolorfrecuencia"
                          id="anamesisDolorfrecuencia"
                          value={this.state.anamesisDolorfrecuencia} //ppppppp
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-md-2">
                        Como se relaciona con los familiares:
                      </label>
                      <div className="col-md-5">
                        <Input
                          type="textarea"
                          name="anamesisDolorevolucion"
                          id="anamesisDolorevolucion"
                          rows="1"
                          value={this.state.anamesisDolorevolucion} //ppppppp
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-md-2">
                        Como se relaciona con los amigos:
                      </label>
                      <div className="col-md-5">
                        <Input
                          type="textarea"
                          name="anamesisDolorevolucion"
                          id="anamesisDolorevolucion"
                          rows="1"
                          value={this.state.anamesisDolorevolucion} //ppppppp
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>

              <Tab eventKey={8} title={<span>Diagnóstico</span>}>
                <div className="content">
                  <div className="form-horizontal">
                    <div className="form-group">
                      <label className="control-label col-md-4">
                        Diagnóstico médico durante el embarazo:
                      </label>
                      <div className="col-md-8">
                        <Input
                          type="textarea"
                          name="emfermedadPadre"
                          id="emfermedadPadre"
                          rows="2"
                          value={this.state.emfermedadPadre} //ppppppp
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-md-4">
                        Diagnóstico médico después del nacimiento:
                      </label>
                      <div className="col-md-8">
                        <Input
                          type="textarea"
                          rows="2"
                          name="enfermedadMadre"
                          id="enfermedadMadre"
                          value={this.state.enfermedadMadre}
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>

              <Tab eventKey={9} title={<span>Tratamiento</span>}>
                <div className="content">
                  <div className="form-horizontal">
                    <div className="form-group">
                      <label className="control-label col-md-4">
                        Tipo de Alimentación:
                      </label>
                      <div className="col-md-8">
                        <Input
                          type="textarea"
                          name="emfermedadPadre"
                          id="emfermedadPadre"
                          rows="1"
                          value={this.state.emfermedadPadre} //ppppppp
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-md-4">
                        ¿Que tipos de tratamiento o terapias ha recibido?:
                      </label>
                      <div className="col-md-8">
                        <Input
                          type="textarea"
                          rows="1"
                          name="enfermedadMadre"
                          id="enfermedadMadre"
                          value={this.state.enfermedadMadre}
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-md-4">
                        ¿En qué terapias está actualmente?:
                      </label>
                      <div className="col-md-8">
                        <Input
                          type="textarea"
                          rows="1"
                          name="enfermedadMadre"
                          id="enfermedadMadre"
                          value={this.state.enfermedadMadre}
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-md-4">
                        ¿Toma algún tipo de medicamentos, dosis?:
                      </label>
                      <div className="col-md-8">
                        <Input
                          type="textarea"
                          rows="1"
                          name="enfermedadMadre"
                          id="enfermedadMadre"
                          value={this.state.enfermedadMadre}
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>

              <Tab
                eventKey={10}
                title={<span>Recomendaciones y Observaciones</span>}
              >
                <div className="content">
                  <div className="form-horizontal">
                    <div className="form-group">
                      <label className="control-label col-md-4">
                        Recomendaciones:
                      </label>
                      <div className="col-md-8">
                        <Input
                          type="textarea"
                          rows="2"
                          name="enfermedadMadre"
                          id="enfermedadMadre"
                          value={this.state.enfermedadMadre}
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-md-4">
                        Observaciones:
                      </label>
                      <div className="col-md-8">
                        <Input
                          type="textarea"
                          rows="2"
                          name="enfermedadMadre"
                          id="enfermedadMadre"
                          value={this.state.enfermedadMadre}
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>
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
