var React = require('react');

class SigningTableRow extends React.Component {
  constructor(){
    super();
  }

  render() {
    return(
      <tr>
        <td>{this.props.student_number}</td>
        <td>{this.props.student_name}</td>
        <td>{this.props.student_seat}</td>
        <td>{this.props.student_sign}</td>
      </tr>
    )
  }
}

module.exports = SigningTableRow;
