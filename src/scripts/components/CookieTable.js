/* eslint-disable no-alert */

import React, { Component, PropTypes } from 'react';

class CookieTable extends Component {
  constructor(props) {
    super(props);
    this.renderCookies = this.renderCookies.bind(this);
  }

  exportCookie(index) {
    if (index < 0) {
      alert(this.props.cookies);
      return;
    }
    alert(this.props.cookies[index]);
  }

  renderCookies() {
    return this.props.cookies.map((cookie, index) =>
      <tr key={index} className="rows">
        <td>{cookie.name}</td>
        <td>{cookie.value}</td>
        <td>{cookie.domain}</td>
        <td onClick={this.exportCookie.bind(this, [index])}
          className="exportButton">Export</td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <div className="headerDiv">
          <span className="title">Cookies</span>
          <span onClick={this.exportCookie.bind(this, [-1])}
            className="exportAllButton">Export all</span>
        </div>
        <table>
          <tbody>
            <tr className="header">
              <td>Name</td>
              <td>Value</td>
              <td>Domain</td>
              <td></td>
            </tr>
            {this.renderCookies()}
          </tbody>
        </table>
      </div>
    );
  }
}

CookieTable.propTypes = {
  cookies: PropTypes.array
};

export default CookieTable;
