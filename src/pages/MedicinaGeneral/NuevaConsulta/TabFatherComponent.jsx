import React, { Component } from "react";
/* import { Link } from "react-router-dom";
import { TabView, TabPanel } from "primereact/tabview";
import {
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from "reactstrap"; */
//import classnames from "classnames";
import TabChild from "./TabChildComponent";
//import { Button } from "react-bulma-components/full";

class TabFather extends Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 0
    };
  }
  ///state = {  }
  render() {
    return (
      <div>
        <TabChild />
        {/* <div>
          <Button size="normal" is-outlined>
            Guardar
          </Button>
          <Button color="link" is-outlined>
            Siguiente
          </Button>
        </div> */}
      </div>
    );
  }
}

export default TabFather;
