var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var SigningActualMain = require('SigningActualMain');

class SigningActual extends React.Component {
  render() {
    return (
      <div>
        <CramHeader />
        <SigningActualMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = SigningActual;
