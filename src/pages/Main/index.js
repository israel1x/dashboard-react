import cx from "classnames";
import React from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import SideBar from "../../components/SideBar";
import { setMobileNavVisibility } from "../../reducers/Layout";
/**
 * Pages
 */
import Components from "../Components";
import MedicinaGeneral from "../MedicinaGeneral";
import Odontologia from "../Odontología";
import Psicologia from "../Psicología";
import TerapiaFisica from "../TerapiaFisica";
import TerapiaLenguaje from "../TerapiaLenguaje";
import UserProfile from "../UserProfile";
import Footer from "./Footer";
import Header from "./Header";

const Main = ({ mobileNavVisibility, hideMobileMenu, history }) => {
  history.listen(() => {
    if (mobileNavVisibility === true) {
      hideMobileMenu();
    }
  });
  return (
    <div
      className={cx({
        "nav-open": mobileNavVisibility === true
      })}
    >
      <div className="wrapper">
        <div className="close-layer" onClick={hideMobileMenu} />
        <SideBar />

        <div className="main-panel">
          <Header />
          <Route exact path="/" component={MedicinaGeneral} />
          <Route path="/components" component={Components} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/medicinageneral" component={MedicinaGeneral} />
          <Route path="/terapiafisica" component={TerapiaFisica} />
          <Route path="/odontologia" component={Odontologia} />
          <Route path="/psicologia" component={Psicologia} />
          <Route path="/terapialenguaje" component={TerapiaLenguaje} />
          <Footer />
        </div>
      </div>
    </div>
  );
};

const mapStateToProp = state => ({
  mobileNavVisibility: state.Layout.mobileNavVisibility
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  hideMobileMenu: () => dispatch(setMobileNavVisibility(false))
});

export default withRouter(
  connect(
    mapStateToProp,
    mapDispatchToProps
  )(Main)
);
