const Invoice = require('../Models/Invoice');
const Customer = require('../Models/Customer');

exports.getInvoices = (req,res,next) => {
    const userId = req.userId;
    Invoice.find({ createdBy: userId })
        .populate('customer')
        .then(invoices => {
            return res.json({
                invoices: invoices
            });
        })
        .catch(err => console.log(err));
}

exports.getInvoice = (req,res,next) => {
    const invoiceId = req.params.invoiceId;
    const userId = req.userId;

    Invoice.findById(invoiceId)
        .then(invoice => {
            if(!invoice){
                const error = new Error();
                error.message = 'No Invoice found';
                error.statusCode = 404;
                throw error;
            }
            if(invoice.createdBy.toString() !== userId){
                const error = new Error();
                error.message = "Not Authorized";
                error.statusCode = 401;
                throw error;
            }
            return res.json({
                invoice: invoice
            });
        })
        .catch(err => console.log(err));
}

exports.postInvoice = (req,res,next) => {
    const number = req.body.number;
    const invoiceDate = req.body.invoiceDate;
    const dueDate = req.body.dueDate;
    const amount = req.body.amount;
    const status = req.body.status;
    const items = req.body.items;
    const createdBy = req.userId;

    const customer = new Customer({
        name: req.body.customer.name,
        address: req.body.customer.address,
        email: req.body.customer.email,
        createdBy: req.userId
    });

    customer.save()
        .then(customer => {
            const invoice = new Invoice({
                createdBy: createdBy,
                number: number,
                invoiceDate: invoiceDate,
                dueDate: dueDate,
                amount: amount,
                status: status,
                items: items,
                customer: customer
            });
            return invoice.save()
        })
        .then(invoice => {
            return res.json({
                invoice: invoice
            });
        })
        .catch(err => console.log(err));
};