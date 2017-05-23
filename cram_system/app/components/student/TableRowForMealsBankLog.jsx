var React = require('react');

class TableRowForMealsBankLog extends React.Component {
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

module.exports = TableRowForMealsBankLog;