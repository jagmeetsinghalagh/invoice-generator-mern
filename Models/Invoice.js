const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InvoiceSchema = new Schema({
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    invoiceDate: {
        type: Date,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    items: {
        type: [{
            name: {
                type: String,
                required: true
            },
            rate: {
                type: Number,
                required: true
            },
            discount: {
                type: Number,
                default: 0
            },
            quantity: {
                type: Number,
                default: 1
            },
            amount: {
                type: Number,
                required: true
            }
        }],
        required: true
    },
    customer: {
        type: mongoose.Types.ObjectId,
        ref: 'Customer',
        required: true
    }
});

module.exports = mongoose.model('Invoice',InvoiceSchema)