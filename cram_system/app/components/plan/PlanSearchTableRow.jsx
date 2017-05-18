var React = require('react');

class PlanSearchTableRow extends React.Component {
  constructor(){
    super();

    this.state = {
      update_at: [],
    }

    this.setLocalStorage = this.setLocalStorage.bind(this);
  }

  setLocalStorage() {
    localStorage.setItem('student_name', this.props.student_name);
    localStorage.setItem('student_id', this.props.student_id);
    localStorage.setItem('plan_date', this.props.plan_date);
    localStorage.setItem('last_url', '/plan_search/');
  }

  render() {
    var check_button = <a href="/plan_finish/" className="btn btn-primary btn-xs" onClick={() => {this.setLocalStorage()}}>查看</a>
    var edit_button = <a href="/plan_create/" className="btn btn-warning btn-xs" onClick={() => {this.setLocalStorage()}}>新增</a>

    return(
      <tr>
        <td>{this.props.plan_date}</td>
        <td>{this.props.plan_all}</td>
        <td>{this.props.plan_done}</td>
        <td>{this.props.plan_not_done}</td>
        <td>{check_button}</td>
        <td>{edit_button}</td>
      </tr>
    )
  }
}

module.exports = PlanSearchTableRow;
