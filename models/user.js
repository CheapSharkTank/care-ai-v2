import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  userId: String,
  userName: String,
  patient_records: [
    {
      patientFirstName: String,
      patientLastName: String,
      age: Number,
      chestPain: Number,
      restBPM: Number,
      cholesterol: Number,
      maxHeart: Number,
      oldPeak: Number,
      slope: Number,
      ca: Number,
      thalassemia: Number,
    },
  ],
})

const User = mongoose.models.User || mongoose.model('User', UserSchema)

export default User
