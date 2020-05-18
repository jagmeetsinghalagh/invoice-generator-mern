import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const SubForm = props => {
    return (
        <React.Fragment>
            <Grid item container xs={12}>
                <Grid item xs={4}>
                    <FormControl>
                        <Typography variant="h6">What are you selling?</Typography>
                        <RadioGroup name="selling">
                            <FormControlLabel value="product" control={<Radio />} label="Product" />
                            <FormControlLabel value="service" control={<Radio />} label="Service" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl>
                        <Typography variant="h6">Currency</Typography>
                        <RadioGroup name="currency">
                            <FormControlLabel value="inr" control={<Radio />} label="INR" />
                            <FormControlLabel value="usd" control={<Radio />} label="USD" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h6">Note for Customer</Typography>
                    <TextField variant="outlined" name="note" label="Note" />
                </Grid>
            </Grid>
            <Grid item container xs={12}>
                <Grid item xs={4}>
                    <FormControl>
                        <Typography variant="h6">Enable Tax?</Typography>
                        <RadioGroup name="enableTax">
                            <FormControlLabel value="yes" control={<Radio />} label="YES" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl>
                        <Typography variant="h6">Tax Type</Typography>
                        <RadioGroup name="currency">
                            <FormControlLabel value="inclusive" control={<Radio />} label="INCLUSIVE" />
                            <FormControlLabel value="exclusive" control={<Radio />} label="EXCLUSIVE" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h6">Tax Percent</Typography>
                    <TextField variant="outlined" name="note" label="Tax" />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default SubForm;