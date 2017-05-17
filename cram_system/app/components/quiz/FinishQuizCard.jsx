var React = require('react');

class FinishQuizCard extends React.Component {
  constructor() {
    super();
    this.state = {
      id: [],
      date: [],
      subject: [],
      range: [],
      finish: [],
      score: 0,
      note: [],
      score_for_update: 0,
    }

    this.getSubject = this.getSubject.bind(this);
    this.handleScoreUpdate = this.handleScoreUpdate.bind(this);
    this.handleQuizDone = this.handleQuizDone.bind(this);
    this.handleQuizCancel = this.handleQuizCancel.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.parseJSON = this.parseJSON.bind(this);
    this.handleScoreChange = this.handleScoreChange.bind(this);
  }

  getSubject(subject) {
    switch (subject) {
      case 'chinese': return '國文'
      case 'english': return '英文'
      case 'math': return '數學'
      case 'physics': return '物理'
      case 'chemistry': return '化學'
      case 'biology': return '生物'
      case 'earth_science': return '地科'
      case 'geography': return '地理'
      case 'history': return '歷史'
      case 'civil_ethics_education': return '公民'
      default: return 'no match'
    }
  }

  componentWillMount() {
    this.setState({
      id: this.props.id,
      date: this.props.date,
      subject: this.getSubject(this.props.subject),
      range: this.props.range,
      finish: this.props.finish,
      score: this.props.score,
      note: this.props.note,
    })
  }

  handleScoreUpdate(cb) {
    var now = new Date()
    fetch('http://localhost:8000/api/v1.0/basic/student/quiz/' + this.state.id + '/', {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        score: this.state.score_for_update,
      }),
      credentials: 'include'
    }).then(this.checkStatus)
      .then(this.parseJSON)
      .then(cb)
  }

  handleQuizDone(cb) {
    var now = new Date()
    fetch('http://localhost:8000/api/v1.0/basic/student/quiz/' + this.state.id + '/', {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        finish: true,
      }),
      credentials: 'include'
    }).then(this.checkStatus)
      .then(this.parseJSON)
      .then(cb)
  }

  handleQuizCancel(cb) {
    var now = new Date()
    fetch('http://localhost:8000/api/v1.0/basic/student/quiz/' + this.state.id + '/', {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        finish: false,
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

  handleScoreChange(e) {
    this.setState({score_for_update: e.target.value});
  }

  render() {
    var update_button = <a className="btn btn-primary" onClick={() => {this.handleScoreUpdate((results) => {this.props.handle_update('123')})}}>登記成績</a>
    var done_button = <a className="btn btn-primary pull-right" onClick={() => {this.handleQuizDone((results) => {this.props.handle_update('123')})}}>完成</a>
    var cancel_button = <a className="btn btn-default pull-right" onClick={() => {this.handleQuizCancel((results) => {this.props.handle_update('123')})}}>取消</a>
    var finish_or_not = this.props.finish ? '完成' : '未完成'
    return (
      <div className="col-sm-4">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">{this.state.subject}</h3>
          </div>
          <div className="panel-body">
            <p>{'範圍: ' + this.props.range}</p>
            <p>{'備註: ' + this.props.note}</p>
            <p>{'成績: ' + this.props.score}</p>
            <p>{'完成: ' + finish_or_not}</p>
            <div className="row">
              <div className="well bs-component">
                <form className="form-horizontal">
                  <fieldset>
                    <div className="form-group">
                      <div className="col-lg-12">
                        <input type="text" className="form-control" id="inputScore" placeholder="Score" name="score" onChange={this.handleScoreChange}/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-lg-12">
                        {update_button}
                        {done_button}
                        {cancel_button}
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = FinishQuizCard;
