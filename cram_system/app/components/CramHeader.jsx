var React = require('react');

class CramHeader extends React.Component {
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
            <a className="navbar-brand" href="http://localhost:8000/">璽理文理補習班</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <form className="navbar-form navbar-right" role="search">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">點名 <span className="caret"></span></a>
                <ul className="dropdown-menu" role="menu">
                  <li><a href="#">自習學生</a></li>
                  <li><a href="#">上課學生</a></li>
                  <li className="divider"></li>
                  <li><a href="#">輔導老師</a></li>
                  <li className="divider"></li>
                  <li><a href="#">工讀生</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">學生 <span className="caret"></span></a>
                <ul className="dropdown-menu" role="menu">
                  <li><a href="#">自習管理</a></li>
                  <li className="divider"></li>
                  <li><a href="http://localhost:8000/quiz/">隔天小考</a></li>
                  <li><a href="http://localhost:8000/plan/">讀書計畫</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">回報 <span className="caret"></span></a>
                <ul className="dropdown-menu" role="menu">
                  <li><a href="#">學生</a></li>
                  <li><a href="#">老師</a></li>
                  <li><a href="#">課程</a></li>
                  <li><a href="#">空間</a></li>
                </ul>
              </li>
              <li><a href="#">進度報告</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

module.exports = CramHeader;
