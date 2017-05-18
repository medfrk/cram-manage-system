var React = require('react');

class LeftListGroups extends React.Component{
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
            <span className="badge">{this.props.total}</span>
            <a href="/left/" onClick={() => {this.setLocalStorage('本日自習學生', '/api/v1.0/study_manage/signing/actual/')}}>今日自習人數</a>
          </li>
          <li className="list-group-item">
            <span className="badge">{this.props.can_left}</span>
            <a href="/left/" onClick={() => {this.setLocalStorage('可以回家的學生', '/api/v1.0/study_manage/plan/done/')}}>可以回家人數</a>
          </li>
          <li className="list-group-item">
            <span className="badge">{this.props.left}</span>
            <a href="/left/" onClick={() => {this.setLocalStorage('已經回家的學生', '/api/v1.0/study_manage/left/done/')}}>已經回家人數</a>
          </li>
          <li className="list-group-item">
            <span className="badge">{this.props.not_left}</span>
            <a href="/left/" onClick={() => {this.setLocalStorage('還沒回家的學生', '/api/v1.0/study_manage/left/not_done/')}}>還沒回家人數</a>
          </li>
        </ul>
      </div>
    );
  }
}

module.exports = LeftListGroups;
