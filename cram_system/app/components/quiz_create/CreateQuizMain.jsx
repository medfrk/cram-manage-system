var React = require('react');

class CreateQuizMain extends React.Component {
  constructor() {
    super();

    this.state = {
      name: [],
      id: [],
      subject: 'chinese',
      range: '',
      note: '',
    }

    this.create_quiz = this.create_quiz.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.parseJSON = this.parseJSON.bind(this);
    this.getSubject = this.getSubject.bind(this);
    this.handleRangeChange = this.handleRangeChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleNoteChange = this.handleNoteChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  componentDidMount() {
    this.setState({
      name: localStorage.getItem("student_name"),
      id: localStorage.getItem("student_id")
    });
  }

  getSubject(subject) {
    switch (subject) {
      case '國文': return 'chinese'
      case '英文': return 'english'
      case '數學': return 'math'
      case '物理': return 'physics'
      case '化學': return 'chemistry'
      case '生物': return 'biology'
      case '地科': return 'earth_science'
      case '地理': return 'geography'
      case '歷史': return 'history'
      case '公民': return 'civil_ethics_education'
      default: return 'no match'
    }
  }

  create_quiz(cb) {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    fetch('/api/v1.0/basic/student/quiz/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        owner: this.state.id,
        date: date,
        subject: this.state.subject,
        range: this.state.range,
        note: this.state.note,
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

  handleRangeChange(e) {
    this.setState({range: e.target.value});
  }

  handleSubjectChange(e) {
    this.setState({subject: this.getSubject(e.target.value) });
  }

  handleNoteChange(e) {
    this.setState({note: e.target.value});
  }

  resetForm() {
    document.getElementById("form_create_quiz").reset();
    this.setState({
      subject: 'chinese',
      range: '',
      note: '',
    });
  }

  handleSubmit() {
    this.create_quiz(this.resetForm);
  }

  render() {
    const hStyle = {
      'textAlign': 'center',
    }

    return (
      <div className="container">
        <div className="page-header" id="banner"> </div>
        <div><h3 style={hStyle}>{'新增'+this.state.name+'的明天小考'}</h3></div>
        <div className="row">
          <div className="well bs-component">
            <form className="form-horizontal" id="form_create_quiz">
              <fieldset>
                <legend>{this.state.name+'小考'}</legend>
                <div className="form-group">
                  <label htmlFor="inputSubject" className="col-lg-2 control-label">科目</label>
                  <div className="col-lg-10">
                    <select className="form-control" id="select" name="subject" onChange={this.handleSubjectChange}>
                      <option>國文</option>
                      <option>英文</option>
                      <option>數學</option>
                      <option>物理</option>
                      <option>化學</option>
                      <option>生物</option>
                      <option>地科</option>
                      <option>地理</option>
                      <option>歷史</option>
                      <option>公民</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputRange" className="col-lg-2 control-label">範圍</label>
                  <div className="col-lg-10">
                    <input type="text" className="form-control" id="inputRange" placeholder="Range" name="range" onChange={this.handleRangeChange}/>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="textArea" className="col-lg-2 control-label">備註</label>
                  <div className="col-lg-10">
                    <textarea className="form-control" rows="3" id="textArea" name="note" onChange={this.handleNoteChange}></textarea>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-lg-10 col-lg-offset-2">
                    <a className="btn btn-primary" onClick={() => {window.history.back()}}>Back</a>
                    <a type="submit" className="btn btn-primary pull-right" onClick={this.handleSubmit}>Submit</a>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = CreateQuizMain;
