var React = require('react');

class CreateQuizMain extends React.Component {
  constructor() {
    super();

    this.state = {
      name: []
    }
  }

  componentDidMount() {
    this.setState({
      name: localStorage.getItem("name")
    });
  }

  render() {
    return (
      <div className="container">
        <div className="page-header" id="banner"> </div>
        <h1>CreateQuizMain</h1>
        <p>{this.state.name}</p>
      </div>
    )
  }
}

module.exports = CreateQuizMain;
