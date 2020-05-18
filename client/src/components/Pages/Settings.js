import React from 'react';

import NavBar from '../subcomponents/NavBar';
import TopBar from '../subcomponents/TopBar';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

const SettingsComponent = () => {
    return (
        <Grid container>
            <Grid item xs={3}><NavBar /></Grid>
            <Grid item container xs={9} style={{ marginLeft: '250px'}}>
                <Grid item xs={12}><TopBar title="Settings"/></Grid>
                <Grid item xs={12}>
                    <Typography variant="h4" align="center">Jagmeet Singh</Typography>
                </Grid>
                <Grid item container xs={12}>
                    <Grid item xs={4}>
                        <List>
                            <ListItem>
                                <ListItemText>Company Name: </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>GSTIN: </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>Company Address: </ListItemText>
                            </ListItem>
                        </List>
                        <Button size="medium" color="primary" variant="outlined">EDIT SETTINGS</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <List>
                            <ListItem>
                                <ListItemText>Billable Type: Product</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>Default Currency: INR</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>Default Customer Note: Thank You For Shopping</ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={4}>
                        <List>
                            <ListItem>
                                <ListItemText>Enable Tax: Yes</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>Default Tax Type: Exclusive</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>Default Tax Percent: 18%</ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
    //             <button className="btn btn-primary">Edit Settings</button>
    
}

export default SettingsComponent;