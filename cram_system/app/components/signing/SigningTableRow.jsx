var React = require('react');

class SigningTableRow extends React.Component {
  constructor(){
    super();

    this.state = {
      update_at: [],
    }

    this.sign_in = this.sign_in.bind(this);
    this.leave = this.leave.bind(this);
    this.cancel = this.cancel.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.parseJSON = this.parseJSON.bind(this);

  }

  sign_in(signing_id, cb) {
    var now = new Date()
    fetch('http://localhost:8000/api/v1.0/basic/student/study/signing/' + signing_id + '/', {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        sign: true,
        sign_at: now.toTimeString(),
      }),
      credentials: 'include'
    }).then(this.checkStatus)
      .then(this.parseJSON)
      .then(cb)
  }

  leave(signing_id, cb) {
    var now = new Date()
    fetch('http://localhost:8000/api/v1.0/basic/student/study/signing/' + signing_id + '/', {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        leave: true
      }),
      credentials: 'include'
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
        sign: false,
        leave: false
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

  render() {
    var have_come = (this.props.student_sign || this.props.student_leave)
    var sign_button   = <a className="btn btn-warning btn-xs" onClick={() => {this.sign_in(this.props.signing_id, (results) => {this.props.handle_update('123')})}}>簽到</a>
    var leave_button  = <a className="btn btn-success btn-xs" onClick={() => {this.leave(this.props.signing_id, (results) => {this.props.handle_update('123')})}}>請假</a>
    var cancel_button = <a className="btn btn-primary btn-xs" onClick={() => {this.cancel(this.props.signing_id, (results) => {this.props.handle_update('123')})}}>取消</a>

    if (have_come) {
      if (this.props.student_sign) {
        leave_button = 'xxxx'
      }
      else {
        sign_button = 'xxxx'
      }
    }

    return(
      <tr>
        <td>{this.props.student_number}</td>
        <td>{this.props.student_name}</td>
        <td>{this.props.student_seat}</td>
        <td>{(have_come&&this.props.student_sign) ? '簽到' : sign_button}</td>
        <td>{(have_come&&this.props.student_leave) ? '請假' : leave_button}</td>
        <td>{have_come ? cancel_button : 'xxxx'}</td>
      </tr>
    )
  }
}

module.exports = SigningTableRow;
