//mongoose schema
const mongoose = require("mongoose");

const recipieSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        description: String,
        img: String,
    }
)

module.exports = mongoose.model('Recipie', recipieSchema)