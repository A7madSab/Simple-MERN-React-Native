import React, { Component } from 'react'
export default class App extends Component {
  state = {
    people: [],
    name: '',
    age: ''
  }
  componentDidMount() {
    fetch('http://localhost:1000/people')
      .then(response => response.json())
      .then(json => {
        if (json !== []) {
          this.setState(state => ({
            people: json
          }))
        }
      })
      .catch(err => console.error(err))
  }
  onNameChange = (e) => {
    e.persist()
    this.setState(() => ({
      name: e.target.value
    }))
  }
  onAgeChange = (e) => {
    e.persist()
    this.setState(() => ({
      age: e.target.value
    }))
  }
  addPerson = () => {
    const { name, age } = this.state
    fetch('http://localhost:1000/people', {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      method: 'POST',
      mode: "cors",
      body: JSON.stringify({
        name: name,
        age: age,
      })
    })
    this.setState(() => ({
      age: '',
      name: ''
    }))
  }
  render() {
    const { people, age, name } = this.state
    console.log("state", this.state)
    return (
      <React.Fragment>
        <div>
          {
            people.map(person => {
              return (
                <div key={person.id}>
                  <h1>Name: {person.name}</h1>
                  <p>Age: {person.age}</p>
                </div>
              )
            })
          }
        </div>
        <div>
          <input type="text" placeholder="name" onChange={this.onNameChange} value={name} />
          <input type="text" placeholder="age" onChange={this.onAgeChange} value={age} />
          <button type="submit" onClick={this.addPerson} >Add Person</button>
        </div>
      </React.Fragment>
    )
  }
}