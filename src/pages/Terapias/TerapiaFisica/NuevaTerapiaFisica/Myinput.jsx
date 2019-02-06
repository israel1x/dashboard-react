import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const MyInput = ({ name, label, value, onChange, placeholder, rows }) => {
  return (
    <FormGroup>
      <Label for={name}>{label}</Label>
      <Input
        type="textarea"
        name={name}
        id={name}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </FormGroup>
  );
};

export default MyInput;
