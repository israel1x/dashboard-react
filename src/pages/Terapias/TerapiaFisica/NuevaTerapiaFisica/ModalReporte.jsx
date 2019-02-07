import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

class ModalReporte extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  /* <Button variant="primary" onClick={this.handleShow}>
  Launch demo modal
</Button> */

  render() {
    return (
      <Modal show={this.props.showM} onHide={this.props.cerrarModal}>
        <Modal.Header closeButton>
          <Modal.Title>Historia Clínica</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.cerrarModal}>
            Cerrar
          </Button>
          {/* <Button variant="primary" onClick={this.props.cerrarModal}>
            Guardar
          </Button> */}
        </Modal.Footer>
      </Modal>
    );
  }
}
export default ModalReporte;
