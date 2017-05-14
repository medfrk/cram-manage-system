var React = require('react');

class QuizCreateListGroups extends React.Component{
  constructor() {
    super();

    this.setLocalStorage = this.setLocalStorage.bind(this);
  }

  setLocalStorage(page_header, api_url) {
    localStorage.setItem('page_header', page_header);
    localStorage.setItem('api_url', api_url);
  }

  render() {
    return (
      <div className="col-md-6">
        <ul className="list-group">
          <li className="list-group-item">
            <span className="badge">{this.props.expected}</span>
            <a href="http://localhost:8000/quiz_create/" onClick={() => {this.setLocalStorage('應登記小考學生', 'http://localhost:8000/api/v1.0/study_manage/signing/actual/')}}>應該填寫考試人數</a>
          </li>
          <li className="list-group-item">
            <span className="badge">{this.props.done}</span>
            <a href="http://localhost:8000/quiz_create/" onClick={() => {this.setLocalStorage('已登記小考學生', 'http://localhost:8000/api/v1.0/study_manage/quiz_create/done/')}}>已經填寫考試人數</a>
          </li>
          <li className="list-group-item">
            <span className="badge">{this.props.not_done}</span>
            <a href="http://localhost:8000/quiz_create/"onClick={() => {this.setLocalStorage('未登記小考學生', 'http://localhost:8000/api/v1.0/study_manage/quiz_create/not_done/')}}>還未填寫考試人數</a>
          </li>
        </ul>
      </div>
    );
  }
}

module.exports = QuizCreateListGroups;
