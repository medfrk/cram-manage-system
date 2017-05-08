var React = require('react');
var QuizCard = require('QuizCard');

class QuizMain extends React.Component {
  constructor() {
    super();

    this.state = {
      name: [],
      id: [],
      quizzes: [],
    }

    this.getAllQuiz = this.getAllQuiz.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.parseJSON = this.parseJSON.bind(this);
    this.storeQuizList = this.storeQuizList.bind(this);


  }

  // Before the first render, set state by localStorage.
  componentWillMount() {
    this.setState({
      name: localStorage.getItem("student_name"),
      id: localStorage.getItem("student_id")
    });
  }

  // After the first render, fetch the api to get quiz list.
  componentDidMount() {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    this.getAllQuiz(this.state.id, date);
  }

  getAllQuiz(student_id, specific_date) {
    return fetch('http://localhost:8000/api/v1.0/study_manage/quiz_list/' + student_id + '/' + specific_date + '/', {
             accept: 'application/json',
             method: 'get',
           }).then(this.checkStatus)
             .then(this.parseJSON)
             .then(this.storeQuizList)
  }

  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      const error = new Error(`HTTP Error ${response.statusText}`);
      error.status = response.statusText;
      error.response = response;
      console.log(error);
      throw error;
    }
  }

  parseJSON(response) {
    return response.json();
  }

  storeQuizList(data) {
    this.setState({
      quizzes: data,
    });
  }

  render() {
    console.log('render' + this.state.id);
    return (
      <div className="container">
        <div className="page-header" id="banner"> </div>
        <h1>QuizMain</h1>
        <p>{this.state.id}</p>
        <p>{this.state.name}</p>
        <QuizCard />
        <QuizCard />
        <QuizCard />
        <QuizCard />
        <QuizCard />
        <QuizCard />
        <QuizCard />
      </div>
    )
  }
}

module.exports = QuizMain;
