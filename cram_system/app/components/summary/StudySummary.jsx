var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var StudySummaryMain = require('StudySummaryMain');

class StudySummary extends React.Component {
  render() {
    return (
      <div>
        <CramHeader loginState={this.props.loginState} userName={this.props.userName} />
        <StudySummaryMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = StudySummary;
