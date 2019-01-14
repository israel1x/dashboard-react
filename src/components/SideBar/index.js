import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Collapse } from "react-bootstrap";
import UserInfo from "./UserInfo";
import Nav from "./Nav";
import backgroundImage from "assets/images/sidebar-5.jpg";
import logoServiciosMedicos from "assets/images/front/logoserviciosmedicos.png";

class SideBar extends Component {
  state = {};

  render() {
    let {
      location,
      backgroundColor,
      enableBackgroundImage,
      backgroundImage
    } = this.props;

    return (
      <div
        className="sidebar"
        data-color={backgroundColor}
        data-image={backgroundImage}
      >
        <div className="brand">
          <a href="http://www.patronatopastaza.gob.ec/" className="brand-name">
            <img
              src={
                logoServiciosMedicos
                ///"http://jslancer.com/wp-content/uploads/2017/04/js-lancer-logo2-1.png"
              }
              alt="logo"
              className="logo"
            />
          </a>
        </div>

        <div className="sidebar-wrapper">
          <UserInfo />
          <div className="line" />
          <Nav />
        </div>
        <div
          className="sidebar-background"
          style={{
            backgroundImage: enableBackgroundImage
              ? "url(" + backgroundImage + ")"
              : null
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  enableBackgroundImage: state.ThemeOptions.enableBackgroundImage,
  backgroundColor: state.ThemeOptions.backgroundColor,
  backgroundImage: state.ThemeOptions.backgroundImage
});

export default withRouter(connect(mapStateToProps)(SideBar));
