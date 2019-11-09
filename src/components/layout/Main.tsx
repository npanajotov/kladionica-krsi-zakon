import React, { Component } from "react";

class Main extends Component<{}> {
  public render(): JSX.Element {
    return (
      <main>{this.props.children}</main>
    );
  }
}

export default Main;
