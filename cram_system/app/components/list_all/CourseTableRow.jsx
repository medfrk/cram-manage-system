var React = require('react');

class CourseTableRow extends React.Component {
  constructor(){
    super();

    this.parseTime = this.parseTime.bind(this);
    this.setLocalStorage = this.setLocalStorage.bind(this);
  }

  parseTime(time) {
    return (time.split(':')[0] + ':' + time.split(':')[1])
  }

  setLocalStorage() {
    const name = this.props.course_grade + '-' + this.props.course_subject + '-' + this.props.course_teacher
    localStorage.setItem('course_name', name);
    localStorage.setItem('course_id', this.props.course_id);
  }

  setLocalStorageForCreateStudentNoteTable() {
    const name = this.props.course_grade + '-' + this.props.course_subject + '-' + this.props.course_teacher
    localStorage.setItem('page_header', name + '老師 課程學生列表');
    localStorage.setItem('api_url', '/api/v1.0/course_student/' + this.props.course_id + '/');
  }

  render() {
    const manage_button = (
      <div className="btn-group">
        <a href="#" className="btn btn-primary btn-sm">Manage</a>
        <a href="#" className="btn btn-primary btn-sm dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span className="caret"></span></a>
        <ul className="dropdown-menu">
          <li><a href="/signing_course/" onClick={() => {this.setLocalStorage()}}>簽到</a></li>
          <li><a href="#">繳費</a></li>
          <li><a href="/note_course/" onClick={() => {this.setLocalStorage()}}>回報</a></li>
          <li className="divider"></li>
          <li><a href="/create_student_note_table/" onClick={() => {this.setLocalStorageForCreateStudentNoteTable()}}>課程學生</a></li>
        </ul>
      </div>
    )

    return(
      <tr>
        <td>{this.props.course_number}</td>
        <td>{this.props.course_subject}</td>
        <td>{this.props.course_grade}</td>
        <td>{this.parseTime(this.props.course_start_at) + '~' + this.parseTime(this.props.course_end_at)}</td>
        <td>{this.props.course_teacher}</td>
        <td>{manage_button}</td>
      </tr>
    )
  }
}

module.exports = CourseTableRow;
