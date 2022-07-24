const express = require('express')
const path = require('path')
const dotevn = require('dotenv')
const { errorHandler } = require('./middleware/errorMiddleware') 
const connectDB = require('./config/db')
const cors = require('cors')
const port= process.env.PORT || 5000
 dotevn.config()
connectDB()
 
const app= express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use('/api/buyers', require('./routes/buyerRoutes') )
app.use('/api/products', require('./routes/productsRoutes'))
app.use('/api/orders', require('./routes/orderRoutes'))
app.use('/api/carts', require('./routes/cartRoutes'))
app.use('/api/v1/admins', require('./routes/adminRoutes'))


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
  
    app.get('*', (req, res) =>
      res.sendFile(
        path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
      )
    );
  } else {
    app.get('/', (req, res) => res.send('Please set to production'));
  }

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
 