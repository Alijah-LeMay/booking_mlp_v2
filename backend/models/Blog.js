const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema(
  {
    images: { type: Array },
    title: { type: String, required: true },
    category: { type: String, required: true },
    author: { type: String, required: true },
    content: { type: String, required: true },
    description: { type: String, required: false },
    published: { type: Boolean, default: false },
    contentMargin: { type: String, required: false },
  },
  { timestamps: true }
)

module.exports = Blog = mongoose.model('Blog', blogSchema)
