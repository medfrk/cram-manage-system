var React = require('react');

class CramHeader extends React.Component {
  constructor() {
    super();

    this.setLocalStorageForCreateStudentNoteTable = this.setLocalStorageForCreateStudentNoteTable.bind(this);
  }


  setLocalStorageForCreateStudentNoteTable() {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var day = today.getDay();

    if (day==0){
      day = 7
    }

    localStorage.setItem('page_header', date + ' 自習學生列表');
    localStorage.setItem('api_url', '/api/v1.0/study_student/' + day + '/');
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">璽理文理補習班</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <form className="navbar-form navbar-right" role="search">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="/all_student/">學生</a></li>
              <li><a href="/all_course/">課程</a></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">自習 <span className="caret"></span></a>
                <ul className="dropdown-menu" role="menu">
                  <li><a href="/create_student_note_table/" onClick={() => {this.setLocalStorageForCreateStudentNoteTable()}}>學生回報</a></li>
                  <li className="divider"></li>
                  <li><a href="/plan/">讀書計畫</a></li>
                </ul>
              </li>
              <li><a href="/console/">Manage</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

module.exports = CramHeader;
