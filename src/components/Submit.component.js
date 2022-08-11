import React, { Component } from "react";
import axios from "axios";

export default class Submit extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onChangeTo = this.onChangeTo.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      message: "",
      to: "",
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeMessage(e) {
    this.setState({
      message: e.target.value,
    });
  }

  onChangeTo(e) {
    this.setState({
      to: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const unspoken = {
      username: this.state.username,
      message: this.state.message,
      to: this.state.to,
    };

    console.log(unspoken);

    axios.post("https://ap-southeast-1.aws.data.mongodb-api.com/app/saujanashafi-poysz/endpoint/unspoken/add", unspoken).then((res) => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <div className="container pt-2">
        <h3>Submit Unspoken</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Sender: </label>
            <input type="text" required className="form-control" value={this.state.username} onChange={this.onChangeUsername} />
          </div>
          <div className="form-group">
            <label>Message: </label>
            <textarea type="text" required className="form-control" rows="3" value={this.state.message} onChange={this.onChangeMessage} />
          </div>
          <div className="form-group">
            <label>To: </label>
            <input type="text" required className="form-control" value={this.state.to} onChange={this.onChangeTo} />
          </div>

          <div className="form-group mt-2">
            <input type="submit" value="Submit Unspoken" className="btn btn-primary pt-2" />
          </div>
          <p>*your name will only shown as your initials at the homepage but will still appear on our database</p>
        </form>
      </div>
    );
  }
}
