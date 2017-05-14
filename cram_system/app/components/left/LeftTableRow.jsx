var React = require('react');

class LeftTableRow extends React.Component {
  constructor(){
    super();

    this.state = {
      update_at: [],
    }

    this.done = this.done.bind(this);
    this.cancel = this.cancel.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.parseJSON = this.parseJSON.bind(this);
  }

  done(signing_id, cb) {
    var now = new Date()
    fetch('http://localhost:8000/api/v1.0/basic/student/study/signing/' + signing_id + '/', {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        left: true,
        left_at: now.toTimeString(),
      })
    }).then(this.checkStatus)
      .then(this.parseJSON)
      .then(cb)
  }

  cancel(signing_id, cb) {
    fetch('http://localhost:8000/api/v1.0/basic/student/study/signing/' + signing_id + '/', {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        left: false,
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
    const finish_button = <a className="btn btn-success btn-xs" onClick={() => {this.done(this.props.signing_id, (results) => {this.props.handle_update()})}}>完成</a>
    const cancel_button = <a className="btn btn-danger btn-xs" onClick={() => {this.cancel(this.props.signing_id, (results) => {this.props.handle_update()})}}>取消</a>
    const done_cancel_button = this.props.student_left ? cancel_button : finish_button

    return(
      <tr>
        <td>{this.props.student_number}</td>
        <td>{this.props.student_name}</td>
        <td>{this.props.student_seat}</td>
        <td>{done_cancel_button}</td>
      </tr>
    )
  }
}

module.exports = LeftTableRow;
