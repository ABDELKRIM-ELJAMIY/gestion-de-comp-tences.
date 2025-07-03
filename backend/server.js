const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./config/db')
dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cors())
const competanceRoutes = require('./routes/competenceRoutes')
app.use('/api/competance', competanceRoutes)

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
    console.log(`server connected en ${PORT}`)
})