import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()
const router = express.Router()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

const log = (req, res, next) => {
  console.log('logging')
  next()
}

router.get('/me', (req, res) => {
  res.send({ me: 'hello'})
})

// Cats
const routes = ['get /cat', 'get /cat/:id', 'post /cat', 'put /cat/:id', 'delete /cat/:id']

app.use('/api', router)

// CRUD
//Read
app.get('/data', [log, log, log], (req, res) => {
  res.send({ data: [1, 2, 3] })
})

//Update
app.put('/data', (req, res) => {

})

// Delete
app.delete('/data', (req, res) => {

})

//Create
app.post('/data', (req, res) => {
  console.log(req.body)
  res.send(req.body)
})

export const start = () => {
  app.listen(3000, () => {
    console.log("server is on 3000")
  })
}
