import React, { Component } from 'react';


export default class Navigation extends Component {
  render() {
    return (
      <nav className="navi">
        <div className="col-4 offset-4 logo">
          <img src="/assets/img/minecraft_logo.png" />
        </div>
      </nav>
    );
  }
};