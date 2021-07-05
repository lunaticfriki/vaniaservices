require('dotenv').config({ path: 'variables.env' })
const { connect } = require('mongoose')

const connectDB = async () => {
  try {
    await connect(process.env.MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    console.log('Vaniabase connected!')
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB
