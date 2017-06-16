var React = require('react');

class ConsoleMain extends React.Component {
  constructor() {
    super();

    this.handleCreateCourseSigning = this.handleCreateCourseSigning.bind(this);
    this.handleCreateStudySigning = this.handleCreateStudySigning.bind(this);
    this.handleCourseBalance = this.handleCourseBalance.bind(this);
    this.handleStudyBalance = this.handleStudyBalance.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.parseJSON = this.parseJSON.bind(this);

    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    this.state = {
      date: date,
      create_course_signing_done: true,
      create_study_signing_done: true,
      course_settlement_done: true,
      study_settlement_done:true,
    }
  }

  handleCreateCourseSigning() {
    this.setState({create_course_signing_done: false});

    fetch('/api/v1.0/course_manage/create/signing/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        date: this.state.date,
      }),
      credentials: 'include'
    }).then(this.checkStatus)
      .then(this.parseJSON)
      .then(()=>this.setState({create_course_signing_done: true}))
  }

  handleCreateStudySigning() {
    this.setState({create_study_signing_done: false});

    fetch('/api/v1.0/study_manage/create/signing/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        date: this.state.date,
      }),
      credentials: 'include'
    }).then(this.checkStatus)
      .then(this.parseJSON)
      .then(()=>this.setState({create_study_signing_done: true}))
  }

  handleCourseBalance() {
    this.setState({course_settlement_done: false});

    fetch('/api/v1.0/course_bank/settlement/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        date: this.state.date,
      }),
      credentials: 'include'
    }).then(this.checkStatus)
      .then(this.parseJSON)
      .then(()=>this.setState({course_settlement_done: true}))
  }

  handleStudyBalance() {
    this.setState({study_settlement_done: false});

    fetch('/api/v1.0/study_bank/settlement/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        date: this.state.date,
      }),
      credentials: 'include'
    }).then(this.checkStatus)
      .then(this.parseJSON)
      .then(()=>this.setState({study_settlement_done: true}))
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
    const hStyle = {
      'marginTop': '30px',
      'textAlign': 'left',
    }

    const btnStyle = {
      'width': '40%'
    }

    const btn_create_course_signing = this.state.create_course_signing_done ?
      <a className="btn btn-primary btn-lg" style={btnStyle} onClick={() => {this.handleCreateCourseSigning()} }>課程</a> :
      <a className="btn btn-primary btn-lg disabled" style={btnStyle}>課程</a>

    const btn_create_study_signing = this.state.create_study_signing_done ?
      <a className="btn btn-primary btn-lg pull-right" style={btnStyle} onClick={() => {this.handleCreateStudySigning()} }>自習</a> :
      <a className="btn btn-primary btn-lg pull-right disabled" style={btnStyle}>自習</a>

    const btn_course_settlement = this.state.course_settlement_done ?
      <a className="btn btn-primary btn-lg" style={btnStyle} onClick={() => {this.handleCourseBalance()} }>課程</a> :
      <a className="btn btn-primary btn-lg disabled" style={btnStyle}>課程</a>

    const btn_study_settlement = this.state.study_settlement_done ?
      <a className="btn btn-primary btn-lg pull-right" style={btnStyle} onClick={() => {this.handleStudyBalance()} }>自習</a> :
      <a className="btn btn-primary btn-lg pull-right disabled" style={btnStyle}>自習</a>

    return (
      <div className="container">
        <div className="page-header" id="banner"> </div>
        <div>
          <div className="row"><h3 style={hStyle}>產生今日點名表</h3></div>
          <div className="row">
            {btn_create_course_signing}
            {btn_create_study_signing}
          </div>
        </div>
        <div>
          <div className="row"><h3 style={hStyle}>今日結算</h3></div>
          <div className="row">
            {btn_course_settlement}
            {btn_study_settlement}
          </div>
        </div>
      </div>
    );
  }
}

module.exports = ConsoleMain;