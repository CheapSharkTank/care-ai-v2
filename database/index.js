import mongoose from 'mongoose'

const connectToDb = async () => {
  try {
    const connectionUrl = process.env.MONGODB_URI

    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(connectionUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      console.log('Database is connected')
    } else {
      console.log('Database is already connected')
    }
  } catch (err) {
    console.error('Failed to connect to the Database:', err)
    throw new Error('Database connection error')
  }
}

export default connectToDb
