import React, { Component, PropTypes } from 'react';

class CookieTable extends Component {
  constructor(props) {
    super(props);
    this.renderCookies = this.renderCookies.bind(this);
  }

  renderCookies() {
    return this.props.cookies.map((cookie, index) =>
      <tr key={index}>
        <td>{cookie.name}</td>
        <td>{cookie.value}</td>
        <td>{cookie.domain}</td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <h1>Cookies</h1>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Value</th>
              <th>Domain</th>
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
