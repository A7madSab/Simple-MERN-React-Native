const fetch = require("node-fetch")

fetch('http://192.168.1.2:1000/people', {
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    },
    method: 'POST',
    mode: "cors",
    body: JSON.stringify({
        name: 'Ahmad Sabry',
        age: 21,
    })
})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.error(err))


fetch('http://192.168.1.2:1000/people')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.error(err))
