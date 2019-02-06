import React, { Component } from "react";
import { Collapse } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

class Nav extends Component {
  state = {};

  render() {
    let { location } = this.props;
    return (
      <ul className="nav">
        <li className={location.pathname === "/" ? "active" : null}>
          <Link to="/medicinagenera/nuevaconsulta">
            <i className="pe-7s-graph" />
            <p>Pagina Principal</p>
          </Link>
        </li>

        <li
          className={
            this.isPathActive("/medicinageneral") || this.state.mapMenuOpen
              ? "active"
              : null
          }
        >
          <a
            onClick={() =>
              this.setState({ mapMenuOpen: !this.state.mapMenuOpen })
            }
            data-toggle="collapse"
          >
            <i className="pe-7s-note2" />
            <p>
              Medicina General <b className="caret" />
            </p>
          </a>
          <Collapse in={this.state.mapMenuOpen}>
            <div>
              <ul className="nav">
                <li
                  className={
                    this.isPathActive("/maps/google-map") ? "active" : null
                  }
                >
                  <Link to="/medicinageneral/nuevaconsulta">Consultas</Link>
                </li>
                <li
                  className={
                    this.isPathActive("/maps/vector-map") ? "active" : null
                  }
                >
                  <Link to="/maps/vector-map">Pacientes</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>
        <li
          className={
            this.isPathActive("/components") || this.state.componentMenuOpen
              ? "active"
              : null
          }
        >
          <a
            onClick={() =>
              this.setState({
                componentMenuOpen: !this.state.componentMenuOpen
              })
            }
            data-toggle="collapse"
          >
            <i className="pe-7s-plugin" />
            <p>
              Tearapia Física
              <b className="caret" />
            </p>
          </a>
          <Collapse in={this.state.componentMenuOpen}>
            <div>
              <ul className="nav">
                <li
                  className={
                    this.isPathActive("/terapiafisica/") ? "active" : null
                  }
                >
                  <Link to="/terapiafisica/nuevaterapiafisica" replace>
                    Nueva Terapia
                  </Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>

        <li
          className={
            this.isPathActive("/psicologia") || this.state.tableMenuOpen
              ? "active"
              : null
          }
        >
          <a
            onClick={() =>
              this.setState({ tableMenuOpen: !this.state.tableMenuOpen })
            }
            data-toggle="collapse"
          >
            <i className="pe-7s-news-paper" />
            <p>
              Psicología <b className="caret" />
            </p>
          </a>
          <Collapse in={this.state.tableMenuOpen}>
            <div>
              <ul className="nav">
                <li
                  className={
                    this.isPathActive("/psicologia/nuevapsicologia")
                      ? "active"
                      : null
                  }
                >
                  <Link to="/psicologia/nuevapsicologia">Nueva Consulta</Link>
                </li>
                {/* <li
                  className={
                    this.isPathActive("/tables/extended-tables")
                      ? "active"
                      : null
                  }
                >
                  <Link to="/tables/extended-tables">Extended Tables</Link>
                </li> */}
                {/* <li
                  className={
                    this.isPathActive("/tables/fixed-data-table")
                      ? "active"
                      : null
                  }
                >
                  <Link to="/tables/react-bootstrap-table">
                    React Bootstrap Table
                  </Link>
                </li> */}
              </ul>
            </div>
          </Collapse>
        </li>

        <li
          className={
            this.isPathActive("/components") || this.state.formMenuOpen
              ? "active"
              : null
          }
        >
          <a
            onClick={() =>
              this.setState({ formMenuOpen: !this.state.formMenuOpen })
            }
            data-toggle="collapse"
          >
            <i className="pe-7s-note2" />
            <p>
              Odontología <b className="caret" />
            </p>
          </a>
          <Collapse in={this.state.formMenuOpen}>
            <div>
              <ul className="nav">
                <li
                  className={
                    this.isPathActive("/odontologia") ? "active" : null
                  }
                >
                  <Link to="/odontologia/consultaodontologica">
                    Consulta Odontologíca
                  </Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>
      </ul>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}

export default withRouter(Nav);
