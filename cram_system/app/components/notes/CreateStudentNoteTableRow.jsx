var React = require('react');

class CreateStudentNoteTableRow extends React.Component {
  constructor(){
    super();

    this.checkStatus = this.checkStatus.bind(this);
    this.parseJSON = this.parseJSON.bind(this);
  }

  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      const error = new Error(`HTTP Error ${response.statusText}`);
      error.status = response.statusText;
      error.response = response;
      console.log(error);
      throw error;
    }
  }

  parseJSON(response) {
    return response.json();
  }

  setLocalStorage() {
    localStorage.setItem('student_name', this.props.student_name);
    localStorage.setItem('student_id', this.props.student_id);
  }

  render() {
    var note_button = <a href="/note_student/" className="btn btn-primary btn-xs" onClick={() => {this.setLocalStorage()}}>回報</a>

    return(
      <tr>
        <td>{this.props.student_number}</td>
        <td>{this.props.student_name}</td>
        <td>{this.props.student_seat}</td>
        <td>{note_button}</td>
      </tr>
    )
  }
}

module.exports = CreateStudentNoteTableRow;
