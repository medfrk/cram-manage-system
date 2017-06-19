var React = require('react');

class QuizToPrintRow extends React.Component {
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

  done(cb) {
    fetch('/api/v1.0/basic/student/quiz/' + this.props.quiz_id + '/', {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        print_out: true,
      }),
      credentials: 'include'
    }).then(this.checkStatus)
      .then(this.parseJSON)
      .then(cb)
  }

  cancel(cb) {
    fetch('/api/v1.0/basic/student/quiz/' + this.props.quiz_id + '/', {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        print_out: false,
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
    const finish_button = <a className="btn btn-success btn-xs" onClick={() => {this.done((results) => {this.props.handle_update()})}}>完成</a>
    const cancel_button = <a className="btn btn-danger btn-xs" onClick={() => {this.cancel((results) => {this.props.handle_update()})}}>取消</a>
    const done_cancel_button = this.props.print_out ? cancel_button : finish_button
    return(
      <tr>
        <td>{this.props.owner_name}</td>
        <td>{this.props.quiz_date}</td>
        <td>{this.props.owner_grade}</td>
        <td>{this.props.owner_school}</td>
        <td>{this.props.quiz_range}</td>
        <td>{this.props.quiz_note}</td>
        <td>{done_cancel_button}</td>
      </tr>
    )
  }
}

module.exports = QuizToPrintRow;
