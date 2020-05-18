import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    flex: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
});

const ActionCard = props => {
    const Icon = props.icon;
    
    const classes = useStyles();

    return (
        <Card>
            <CardContent className={classes.flex}>
                <Icon fontSize="large" />
                <div>
                    <Typography variant="h5">{props.title}</Typography>
                    <Typography variant="body1">Total invoices: </Typography>
                </div>
            </CardContent>
        </Card>
    )
}

export default ActionCard;