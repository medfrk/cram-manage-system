var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var SigningMain = require('SigningMain');

class Signing extends React.Component {
  render() {
    return (
      <div>
        <CramHeader loginState={this.props.loginState} userName={this.props.userName}/>
        <SigningMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = Signing;
