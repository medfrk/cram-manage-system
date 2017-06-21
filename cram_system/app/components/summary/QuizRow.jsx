var React = require('react');

class QuizRow extends React.Component {
  constructor(){
    super();

  }

  render() {
    return(
      <tr>
        <td>{this.props.subject}</td>
        <td>{this.props.range}</td>
        <td>{this.props.note}</td>
        <td>{this.props.score}</td>
        <td>{this.props.finish}</td>
        <td>{this.props.updated_at}</td>
      </tr>
    )
  }
}

module.exports = QuizRow;