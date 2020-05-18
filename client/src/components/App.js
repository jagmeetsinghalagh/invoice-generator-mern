import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Pages/Home.js';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Settings from './Pages/Settings';
import CreateInvoice from './Pages/CreateInvoice';
import RecentInvoices from './Pages/RecentInvoices';
import InvoiceDetails from './Pages/InvoiceDetails';
import EditSettings from './Pages/EditSettings';

const App = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component = { Home} />
            <Route path="/login" exact component = { Login } />
            <Route path="/dashboard" component = { Dashboard } />
            <Route path="/settings" exact component = { Settings } />
            <Route path="/invoices" component = { RecentInvoices } />
            <Route path="/invoice/:invoiceId" exact component = { InvoiceDetails } />
            <Route path="/create-invoice" component = { CreateInvoice } />
            <Route path="/settings/edit" component = { EditSettings } />
        </BrowserRouter>
        
    );
}

export default App;