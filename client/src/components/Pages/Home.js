import React from 'react';
import Grid from '@material-ui/core/Grid';

import Signup from '../subcomponents/Signup';

const Home = () => {
    return (
        <Grid container>
            <Grid item xs={12} md={8} lg={8}></Grid>
            <Grid item xs={12} md={4} lg={4} >
                <Signup />
            </Grid>
        </Grid>
    );
}

export default Home;