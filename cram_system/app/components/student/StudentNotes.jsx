var React = require('react');

class StudentNotes extends React.Component {
  constructor() {
    super();
  }


  render() {
    const hStyle = {
      'textAlign': 'center',
    }

    return (
      <div>
        <div className="row"> <h5 style={hStyle}>Notes</h5></div>
        <div className="row">
          <div className="col-sm-12">
            <table className="table table-striped table-hover ">
              <thead>
                <tr>
                  <th>種類</th>
                  <th>內容</th>
                  <th>作者</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>course</td>
                  <td>Behave good</td>
                  <td>wtlin</td>
                </tr>
                <tr>
                  <td>course</td>
                  <td>Behave good</td>
                  <td>wtlin</td>
                </tr>
                <tr>
                  <td>course</td>
                  <td>Behave good</td>
                  <td>wtlin</td>
                </tr>
                <tr>
                  <td>course</td>
                  <td>Behave good</td>
                  <td>wtlin</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = StudentNotes;
