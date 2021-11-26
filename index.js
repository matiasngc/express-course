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
const morgan = require('morgan')
const app = express()

// function logger(req, res, next) {
    // console.log(`Route received: ${req.protocol}://${req.get('host')}${req.originalUrl}`)
    // next()
// }

// app.use(logger)

//Settings
app.set('appName', 'Fazt Express Tutorial')
app.set('port', 3000)
app.set('view engine', 'ejs')

//Middlewares
app.use(express.json())
app.use(morgan('dev'))

//Routes
// app.all('/user', (req, res, next) => {
    // console.log('Por aqui paso')
    // res.send('finish')
    // next()
// })

app.get('/', (req, res) => {
    const data = [{name: 'john'}, {name: 'joe'}, {name: 'cameron'}]
    res.render('index.ejs', {people: data})
})

app.get('/user', (req, res) => {
    res.json({
        username: 'Cameron',
        lastname: 'Howe'
    })
})

app.get('/user/about', (req, res) => {
    res.send('<h1>Acerca del autor</h1>')
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

app.use(express.static('./public'))

app.listen(app.get('port'), () => {
    console.log(app.get('appName'))
    console.log('Server on port', app.get('port'))
})