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

// app.use('/api/goals', require('./routes/goalsRoutes') )
app.use('/api/buyers', require('./routes/buyerRoutes') )
app.use('/api/products', require('./routes/productsRoutes'))
app.use('/api/orders', require('./routes/orderRoutes'))
app.use('/api/carts', require('./routes/cartRoutes'))
// app.use('/api/sellers', require('./routes/sellerRoutes'))
app.use('/api/v1/admins', require('./routes/adminRoutes'))
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
 