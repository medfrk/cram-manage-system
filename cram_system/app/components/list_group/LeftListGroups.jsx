var React = require('react');

class LeftListGroups extends React.Component{
  constructor() {
    super();
  }

  render() {
    return (
      <div className="col-md-6">
        <ul className="list-group">
          <li className="list-group-item">
            <span className="badge">{this.props.total}</span>
            <a href="#">今日自習人數</a>
          </li>
          <li className="list-group-item">
            <span className="badge">{this.props.can_left}</span>
            <a href="#">可以回家人數</a>
          </li>
          <li className="list-group-item">
            <span className="badge">{this.props.left}</span>
            <a href="#">已經回家人數</a>
          </li>
          <li className="list-group-item">
            <span className="badge">{this.props.not_left}</span>
            <a href="#">還沒回家人數</a>
          </li>
        </ul>
      </div>
    );
  }
}

module.exports = LeftListGroups;
