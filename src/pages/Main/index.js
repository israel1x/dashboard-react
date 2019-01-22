import React from "react";
import { Route, Router } from "react-router-dom";
import { connect } from "react-redux";
import cx from "classnames";
import { setMobileNavVisibility } from "../../reducers/Layout";
import { withRouter } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import SideBar from "../../components/SideBar";
import ThemeOptions from "../../components/ThemeOptions";
import MobileMenu from "../../components/MobileMenu";
/**
 * Pages
 */
import Dashboard from "../Dashboard";
import Components from "../Components";
import UserProfile from "../UserProfile";
import MapsPage from "../MapsPage";
import Forms from "../Forms";
import Charts from "../Charts";
import Calendar from "../Calendar";
import Tables from "../Tables";
import MedicinaGeneral from "../MedicinaGeneral";
import TerapiaFisica from "../TerapiaFisica";

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
          <Route exact path="/" component={Dashboard} />
          <Route path="/components" component={Components} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/forms" component={Forms} />
          <Route path="/tables" component={Tables} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/medicinageneral" component={MedicinaGeneral} />
          <Route path="/terapiafisica" component={TerapiaFisica} />
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
