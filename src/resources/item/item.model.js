import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50
  },
  status: {
    default: "active"
    type: String,
    required: true,
    enum: ["active", "complete", "pastdue"]
  }
}, { timestamps: true })
export const Item = mongoose.model('item', itemSchema)
