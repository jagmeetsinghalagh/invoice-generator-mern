import React from 'react';

import Invoices from '../subcomponents/Invoices';
import TopBar from '../subcomponents/TopBar';
import NavBar from '../subcomponents/NavBar';

import Grid from '@material-ui/core/Grid';

const RecentInvoices = () => {
    return (
        <Grid container >
            <Grid item xs={3}>
                <NavBar />
            </Grid>
            <Grid item xs={9} style={{ marginLeft: '250px'}}>
                <TopBar title="Invoices" />
                <Invoices title="Invoice History" dashboard />
            </Grid>
        </Grid>
    );
}

export default RecentInvoices;