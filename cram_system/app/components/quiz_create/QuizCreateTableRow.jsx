var React = require('react');

class QuizCreateTableRow extends React.Component {
  constructor(){
    super();

    this.state = {
      update_at: [],
    }

    this.create_quiz_done = this.create_quiz_done.bind(this);
    this.cancel = this.cancel.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.parseJSON = this.parseJSON.bind(this);
  }

  create_quiz_done(signing_id, cb) {
    var now = new Date()
    fetch('http://localhost:8000/api/v1.0/basic/student/study/signing/' + signing_id + '/', {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        have_create_quiz: true,
        create_quiz_at: now.toTimeString(),
      })
    }).then(this.checkStatus)
      .then(this.parseJSON)
      .then(cb)
  }

  cancel(signing_id, cb) {
    var now = new Date()
    fetch('http://localhost:8000/api/v1.0/basic/student/study/signing/' + signing_id + '/', {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        have_create_quiz: false,
      })
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

  render() {
    const create_url = "http://localhost:8000/create_quiz/"
    var have_create = this.props.student_have_create_quiz
    var create_button = <a href={create_url} onClick={() => { localStorage.setItem('name', this.props.student_name) }} className="btn btn-warning btn-xs" >新增</a>
    var done_button   = <a className="btn btn-success btn-xs" onClick={() => {this.create_quiz_done(this.props.signing_id, (results) => {this.props.handle_update('123')})}}>完成</a>
    var cancel_button = <a className="btn btn-primary btn-xs" onClick={() => {this.cancel(this.props.signing_id, (results) => {this.props.handle_update('123')})}}>取消</a>

    if (have_create) {
      done_button = '完成'
    }
    else {
      cancel_button = 'xxxx'
    }

    return(
      <tr>
        <td>{this.props.student_number}</td>
        <td>{this.props.student_name}</td>
        <td>{this.props.student_seat}</td>
        <td>{create_button}</td>
        <td>{done_button}</td>
        <td>{cancel_button}</td>
      </tr>
    )
  }
}

module.exports = QuizCreateTableRow;
