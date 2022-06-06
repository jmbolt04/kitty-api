const express = require('express')
const app = express()
const PORT = 8000

const kitties = {
        'tana': {
        'age': 3,
        'color': 'tuxedo',
        'social': true
    },
        'pesto': {
            'age': 5,
            'color': 'tri',
            'social': false
        },
        'unknown': {
            'age': 0,
            'color': 'unknown',
            'social': 'unknown'
        }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const kittiesName = request.params.name.toLowerCase()
    if(kitties[kittiesName]){
        response.json(kitties[kittiesName])
    }else{
        response.json(kitties['unknown'])
    }
    
})

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})