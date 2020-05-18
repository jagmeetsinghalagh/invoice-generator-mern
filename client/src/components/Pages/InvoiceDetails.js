import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getInvoice } from '../../actions/invoice';
import InvoicePDFView from '../subcomponents/InvoicePDFView';
import NavBar from '../subcomponents/NavBar';
import TopBar from '../subcomponents/TopBar';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const InvoiceDetails = ({ getInvoice,match }) => {

    useEffect( () => {
        const { invoiceId } = match.params;
        getInvoice(invoiceId);
    }, []);


    return (
        <Grid container >
            <Grid item xs={3}>
                <NavBar />
            </Grid>
            <Grid item container xs={9} spacing={2} style={{ marginLeft: '250px'}} >
                <Grid item xs={12}>
                    <TopBar title="Invoice Details" />
                </Grid>
                <Grid item container xs={12} spacing={3} >
                    <Grid item xs={12}>
                        <InvoicePDFView />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained">Mark Pending</Button>
                        <Button variant="contained">Download</Button>
                        <Button variant="contained">Send Email</Button>
                        <Button variant="contained">Delete</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

const mapStateToProps = state => {
    return {
        invoice: state.invoice.selectedInvoice
    }
}

export default connect(mapStateToProps,{
    getInvoice
})(InvoiceDetails);