var React = require('react');

class TableRowForNote extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <tr>
        <td>{this.props.kind}</td>
        <td>{this.props.content}</td>
        <td>{this.props.date}</td>
        <td>{this.props.created_by}</td>
      </tr>
    );
  }
}

module.exports = TableRowForNote;