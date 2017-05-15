var React = require('react');

class PlanListGroups extends React.Component{
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
            <a href="http://localhost:8000/plan_for_today/" onClick={() => {this.setLocalStorage('應完成讀計學生', 'http://localhost:8000/api/v1.0/study_manage/signing/actual/')}}>應該完成讀計人數</a>
          </li>
          <li className="list-group-item">
            <span className="badge">{this.props.done}</span>
            <a href="http://localhost:8000/plan_for_today/" onClick={() => {this.setLocalStorage('已完成讀計學生', 'http://localhost:8000/api/v1.0/study_manage/plan/done/')}}>已經完成讀計人數</a>
          </li>
          <li className="list-group-item">
            <span className="badge">{this.props.not_done}</span>
            <a href="http://localhost:8000/plan_for_today/" onClick={() => {this.setLocalStorage('未完成讀計學生', 'http://localhost:8000/api/v1.0/study_manage/plan/not_done/')}}>還未完成讀計人數</a>
          </li>
        </ul>
      </div>
    );
  }
}

module.exports = PlanListGroups;
