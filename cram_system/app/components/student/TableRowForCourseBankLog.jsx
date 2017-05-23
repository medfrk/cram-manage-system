var React = require('react');var React = require('react');

class TableRowForCourseBankLog extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <tr>
        <td>{this.props.balance}</td>
        <td>{this.props.money}</td>
        <td>{this.props.note}</td>
        <td>{this.props.date}</td>
      </tr>
    );
  }
}

module.exports = TableRowForCourseBankLog;