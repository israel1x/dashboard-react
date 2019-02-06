import axios from "axios";
import Downshift from "downshift";
import React, { Component } from "react";

const endPointCodeCie =
  "http://ec2-34-216-62-59.us-west-2.compute.amazonaws.com:5000/cies/";

class MyAutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCodes: []
    };
    this.fetchEnfermedades = this.fetchEnfermedades.bind(this);
    this.inputOnChange = this.inputOnChange.bind(this);
  }

  inputOnChange(event) {
    if (!event.target.value) {
      return;
    }
    //console.log(this.state.dataCodes);
    this.fetchEnfermedades(endPointCodeCie);
  }

  downshiftOnChange(selectedEnfermedad) {
    alert(`ud selecciono ${selectedEnfermedad.descrip}`);
  }

  fetchEnfermedades(endPointCodeCie) {
    axios.get(endPointCodeCie).then(response => {
      this.setState({ dataCodes: response.data });
      console.log(response.data);
    });
  }

  render() {
    return (
      <Downshift
        onChange={this.downshiftOnChange}
        itemToString={item => (item ? item.code + ": " + item.descrip : "")}
      >
        {({
          selectedItem,
          getInputProps,
          getItemProps,
          highlightedIndex,
          isOpen,
          inputValue,
          getLabelProps
        }) => (
          <div>
            <label
              style={{ marginTop: "1rem", display: "block" }}
              {...getLabelProps()}
            >
              Código CIE10:
            </label>{" "}
            <input
              {...getInputProps({
                placeholder: "Enfermedad ",
                onChange: this.inputOnChange
              })}
            />
            {isOpen ? (
              <div className="downshift-dropdown">
                {// filter the items in the state
                this.state.dataCodes
                  .filter(
                    item =>
                      !inputValue ||
                      item.descrip
                        .toLowerCase()
                        .includes(inputValue.toLowerCase())
                  )
                  // .slice(0, 10) // return just the first ten. Helps improve performance
                  // map the filtered items and display their title
                  .map((item, index) => (
                    <div
                      className="dropdown-item"
                      {...getItemProps({ key: index, index, item })}
                      style={{
                        backgroundColor:
                          highlightedIndex === index ? "lightgray" : "white",
                        fontWeight: selectedItem === item ? "bold" : "normal"
                      }}
                    >
                      {item.descrip}
                    </div>
                  ))}
              </div>
            ) : null}
          </div>
        )}
      </Downshift>
    );
  }
}

export default MyAutoComplete;

/**
 * Terapia Fisica model that will be used as tfisicaMedicalcard instance
 */
const mongoose = require("mongoose");

const { Schema } = mongoose;

const TFisicaMedicalCardSchema = new Schema({
  idpaciente: {
    type: String,
    required: [true, "ID_Paciente is required"]
  },
  fechahora: Date,
  consulta: {
    motivo: String
  },
  antecedentes: {
    personales: {
      hipertensionArterial: Boolean,
      diabetes: Boolean,
      colesterolAlto: Boolean,
      osteoartritis: Boolean,
      acv: Boolean,
      infarto: Boolean,
      arritmias: Boolean,
      cancer: Boolean,
      epatitis: Boolean,
      tuberculosis: Boolean,
      transfuciones: Boolean,
      accidentes: Boolean,
      otros: Boolean
    },
    familiares: {
      hipertensionArterial: Boolean,
      diabetes: Boolean,
      infartoDelMiocardio: Boolean,
      demencia: Boolean,
      cancer: Boolean,
      otros: Boolean
    },
    descripAntYOtros: String
  },
  medUsoFrec: {
    utilizacion: String,
    nombre: String,
    restricAMedic: {
      resp: Boolean,
      cual: String
    }
  },
  histProblemFunc: {
    description: String
  },
  anamesisDolor: {
    duracion: String,
    escalaIntensidad: Number,
    frecuencia: String,
    horario: String,
    evolucion: String
  },
  exploFisica: {
    observaciones: String,
    impDiagnostica: String,
    cie: {
      code: String,
      descrip: String
    }
  },
  tfisioterap: {
    mquimicos: {
      ultrasonido: Boolean,
      elecEstim: Boolean,
      magnetoTerapia: Boolean,
      laser: Boolean,
      nebulizacion: Boolean,
      ondasChoque: Boolean,
      parafina: Boolean
    },
    mfisicos: {
      compresQuimicas: String,
      crioterapia: String,
      masoterapai: String,
      to: String
    },
    ejerTerapeuticos: {
      activos: Boolean,
      pasivos: Boolean,
      activosAsistidos: Boolean,
      ActivosResistidos: Boolean
    },
    nota: String
  },
  seguimiento: [
    {
      fecha: Date,
      tratamiento: String,
      indicaciones: String
    }
  ]
});

// const a = {
//   "idpaciente": "1002",
//   "fechahora": "2019-01-25T10:28",
//   "consulta": {
//     "motivo": "Gripe"
//   },
//   "antecedentes": {
//     "personales": {
//       "hipertensionArterial": true,
//       "diabetes": true,
//       "colesterolAlto": true,
//       "osteoartritis": true,
//       "acv": true,
//       "infarto": true,
//       "arritmias": true,
//       "cancer": true,
//       "epatitis": true,
//       "tuberculosis": true,
//       "transfuciones": true,
//       "accidentes": true,
//       "otros": false
//     },
//     "familiares": {
//       "hipertensionArterial": true,
//       "diabetes": true,
//       "infartoDelMiocardio": true,
//       "demencia": true,
//       "cancer": true,
//       "otros": false
//     },
//     "descripAntYOtros": "String"
//   },
//   "medUsoFrec": {
//     "utilizacion": "String",
//     "nombre": "String",
//     "restricAMedic": {
//       "resp": true,
//       "cual": "String"
//     }
//   },
//   "histProblemFunc": {
//     "description": "String"
//   },
//   "anamesisDolor": {
//     "duracion": "String",
//     "escalaIntensidad": 4,
//     "frecuencia": "String",
//     "horario": "String",
//     "evolucion": "String"
//   },
//   "exploFisica": {
//     "observaciones": "String",
//     "impDiagnostica": "String",
//     "cie": {
//       "code": "COD-0001",
//       "descrip": "Code para enfermedad de tipo Hombro"
//     }
//   },
//   "tfisioterap": {
//     "mquimicos": {
//       "ultrasonido": true,
//       "elecEstim": true,
//       "magnetoTerapia": true,
//       "laser": true,
//       "nebulizacion": true,
//       "ondasChoque": true,
//       "parafina": true
//     },
//     "mfisicos": {
//       "compresQuimicas": "String",
//       "crioterapia": "String",
//       "masoterapai": "String",
//       "to": "String"
//     },
//     "ejerTerapeuticos": {
//       "activos": true,
//       "pasivos": true,
//       "activosAsistidos": true,
//       "ActivosResistidos": true
//     },
//     "nota": "String"
//   },
//   "seguimiento": [
//     {
//       "fecha": "2019-01-25T10:28",
//       "tratamiento": "String",
//       "indicaciones": "String"
//     }
//   ]
// }
module.exports = mongoose.model("TFisicaMedicalCard", TFisicaMedicalCardSchema);
