import React from 'react';
import { withRouter } from 'react-router-dom';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

const InvoiceTable = ({ invoices, history }) => {

    const invoiceRows = () => {
        return invoices.map(invoice => {
            return (
                <TableRow key={invoice._id} hover onClick={() => history.push(`/invoice/${invoice._id}`)}>
                    <TableCell>{invoice.number}</TableCell>
                    <TableCell>{invoice.invoiceDate}</TableCell>
                    <TableCell>{invoice.customer.name}</TableCell>
                    <TableCell>{invoice.amount}</TableCell>
                    <TableCell>{invoice.status}</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            );
        });
    }

    if(invoices.length <= 0){
        return <h4>No invoice found</h4>;
    }

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>No.</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {invoiceRows()}
            </TableBody>
        </Table>
    );
}

export default withRouter(InvoiceTable);