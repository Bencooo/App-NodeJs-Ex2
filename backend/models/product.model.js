const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        detail: {
            type: String,
            require: true,
        },
    },
    {
        timestramps: true,
    }
);

    module.exports = mongoose.model('product', productSchema)