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
    localStorage.setItem('student_name', this.props.student_name);
  }

  render() {
    var manage_button = (
      <div className="btn-group">
        <a href="#" className="btn btn-primary btn-xs">Manage</a>
        <a href="#" className="btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span className="caret"></span></a>
        <ul className="dropdown-menu">
          <li><a href="/student_dashboard/" onClick={() => {this.setLocalStorage()}}>基本資料</a></li>
          <li><a href="/study_summary/" onClick={() => {this.setLocalStorage()}}>自習報表</a></li>
          <li><a href="/note_student/" onClick={() => {this.setLocalStorage()}}>回報</a></li>
        </ul>
      </div>
    )

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
