var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var IndexMain = require('IndexMain');

class Index extends React.Component {
  render() {
    return (
      <div>
        <CramHeader />
        <IndexMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = Index;
