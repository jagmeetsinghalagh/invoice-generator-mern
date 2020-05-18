import React from 'react';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ReceiptIcon from '@material-ui/icons/Receipt';
import SettingsIcon from '@material-ui/icons/Settings';
import { makeStyles } from '@material-ui/core/Styles';

const styles = makeStyles({
    buttonGird: {
        textAlign: 'center'
    },
    link: {
        textDecoration: 'none',
        color: 'black'
    }
});

const NavBar = () => {

    const classes = styles();

    return (
        <Card style={{height: '100%', position: 'fixed', top: 0, left: 0,zIndex: 1, width: '250px' }}>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid item xs={12} className={classes.buttonGird}>
                        <Button 
                            size="large" 
                            startIcon={<DashboardIcon />} 
                        >
                            <Link className={classes.link} to="/dashboard">
                                Dash Board
                            </Link>
                        </Button>
                    </Grid>
                    <Grid item xs={12} className={classes.buttonGird}>
                        <Button 
                            size="large" 
                            startIcon={<AddCircleIcon />} 
                        >
                            <Link to="/create-invoice" className={classes.link}>
                                Create New
                            </Link>
                        </Button>
                    </Grid>
                    <Grid item xs={12} className={classes.buttonGird}>
                        <Button 
                            size="large" 
                            startIcon={<ReceiptIcon />} 
                        >
                            <Link to="/invoices" className={classes.link}>
                                Invoices
                            </Link>
                        </Button>
                    </Grid>
                    <Grid item xs={12} className={classes.buttonGird}>
                        <Button 
                            size="large" 
                            startIcon={<SettingsIcon />}
                        >
                            <Link to="/settings" className={classes.link}>
                                Settings
                            </Link>
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default NavBar;