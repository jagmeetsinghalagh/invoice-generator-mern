import React from 'react';

import TopBar from '../subcomponents/TopBar';
import NavBar from '../subcomponents/NavBar';
import SubForm from '../helpercomponents/SubForm';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const EditSettings = props => {
    return (
        <Grid container>
            <Grid item xs={3}>
                <NavBar />
            </Grid>
            <Grid item container xs={9} style={{ marginLeft: '250px'}}>
                <Grid item xs={12}>
                    <TopBar title="Edit Settings" />
                </Grid>
                <Grid item xs={12}>
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
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5">Default Invoice Settings</Typography>
                    <Grid container>
                        <Grid item xs={4}>
                            <TextField name="companyName" label="CompanyName" variant="outlined" />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField name="gst" label="GST Number" variant="outlined" />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField name="companyAddress" label="companyAddress" variant="outlined" />
                        </Grid>
                    </Grid>
                </Grid>
                <SubForm />
                <div style={{ marginTop: '1rem'}}>
                    <Button color="primary">Go Back</Button>
                    <Button color="secondary" variant="contained">Save</Button>
                </div>
            </Grid>
        </Grid>
    );
}

export default EditSettings;