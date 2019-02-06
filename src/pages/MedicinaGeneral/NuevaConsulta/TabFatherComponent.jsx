import React, { Component } from "react";
import TabChild from "./TabChildComponent";

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
      </div>
    );
  }
}

export default TabFather;
