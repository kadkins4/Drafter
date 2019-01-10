const app = require('express')()
const http = require('http').Server(app)

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/../src/App.vue')
})

http.listen(3001, () => {
    console.log('listening on port 3001')
})
