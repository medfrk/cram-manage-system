var React = require('react');

class NoteRow extends React.Component {
  constructor(){
    super();

  }

  render() {
    return(
      <tr>
        <td>{this.props.kind}</td>
        <td>{this.props.content}</td>
        <td>{this.props.created_by}</td>
        <td>{this.props.created_at}</td>
      </tr>
    )
  }
}

module.exports = NoteRow;