var React = require('react');

class CramFooter extends React.Component {


  render() {
    const progressBarSuccessStyle = {
      width: '35%',
    };
    const progressBarWarningStyle = {
      width: '20%',
    };
    const progressBarDangerStyle = {
      width: '10%',
    };
    const pStyle = {
      textAlign: 'center',
    };

    return (
      <div>
        <div className="progress">
          <div className="progress-bar progress-bar-success" style={progressBarSuccessStyle}></div>
          <div className="progress-bar progress-bar-warning" style={progressBarWarningStyle}></div>
          <div className="progress-bar progress-bar-danger" style={progressBarDangerStyle}></div>
        </div>
        <div>
          <p style={pStyle}> © 2017 Designed by Wei-Tang Lin. </p>
        </div>
      </div>
    );
  }
}

module.exports = CramFooter;
