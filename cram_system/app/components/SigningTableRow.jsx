var React = require('react');

class SigningTableRow extends React.Component {
  constructor(){
    super();

    this.state = {
      update_at: [],
    }

    this.sign_in = this.sign_in.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.parseJSON = this.parseJSON.bind(this);

  }

  sign_in(signing_id) {
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
      })
    }).then(this.checkStatus)
      .then(this.parseJSON)
      .then(this.props.handle_update({'updated_at':now}))
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
    console.log(response);
    return response.json();
  }

  render() {
    var have_come = (this.props.student_sign || this.props.student_leave)
    var sign_button = <button className="btn btn-success btn-xs" onClick={() => {this.sign_in(this.props.signing_id)} }>簽到</button>
    var leave_button = <a href="#" className="btn btn-warning btn-xs">請假</a>

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
      </tr>
    )
  }
}

module.exports = SigningTableRow;
