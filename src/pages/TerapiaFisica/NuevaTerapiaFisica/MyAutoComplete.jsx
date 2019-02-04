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
