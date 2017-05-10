var React = require('react');

class QuizTableRow extends React.Component {
  constructor(){
    super();

    this.state = {
      update_at: [],
    }

    this.quiz_done = this.quiz_done.bind(this);
    this.cancel = this.cancel.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.parseJSON = this.parseJSON.bind(this);
    this.setLocalStorage = this.setLocalStorage.bind(this);
  }

  quiz_done(signing_id, cb) {
    var now = new Date()
    fetch('http://localhost:8000/api/v1.0/basic/student/study/signing/' + signing_id + '/', {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        finish_quiz: true,
        finish_quiz_at: now.toTimeString(),
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
        finish_quiz: false,
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

  setLocalStorage() {
    localStorage.setItem('student_name', this.props.student_name);
    localStorage.setItem('student_id', this.props.student_id);
  }

  render() {
    var have_done = this.props.student_have_finish_quiz
    const check_url = "http://localhost:8000/finish_quiz/"

    var check_button = <a href={check_url} onClick={() => {this.setLocalStorage()}} className="btn btn-primary btn-xs">查看</a>
    var done_button   = <a className="btn btn-success btn-xs" onClick={() => {this.quiz_done(this.props.signing_id, (results) => {this.props.handle_update('123')})}}>完成</a>
    var cancel_button = <a className="btn btn-primary btn-xs" onClick={() => {this.cancel(this.props.signing_id, (results) => {this.props.handle_update('123')})}}>取消</a>

    if (have_done) {
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
        <td>{check_button}</td>
        <td>{done_button}</td>
        <td>{cancel_button}</td>
      </tr>
    )
  }
}

module.exports = QuizTableRow;
