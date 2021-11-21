// const http = require('http')

// const server = http.createServer((req, res) => {
//     res.status = 200
//     res.setHeader('Content-Type', 'text/plain')
//     res.end('Hello World')
// })

// server.listen(3000, () => {
//     console.log('Server on port 3000')
// })

const express = require('express')
const app = express()

app.use(express.json())

app.all('/user', (req, res, next) => {
    console.log('Por aqui paso')
    // res.send('finish')
    next()
})

app.get('/user', (req, res) => {
    res.json({
        username: 'Cameron',
        lastname: 'Howe'
    })
})

app.post('/user/:idDeUsuario', (req, res) => {
    // console.log(req.body.username)
    // console.log(req.body.lastname)
    console.log(req.body)
    // console.log(req.params.idDeUsuario)
    console.log(req.params)
    res.send(`User ${req.params.idDeUsuario}`)
})

app.put('/user/:id', (req, res) => {
    console.log(req.body)
    res.send(`User ${req.params.id} updated`)
})

app.delete('/user/:userId', (req, res) => {
    res.send(`User ${req.params.userId} deleted`)
})

app.listen(5000, () => {
    console.log('Server on port 5000')
})