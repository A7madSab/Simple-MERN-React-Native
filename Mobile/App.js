import React, { useState } from "react"
import { Text, TextInput, View, Button, ScrollView } from "react-native"

const App = () => {
  const [person, setPerson] = useState({ name: "", age: "" })
  const [people, setPeople] = useState([])

  const handleAddPerson = async () => {
    await fetch("http://192.168.1.2:1000/people", {
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
    const response = await fetch("http://192.168.1.2:1000/people")
    const data = await response.json()
    setPeople(data)
  }

  return (
    <ScrollView style={{ margin: 50, alignContent: "center" }}>
      <Text style={{ fontSize: 24 }}>Add Person</Text>
      <TextInput placeholder="name" onChange={e => setPerson({ ...person, name: e })} value={person.name} />
      <TextInput placeholder="age" onChange={e => setPerson({ ...person, age: e })} value={person.age} />
      <Button title="Add Person" onPress={handleAddPerson} />

      <Text style={{ fontSize: 24 }}> Get All People </Text>
      {
        people.map(person => (
          <View key={person.id} style={{ marginBottom: 15 }}>
            <Text> Name: {person.name}</Text>
            <Text> Age: {person.age}</Text>
          </View>
        ))
      }
      <Button title="Get App People" onPress={handelGetPeople} />
    </ScrollView>
  )
}

export default App