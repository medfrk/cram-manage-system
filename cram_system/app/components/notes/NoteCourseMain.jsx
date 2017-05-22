var React = require('react');

class NoteCourseMain extends React.Component {
  constructor() {
    super();

    this.state = {
      course_name: [],
      course_id: [],
      content: [],
    }

    this.create_course_note = this.create_course_note.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.parseJSON = this.parseJSON.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.setState({
      course_name: localStorage.getItem("course_name"),
      course_id: localStorage.getItem("course_id"),
    });
  }

  create_course_note(cb) {
    fetch('/api/v1.0/note/create/course/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        owner: this.state.course_id,
        content: this.state.content,
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

  handleContentChange(e) {
    this.setState({content: e.target.value});
  }

  resetForm() {
    document.getElementById("form_create_course_note").reset();
    this.setState({
      content: [],
    });
  }

  handleSubmit() {
    this.create_course_note(this.resetForm);
  }

  render() {
    const hStyle = {
      textAlign: 'center'
    }
    return (
      <div className="container">
        <div className="page-header" id="banner"> </div>
        <div><h3 style={hStyle}>新增課程回報</h3></div>
        <div className="row">
          <div className="well bs-component">
            <form className="form-horizontal" id="form_create_course_note">
              <fieldset>
                <legend>{'課程回報 ' + '(' + this.state.course_name + '老師)'}</legend>
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

module.exports = NoteCourseMain;
