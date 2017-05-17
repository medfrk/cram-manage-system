var React = require('react');

class QuizCard extends React.Component {
  constructor() {
    super();
    this.state = {
      id: [],
      date: [],
      subject: [],
      range: [],
      finish: [],
      score: [],
      note: [],
    }

    this.getSubject = this.getSubject.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
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

  handleDelete(cb) {
    fetch('http://localhost:8000/api/v1.0/basic/student/quiz/' + this.state.id + '/', {
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

  render() {
    const aStyle = {
      "width": "100%"
    }
    var delete_button = <a className="btn btn-danger btn-sm" style={aStyle} onClick={() => {this.handleDelete((results) => {this.props.handle_update('123')})}}>刪除</a>
    return (
      <div className="col-sm-3">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">{this.state.subject}</h3>
          </div>
          <div className="panel-body">
            <p>{'範圍: ' + this.state.range}</p>
            <p>{'備註: ' + this.state.note}</p>
            {delete_button}
          </div>
        </div>
      </div>
    )
  }
}

module.exports = QuizCard;
