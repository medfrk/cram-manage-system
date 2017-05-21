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
    localStorage.setItem('course_id', this.props.course_id);
  }

  render() {
    const manage_button = <a href="#" className="btn btn-primary btn-xs" onClick={() => {this.setLocalStorage()}}>Manage</a>
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
