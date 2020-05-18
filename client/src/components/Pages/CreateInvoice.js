import React from 'react';

import NavBar from '../subcomponents/NavBar';
import TopBar from '../subcomponents/TopBar';
import SubForm from '../helpercomponents/SubForm';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


const CreateInvoice = () => {

    return (
        <Grid container>
            <Grid item xs={3}>
                <NavBar />
            </Grid>
            <Grid item container xs={9} style={{ marginLeft: '250px'}}>
                <Grid item xs={12}>
                    <TopBar title="Add New Invoice" />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4" align="right">INVOICE</Typography>
                </Grid>
                <Grid item xs={12}>
                    <form>
                        <Grid container spacing={5}>
                            <Grid item container xs={12}>
                                <Grid item xs={4}>
                                    <Typography variant="h6">Your Details</Typography>
                                    <TextField variant="outlined" name="companyName" label="Company Name" />
                                    <TextField variant="outlined" name="gst" label="GST Number" />
                                    <TextField variant="outlined" name="address" label="Address" />
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant="h6">Customer Details</Typography>
                                    <TextField variant="outlined" name="customerName" label="Customer Name" />
                                    <TextField variant="outlined" name="customerAddress" label="Address" />
                                    <TextField variant="outlined" name="email" label="Email" />
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant="h6">Invoice Details</Typography>
                                    <TextField variant="outlined" name="date" label="Date" />
                                    <TextField variant="outlined" name="dueDate" label="Due Date" />
                                    <TextField variant="outlined" name="invoiceNumber" label="Invoice Number" />
                                </Grid>
                            </Grid>
                            <SubForm />
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default CreateInvoice;