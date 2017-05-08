var React = require('react');

class QuizCard extends React.Component {
  render() {
    return (
      <div className="col-md-3">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Panel primary</h3>
          </div>
          <div className="panel-body">
            Panel content
          </div>
        </div>
      </div>
    )
  }
}

module.exports = QuizCard;
