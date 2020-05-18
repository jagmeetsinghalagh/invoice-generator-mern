import React from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const PasswordChange = props => {
    return (
        <React.Fragment>
            <Typography variant="h5">Change Password</Typography>
            <Grid container>
                <Grid item xs={4}>
                    <TextField type="password" name="oldPassword" label="Old Password" variant="outlined" />
                </Grid>
                <Grid item xs={4}>
                    <TextField type="password" name="newPassword" label="New Password" variant="outlined" />
                </Grid>
                <Grid item xs={4}>
                    <TextField type="password" name="confirmPassword" label="Confirm Password" variant="outlined" />
                </Grid>
            </Grid>
            <div style={{ marginTop: '1rem'}}>
                <Button color="primary">Go Back</Button>
                <Button color="secondary" variant="contained">Change Password</Button>
            </div>
        </React.Fragment>
    );
}

export default PasswordChange;