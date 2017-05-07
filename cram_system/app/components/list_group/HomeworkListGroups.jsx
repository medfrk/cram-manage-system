var React = require('react');

class HomeworkListGroups extends React.Component{
  constructor() {
    super();
  }

  render() {
    return (
      <div className="col-md-6">
        <ul className="list-group">
          <li className="list-group-item">
            <span className="badge">{this.props.expected}</span>
            <a href="http://localhost:8000/homework_expect/">應該完成作業人數</a>
          </li>
          <li className="list-group-item">
            <span className="badge">{this.props.done}</span>
            <a href="http://localhost:8000/homework_done/">已經完成作業人數</a>
          </li>
          <li className="list-group-item">
            <span className="badge">{this.props.not_done}</span>
            <a href="http://localhost:8000/homework_not_done/">還未完成作業人數</a>
          </li>
        </ul>
      </div>
    );
  }
}

module.exports = HomeworkListGroups;