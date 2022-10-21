const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb+srv://MaxKottong:Malevolent@cluster0.ew4fije.mongodb.net/deep-thoughts?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

module.exports = mongoose.connection;