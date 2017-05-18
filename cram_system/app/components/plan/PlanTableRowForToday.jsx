var React = require('react');

class PlanTableRowForToday extends React.Component {
  constructor(){
    super();

    this.state = {
      update_at: [],
    }

    this.done = this.done.bind(this);
    this.cancel = this.cancel.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.parseJSON = this.parseJSON.bind(this);
    this.setLocalStorage = this.setLocalStorage.bind(this);
  }

  done(signing_id, cb) {
    var now = new Date()
    fetch('/api/v1.0/basic/student/study/signing/' + signing_id + '/', {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        finish_plan: true,
        finish_plan_at: now.toTimeString(),
      }),
      credentials: 'include'
    }).then(this.checkStatus)
      .then(this.parseJSON)
      .then(cb)
  }

  cancel(signing_id, cb) {
    fetch('/api/v1.0/basic/student/study/signing/' + signing_id + '/', {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        finish_plan: false,
      }),
      credentials: 'include'
    }).then(this.checkStatus)
      .then(this.parseJSON)
      .then(cb)
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
    localStorage.setItem('plan_date', this.props.student_plan['date']);
    localStorage.setItem('last_url', this.props.back_url);
  }

  render() {
    const check_button = <a href="/plan_finish/" className="btn btn-primary btn-xs" onClick={() => {this.setLocalStorage()}}>查看</a>
    const finish_button = <a className="btn btn-success btn-xs" onClick={() => {this.done(this.props.signing_id, (results) => {this.props.handle_update()})}}>完成</a>
    const cancel_button = <a className="btn btn-danger btn-xs" onClick={() => {this.cancel(this.props.signing_id, (results) => {this.props.handle_update()})}}>取消</a>
    const done_cancel_button = this.props.student_finish_plan ? cancel_button : finish_button
    const finish_previous = this.props.finish_previous ? '未完成' : '完成'
    return(
      <tr>
        <td>{this.props.student_number}</td>
        <td>{this.props.student_name}</td>
        <td>{this.props.student_seat}</td>
        <td>{finish_previous}</td>
        <td>{this.props.student_plan['plan_all'] + '/' + this.props.student_plan['plan_done'] + '/' + this.props.student_plan['plan_not_done']}</td>
        <td>{check_button}</td>
        <td>{done_cancel_button}</td>
      </tr>
    )
  }
}

module.exports = PlanTableRowForToday;
