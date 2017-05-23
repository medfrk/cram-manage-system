var React = require('react');

class StudentTableRow extends React.Component {
  constructor(){
    super();

    this.state = {
      update_at: [],
    }

    this.setLocalStorage = this.setLocalStorage.bind(this);
  }

  setLocalStorage() {
    localStorage.setItem('student_id', this.props.student_id);
  }

  render() {
    var manage_button = <a href="/student_dashboard/" className="btn btn-primary btn-xs" onClick={() => {this.setLocalStorage()}}>Manage</a>

    return(
      <tr>
        <td>{this.props.student_number}</td>
        <td>{this.props.student_name}</td>
        <td>{this.props.student_school}</td>
        <td>{this.props.student_grade}</td>
        <td>{manage_button}</td>
      </tr>
    )
  }
}

module.exports = StudentTableRow;
