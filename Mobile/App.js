import React, { Component } from 'react';
import { Text } from 'react-native';

export default class App extends Component {
  state = {
    data: []
  }
  componentDidMount() {
    fetch("http://localhost:1000/")
      .then(dataStream => dataStream.json())
      .then(res => console.log(res))
  }
  render() {
    return (
      <Text>{JSON.stringify(this.state.data)}</Text>
    )
  }
}

// <Text>his</Text>