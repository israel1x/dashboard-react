/* eslint-disable no-unused-vars */
import Downshift from "downshift";
import React from "react";
const endPointCodeCie =
  "http://ec2-34-216-62-59.us-west-2.compute.amazonaws.com:5000/cies/";

export default ({ items, onChange, label, placeholder, name }) => {
  return (
    <Downshift
      onChange={onChange}
      itemToString={items => (items ? items.code + ": " + items.descrip : "")}
    >
      {({
        getInputProps,
        getItemProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
        getLabelProps
      }) => (
        <div>
          <label
            style={{ marginTop: "1rem", display: "block" }}
            {...getLabelProps()}
          >
            {label}
          </label>{" "}
          <input name={name} {...getInputProps({ placeholder })} />
          {isOpen ? (
            <div className="downshift-dropdown">
              {items
                // filter the items and return those that includes the inputValue
                .filter(
                  item =>
                    !inputValue ||
                    item.descrip
                      .toLowerCase()
                      .includes(inputValue.toLowerCase())
                )
                // map through the returned items and render them to the page
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
};
