import React, { Component } from "react";
import axios from "axios";

import paper from "../media/toppng.com-6-scrap-of-paper-351x451.png";

const Card = (props) => {
  const parts = typeof props.unspoken.username === "string" ? props.unspoken.username.split(" ") : "";
  var initials = "";
  for (var i = 0; i < parts.length; i++) {
    for (var b = 0; b < parts[i].length; b++) {
      if (b === 0) {
        initials += parts[i][0].toUpperCase();
      } else {
        initials += "*";
      }
    }
    initials += " ";
  }
  return (
    <div className="card kartu">
      <img height="100%" width="100%" className="position-absolute" src={paper} alt="scrap paper" />
      <div className="kartu-konten">
        <p className="kartu-konten-for">For: {props.unspoken.to}</p>
        <p className="kartu-konten-message">"{props.unspoken.message}"</p>
        <p className="kartu-konten-from">From: {initials}</p>
      </div>
    </div>
  );
};

export default class Unspoken extends Component {
  constructor(props) {
    super(props);

    this.state = {
      unspokens: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://ap-southeast-1.aws.data.mongodb-api.com/app/saujanashafi-poysz/endpoint/unspoken")
      .then((response) => {
        this.setState({
          unspokens: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  unspokenList() {
    return this.state.unspokens.map((currentunspoken) => {
      return <Card unspoken={currentunspoken} key={currentunspoken._id} />;
    });
  }

  render() {
    return (
      <>
        <div className="container d-flex justify-content-evenly flex-wrap">{this.unspokenList()}</div>
      </>
    );
  }
}
