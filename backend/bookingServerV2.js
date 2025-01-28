const express = require('express')
require('dotenv').config()

const connectDB = require('./config/db')
const path = require('path')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const blogRoutes = require('./routes/blogRoutes')

const app = express()

// Connect Database
connectDB()

// Init Middleware
// No longer body-parser
app.use(express.json({ extended: false }))

//app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/blog', blogRoutes)
app.use('/api/send', require('./routes/sendEmail'))

app.get('/api/config/devMode', (req, res) => {
  res.send(process.env.NODE_ENV)
})
app.get('/api/config/GAMeasure', (req, res) => {
  if (process.env.NODE_ENV == 'development') {
    console.log('node environment in development mode')
    res.send(process.env.REACT_GA_TEST)
  } else {
    console.log('node environment in production mode')
    res.send(process.env.REACT_GA_LIVE)
  }
})

//

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(dirname, '/frontend/build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(dirname, 'frontend', 'build', 'index.html'))
  })
} else {
  app.get('/', (req, res) => {
    res.send('API is running...')
  })
}
//
// Make sure middleware is after all other routes
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5055

app.listen(PORT, () =>
  console.log(`Server started in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
