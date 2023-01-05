import mongoose from 'mongoose'

const connection = async (username, password) => {
  const URL = `mongodb+srv://AshutoshKumar:bhulgaya@Players.9fm9zse.mongodb.net/?retryWrites=true&w=majority`
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    mongoose.set('strictQuery', false)
    console.log('DatabAse connection sucessfully')
  } catch (error) {
    console.log('Eroor while connecting with database', error)
  }
}

export default connection
