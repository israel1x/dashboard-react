import React, { Component } from "react";
import { Collapse } from "react-bootstrap";
import { connect } from "react-redux";
import cx from "classnames";
import imageUserDefault from "assets/images/default-avatar.png";

class UserInfo extends Component {
  state = {
    isShowingUserMenu: false
  };

  render() {
    let { user } = this.props;
    let { isShowingUserMenu } = this.state;
    return (
      <div className="user-wrapper">
        <div className="user">
          {/*  <img src={user.image} alt={user.name} className="photo" /> */}
          <img src={imageUserDefault} alt="Luis Tipan" className="photo" />
          <div className="userinfo">
            {/*  <div className="username">{user.name}</div> */}
            <div className="username">Luis Tipán</div>
            <div className="title">Doctor</div>
          </div>
          <span
            onClick={() =>
              this.setState({
                isShowingUserMenu: !this.state.isShowingUserMenu
              })
            }
            className={cx("pe-7s-angle-down collapse-arrow", {
              active: isShowingUserMenu
            })}
          />
        </div>
        <Collapse in={isShowingUserMenu}>
          <ul className="nav user-nav">
            <li>
              <a href="#">My Profile</a>
            </li>
            <li>
              <a href="#">Edit Profile</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
          </ul>
        </Collapse>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.Auth.user
});

export default connect(mapStateToProps)(UserInfo);
