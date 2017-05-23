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
    }
  }

  handleCreateCourseSigning() {
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
  }

  handleCreateStudySigning() {
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
  }

  handleCourseBalance() {

  }

  handleStudyBalance() {

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

    return (
      <div className="container">
        <div className="page-header" id="banner"> </div>
        <div>
          <div className="row"><h3 style={hStyle}>產生今日點名表</h3></div>
          <div className="row">
            <a className="btn btn-primary btn-lg" style={btnStyle} onClick={() => {this.handleCreateCourseSigning()} }>課程</a>
            <a className="btn btn-primary btn-lg pull-right" style={btnStyle} onClick={() => {this.handleCreateStudySigning()} }>自習</a>
          </div>
        </div>
        <div>
          <div className="row"><h3 style={hStyle}>今日結算</h3></div>
          <div className="row">
            <a className="btn btn-primary btn-lg" style={btnStyle} onClick={() => {} }>課程</a>
            <a className="btn btn-primary btn-lg pull-right" style={btnStyle} onClick={() => {} }>自習</a>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = ConsoleMain;