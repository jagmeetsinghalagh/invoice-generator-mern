import React from 'react';
import InvoicePDFTable from '../helpercomponents/InvoicePDFTable';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const InvoicePDFView = props => {

    return (
        <Card>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid item xs={4} >
                        <Typography variant="h4">Jagmeet</Typography>
                        <Typography variant="body1">Dilshad Garden</Typography>
                        <Typography variant="body2">GSTIN: 32AAUFR3713PM</Typography>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                        <Typography variant="h3">INVOICE</Typography>
                        <Typography variant="body1">Invoice No.: 0001</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="body2">Invoice Date: 02-05-20202</Typography>
                        <Typography variant="body2">Invoice Date: 02-05-20202</Typography>
                        <Typography variant="body2">Status: Fullfilled</Typography>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                        <Typography variant="body2">Bill To</Typography>
                        <Typography variant="h4">Alamjeet Singh</Typography>
                        <Typography variant="body2">Dilshad Garden</Typography>
                        <Typography variant="body2">Email: jagmeet.alagh@gmail.com</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <InvoicePDFTable />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="body2">Note: Thank you for shopping</Typography>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                        <Typography variant="body2">Sub Total: 370</Typography>
                        <Typography variant="body2">GST 18%: 66.60</Typography>
                        <Typography variant="body2">Sub Total: 436.60</Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default InvoicePDFView;