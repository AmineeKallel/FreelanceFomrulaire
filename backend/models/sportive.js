import mongoose from 'mongoose'


const sportiveSchema = mongoose.Schema(
  {
    fullname: { type: String, required: true },
    club: { type: String, required: true },
    nombre: { type: String, required: true },
    classe: { type: String, required: true },
    gender: { type: String, required: true },
    specialite: { type: String, required: true },
    league: { type: String, required: true },
    hireDate: { type: Date, required: true },
    isPermanent: { type: Boolean, required: true },


  },
  {
    timestamps: true,
  }
)



const Sportive = mongoose.model('Sportive', sportiveSchema)

export default Sportive