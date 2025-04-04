var React = require("react");

class New extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
        <h2>Add artist!</h2>
            <form method="POST" action="/artists">
                <div className="form-group row">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input name="name" className="form-control" required/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Img URL</label>
                    <div className="col-sm-10">
                        <input name="photo_url" className="form-control" required/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Nationality</label>
                    <div className="col-sm-10">
                        <input name="nationality" className="form-control" required/>
                    </div>
                </div>
                <button type="submit" className="btn btn-dark d-block mx-auto">Submit</button>
            </form>
        </body>
      </html>
    );
  }
}

module.exports = New;