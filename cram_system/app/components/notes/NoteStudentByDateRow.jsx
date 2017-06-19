var React = require('react');

class NoteStudentByDateRow extends React.Component {
  constructor(){
    super();

  }

  render() {
    return(
      <tr>
        <td>{this.props.owner_name}</td>
        <td>{this.props.content}</td>
        <td>{this.props.created_by}</td>
        <td>{this.props.created_at}</td>
      </tr>
    )
  }
}

module.exports = NoteStudentByDateRow;
