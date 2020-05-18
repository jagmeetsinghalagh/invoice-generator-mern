import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
    head: {
        backgroundColor: 'black',
        color: 'white'
    }
});


const InvoicePDFTable = props => {
    const classes = styles();
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell className={classes.head}>S. No.</TableCell>
                    <TableCell className={classes.head}>Product Details</TableCell>
                    <TableCell className={classes.head}>Rate</TableCell>
                    <TableCell className={classes.head}>Discount</TableCell>
                    <TableCell className={classes.head}>Quantity</TableCell>
                    <TableCell className={classes.head}>Amount</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Biscuits</TableCell>
                    <TableCell>300</TableCell>
                    <TableCell>0%</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>300</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>Choclates</TableCell>
                    <TableCell>200</TableCell>
                    <TableCell>0%</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>200</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}

export default InvoicePDFTable;