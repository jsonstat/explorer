import React from "react";
import Dimension from "./Dimension";
import {getMessage} from "./XHRUtils";

export default class Item extends React.Component {
  constructor() {
    super();
    this.state = {
      status: "ok"
    };
  }

  onClick(href) {
    this.setState({status: "loading"});
    this.props.changeUrl(href);
  }

  render() {
    const msg=getMessage(this.state.status);

    return (
      <li
        tabindex="0"
        onClick={this.onClick.bind(this, this.props.href)}
        onKeyPress={e=>{if(e.key==="Enter"){this.onClick(this.props.href);}}}
      >
        {this.props.label} [{this.props.className}]
        {msg}
      </li>
    );
  }
}
