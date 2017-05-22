var React = require('react');

class NoteStudentMain extends React.Component {
  constructor() {
    super();

    this.state = {
      student_name: [],
      student_id: [],
      kind: 'normal',
      content: [],
    }

    this.getKind = this.getKind.bind(this);
    this.create_student_note = this.create_student_note.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.parseJSON = this.parseJSON.bind(this);
    this.handleKindChange = this.handleKindChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.setState({
      student_name: localStorage.getItem("student_name"),
      student_id: localStorage.getItem("student_id"),
    });
  }

  getKind(subject) {
    switch (subject) {
        case '課程': return 'course'
        case '點名': return 'sign'
        case '作業': return 'homework'
        case '小考': return 'quiz'
        case '讀計': return 'plan'
        case '秩序': return 'order'
        case '學費': return 'bank'
        case '一般': return 'normal'
      default: return 'no match'
    }
  }

  create_student_note(cb) {
    fetch('/api/v1.0/note/create/student/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        owner: this.state.student_id,
        content: this.state.content,
        kind: this.state.kind,
      }),
      credentials: 'include'
    }).then(this.checkStatus)
      .then(this.parseJSON)
      .then(cb)
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

  handleKindChange(e) {
    this.setState({kind: this.getKind(e.target.value) });
  }

  handleContentChange(e) {
    this.setState({content: e.target.value});
  }

  resetForm() {
    document.getElementById("form_create_student_note").reset();
    this.setState({
      content: [],
    });
  }

  handleSubmit() {
    this.create_student_note(this.resetForm);
  }

  render() {
    const hStyle = {
      textAlign: 'center'
    }
    return (
      <div className="container">
        <div className="page-header" id="banner"> </div>
        <div><h3 style={hStyle}>新增學生回報</h3></div>
        <div className="row">
          <div className="well bs-component">
            <form className="form-horizontal" id="form_create_student_note">
              <fieldset>
                <legend>{'學生回報 ' + '(' + this.state.student_name + ')'}</legend>
                <div className="form-group">
                  <label htmlFor="inputKind" className="col-sm-2 control-label">種類</label>
                  <div className="col-sm-10">
                    <select className="form-control" id="select" name="kind" onChange={this.handleKindChange}>
                      <option>一般</option>
                      <option>點名</option>
                      <option>作業</option>
                      <option>小考</option>
                      <option>讀計</option>
                      <option>秩序</option>
                      <option>學費</option>
                      <option>課程</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="textArea" className="col-sm-2 control-label">內容</label>
                  <div className="col-sm-10">
                    <textarea className="form-control" rows="5" id="textArea" name="content" onChange={this.handleContentChange}></textarea>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-10 col-sm-offset-2">
                    <a className="btn btn-primary" onClick={() => {window.history.back()}}>Back</a>
                    <a type="submit" className="btn btn-primary pull-right" onClick={this.handleSubmit}>Submit</a>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = NoteStudentMain;
