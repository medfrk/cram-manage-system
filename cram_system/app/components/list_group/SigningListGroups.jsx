var React = require('react');

class SigningListGroups extends React.Component{
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
            <a href="http://localhost:8000/signing" onClick={() => {this.setLocalStorage('自習應到學生', 'http://localhost:8000/api/v1.0/study_manage/signing/expect/')}}>自習應到人數</a>
          </li>
          <li className="list-group-item">
            <span className="badge">{this.props.actual}</span>
            <a href="http://localhost:8000/signing" onClick={() => {this.setLocalStorage('自習已到學生', 'http://localhost:8000/api/v1.0/study_manage/signing/actual/')}}>自習已到人數</a>
          </li>
          <li className="list-group-item">
            <span className="badge">{this.props.absent}</span>
            <a href="http://localhost:8000/signing" onClick={() => {this.setLocalStorage('自習未到學生', 'http://localhost:8000/api/v1.0/study_manage/signing/absent/')}}>自習未到人數</a>
          </li>
          <li className="list-group-item">
            <span className="badge">{this.props.leave}</span>
            <a href="http://localhost:8000/signing" onClick={() => {this.setLocalStorage('自習請假學生', 'http://localhost:8000/api/v1.0/study_manage/signing/leave/')}}>自習請假人數</a>
          </li>
        </ul>
      </div>
    );
  }
}

module.exports = SigningListGroups;
