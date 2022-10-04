import React, { Component } from "react";
//import React from 'react'

class Properties extends Component {
  constructor(props) {
    super(props);
    this.catsAmount = this.props.numberOfCats;
    this.catsNames = this.props.namesOfCats;
  }

  render() {
    return (
      <>
        <h2>{`Tengo ${this.catsAmount} gatitos, 2 machos y una hembra.`}</h2>
        <ul>
          {this.catsNames.map((gatito) => (
            <li>{`${gatito.name} is ${gatito.sex}`}</li>
          ))}
        </ul>
      </>
    );
  }
}

Properties.defaultProps = {
  numberOfCats: 3,
  namesOfCats: [
    { name: "Guingasha", sex: "female", color: "orange" },
    { name: "Pequeñín", sex: "male", color: "silver" },
    { name: "Peluchemón", sex: "male", color: "white" },
  ],
};

export { Properties };
