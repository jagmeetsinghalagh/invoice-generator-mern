const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SettingsSchema = new Schema({
    companyName: {
        type: String
    },
    gstNumber: {
        type: String
    },
    billType: {
        type: String,
        default: 'Product'
    },
    currency: {
        type: String,
        default: 'INR'
    },
    customerNote: {
        type: String,
        default: 'Thank You For Shopping'
    },
    enableTax: {
        type: String,
        default: 'Yes'
    },
    taxType: {
        type: String,
        default: 'Exclusive'
    },
    taxPercent: {
        type: Number,
        default: 18
    }
});

module.exports = mongoose.model('Settings', SettingsSchema);