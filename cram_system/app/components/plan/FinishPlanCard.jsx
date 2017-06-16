var React = require('react');

class FinishPlanCard extends React.Component {
  constructor() {
    super();
    this.state = {
      id: [],
      date: [],
      subject: [],
      need_quiz: [],
      finish_quiz: [],
      range: [],
      finish: [],
      score: 0,
      note: [],
      score_for_update: 0,
    }

    this.getSubject = this.getSubject.bind(this);
    this.handleScoreUpdate = this.handleScoreUpdate.bind(this);
    this.handlePlanDone = this.handlePlanDone.bind(this);
    this.handlePlanCancel = this.handlePlanCancel.bind(this);
    this.handlePlanQuizDone = this.handlePlanQuizDone.bind(this);
    this.handlePlanQuizCancel = this.handlePlanQuizCancel.bind(this);
    this.handlePlanDelete = this.handlePlanDelete.bind(this);
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
      need_quiz: this.props.need_quiz,
      finish_quiz: this.props.finish_quiz,
      range: this.props.range,
      finish: this.props.finish,
      score: this.props.score,
      note: this.props.note,
    })
  }

  handleScoreUpdate(cb) {
    var now = new Date()
    fetch('/api/v1.0/basic/student/plan/' + this.state.id + '/', {
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

  handlePlanDone(cb) {
    fetch('/api/v1.0/basic/student/plan/' + this.state.id + '/', {
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

  handlePlanCancel(cb) {
    fetch('/api/v1.0/basic/student/plan/' + this.state.id + '/', {
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

  handlePlanQuizDone(cb) {
    fetch('/api/v1.0/basic/student/plan/' + this.state.id + '/', {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        finish_quiz: true,
      }),
      credentials: 'include'
    }).then(this.checkStatus)
      .then(this.parseJSON)
      .then(cb)
  }

  handlePlanQuizCancel(cb) {
    fetch('/api/v1.0/basic/student/plan/' + this.state.id + '/', {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        finish_quiz: false,
      }),
      credentials: 'include'
    }).then(this.checkStatus)
      .then(this.parseJSON)
      .then(cb)
  }

  handlePlanDelete(cb) {
    fetch('/api/v1.0/basic/student/plan/' + this.state.id + '/', {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }).then(this.checkStatus)
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
    const aStyle = {
      "width": "100%"
    }

    var update_button = <a className="btn btn-primary pull-right" onClick={() => {this.handleScoreUpdate((results) => {this.props.handle_update()})}}>登記成績</a>
    var quiz_done_button = <a className="btn btn-primary pull-right" onClick={() => {this.handlePlanQuizDone((results) => {this.props.handle_update()})}}>完成小考</a>
    var quiz_cancel_button = <a className="btn btn-default" onClick={() => {this.handlePlanQuizCancel((results) => {this.props.handle_update()})}}>取消</a>
    var done_button = <a className="btn btn-primary pull-right" onClick={() => {this.handlePlanDone((results) => {this.props.handle_update()})}}>完成讀計</a>
    var cancel_button = <a className="btn btn-default" onClick={() => {this.handlePlanCancel((results) => {this.props.handle_update()})}}>取消</a>
    var delete_button = <a className="btn btn-danger" style={aStyle} onClick={() => {this.handlePlanDelete((results) => {this.props.handle_update()})}}>Delete</a>

    const need_a_quiz = this.props.need_quiz ? 'Yes' : 'No'
    var finish_quiz_or_not = this.props.finish_quiz ? '完成' : '未完成'
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
            <p>{'需要小考: ' + need_a_quiz}</p>
            <p>{'小考成績: ' + this.props.score}</p>
            <p>{'完成小考: ' + finish_quiz_or_not}</p>
            <p>{'完成讀計: ' + finish_or_not}</p>
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
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-lg-12">
                        {quiz_done_button}
                        {quiz_cancel_button}
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-lg-12">
                        {done_button}
                        {cancel_button}
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-lg-12">
                        {delete_button}
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

module.exports = FinishPlanCard;
