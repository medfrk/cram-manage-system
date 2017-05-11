var React = require('react');

class PlanTableRow extends React.Component {
  constructor(){
    super();

    this.state = {
      update_at: [],
    }

  }


  render() {
    var check_button = <a className="btn btn-primary btn-xs">查看</a>
    var edit_button = <a className="btn btn-warning btn-xs">編輯</a>

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
