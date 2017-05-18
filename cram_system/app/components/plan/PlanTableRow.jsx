var React = require('react');

class PlanTableRow extends React.Component {
  constructor(){
    super();

    this.state = {
      update_at: [],
    }

    this.setLocalStorage = this.setLocalStorage.bind(this);
  }

  setLocalStorage() {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    if (today.getMonth() + 1 < 10) {
      date = today.getFullYear() + '-0' + (today.getMonth() + 1) + '-' + today.getDate();
    }
    localStorage.setItem('student_name', this.props.student_name);
    localStorage.setItem('student_id', this.props.student_id);
    localStorage.setItem('plan_date', date);
  }

  render() {
    var check_button = <a href="/plan_search/" className="btn btn-primary btn-xs" onClick={() => {this.setLocalStorage()}}>查看</a>
    var edit_button = <a href="/plan_create/" className="btn btn-warning btn-xs" onClick={() => {this.setLocalStorage()}}>新增</a>

    return(
      <tr>
        <td>{this.props.student_number}</td>
        <td>{this.props.student_name}</td>
        <td>{this.props.student_school}</td>
        <td>{this.props.student_grade}</td>
        <td>{check_button}</td>
        <td>{edit_button}</td>
      </tr>
    )
  }
}

module.exports = PlanTableRow;
