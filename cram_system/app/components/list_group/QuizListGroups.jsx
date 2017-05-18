var React = require('react');

class QuizListGroups extends React.Component{
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
            <a href="/quiz/" onClick={() => {this.setLocalStorage('應完成考試學生', '/api/v1.0/study_manage/signing/actual/')}}>應該完成考試人數</a>
          </li>
          <li className="list-group-item">
            <span className="badge">{this.props.done}</span>
            <a href="/quiz/" onClick={() => {this.setLocalStorage('已完成考試學生', '/api/v1.0/study_manage/quiz/done/')}}>已經完成考試人數</a>
          </li>
          <li className="list-group-item">
            <span className="badge">{this.props.not_done}</span>
            <a href="/quiz/" onClick={() => {this.setLocalStorage('未完成考試學生', '/api/v1.0/study_manage/quiz/not_done/')}}>還未完成考試人數</a>
          </li>
        </ul>
      </div>
    );
  }
}

module.exports = QuizListGroups;
