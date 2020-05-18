const express = require('express');
const InvoiceControllers = require('../Controllers/invoiceControllers');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = express.Router();

router.post('/add', isAuthenticated, InvoiceControllers.postInvoice );

router.get('/invoices', isAuthenticated, InvoiceControllers.getInvoices );

router.get('/invoice/:invoiceId', isAuthenticated, InvoiceControllers.getInvoice );

module.exports = router;