var React = require('react');

class QuizListGroups extends React.Component{
  constructor() {
    super();
  }

  render() {
    return (
      <div className="col-md-6">
        <ul className="list-group">
          <li className="list-group-item">
            <span className="badge">{this.props.expected}</span>
            <a href="http://localhost:8000/quiz_expect/">應該完成考試人數</a>
          </li>
          <li className="list-group-item">
            <span className="badge">{this.props.done}</span>
            <a href="http://localhost:8000/quiz_done/">已經完成考試人數</a>
          </li>
          <li className="list-group-item">
            <span className="badge">{this.props.not_done}</span>
            <a href="http://localhost:8000/quiz_not_done/">還未完成考試人數</a>
          </li>
        </ul>
      </div>
    );
  }
}

module.exports = QuizListGroups;
