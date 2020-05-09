import React, { useState } from "../node_modules/react"

const App = () => {
  const [person, setPerson] = useState({ name: "", age: "" })
  const [people, setPeople] = useState([])

  const handleAddPerson = async () => {
    await fetch("http://localhost:1000/people", {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        name: person.name,
        age: person.age
      })
    })
  }

  const handelGetPeople = async () => {
    const response = await fetch("http://localhost:1000/people")
    const data = await response.json()
    setPeople(data)
  }

  return (
    <div>
      <h1>Add a New Person</h1>
      <input placeholder="name" onChange={e => setPerson({ ...person, name: e.target.value, })} value={person.name} />
      <input placeholder="age" onChange={e => setPerson({ ...person, age: e.target.value, })} value={person.age} />
      <button onClick={handleAddPerson}>Add Person</button>
      <br />
      <h1> Get All People </h1>
      {
        people.map(person => (
          <div key={person.id}>
            <span> Name: {person.name}</span>
            <span> Age: {person.age}</span>
            <br />
          </div>
        ))
      }
      <button onClick={handelGetPeople}>Get App People</button>
    </div>
  )
}

export default App