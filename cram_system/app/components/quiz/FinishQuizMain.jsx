var React = require('react');
var FinishQuizCard = require('FinishQuizCard');

class FinishQuizMain extends React.Component {
  constructor() {
    super();

    this.state = {
      name: [],
      id: [],
      quizzes: [],
      cards: [],
    }

    this.getAllQuiz = this.getAllQuiz.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.parseJSON = this.parseJSON.bind(this);
    this.storeQuizList = this.storeQuizList.bind(this);
    this.handleData = this.handleData.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
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
             .then(this.handleData)
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

  handleData() {
    var quiz_list = this.state.quizzes.quiz_list;
    var quiz_cards = quiz_list.map( (quiz, index) => {
      return (
        <FinishQuizCard
          key={quiz.id}
          id={quiz.id}
          date={quiz.date}
          subject={quiz.subject}
          range={quiz.range}
          finish={quiz.finish}
          score={quiz.score}
          note={quiz.note}
          handle_update={this.handleUpdate}
        />
      )
    })
    this.setState({
      cards: quiz_cards,
    })
  }

  handleUpdate(data){
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    this.getAllQuiz(this.state.id, date)
    // this.setState({
    //  update_at: data,
    // });
  }


  render() {
    const hStyle = {
      'textAlign': 'center',
    }
    return (
      <div className="container">
        <div className="page-header" id="banner"> </div>
        <div className="row"><h3 style={hStyle}>{this.state.name + '的小考總覽'}</h3></div>
        <div>
          {this.state.cards}
        </div>
      </div>
    )
  }
}

module.exports = FinishQuizMain;
