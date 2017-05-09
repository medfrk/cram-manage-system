var React = require('react');

class SigningListGroups extends React.Component{
  constructor() {
    super();
  }

  render() {
    return (
      <div className="col-md-6">
        <ul className="list-group">
          <li className="list-group-item">
            <span className="badge">{this.props.expected}</span>
            <a href="http://localhost:8000/signing">自習應到人數</a>
          </li>
          <li className="list-group-item">
            <span className="badge">{this.props.actual}</span>
            <a href="http://localhost:8000/signing_actual">自習已到人數</a>
          </li>
          <li className="list-group-item">
            <span className="badge">{this.props.absent}</span>
            <a href="http://localhost:8000/signing_absent">自習未到人數</a>
          </li>
          <li className="list-group-item">
            <span className="badge">{this.props.leave}</span>
            <a href="http://localhost:8000/signing_leave">自習請假人數</a>
          </li>
        </ul>
      </div>
    );
  }
}

module.exports = SigningListGroups;
