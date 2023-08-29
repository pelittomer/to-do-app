const mongoose = require('mongoose')


const connectDB = async () => {
    const DB_URI = "MONGODB_URI"
    try {
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Database connected!")
    } catch (error) {
        console.log("Database failed to connect!", error)
    }
}

module.exports = connectDB