import React from 'react';

import ActionCard from '../helpercomponents/ActionCard';

import Grid from '@material-ui/core/Grid';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const ActionButtonGroup = props => {
    return (
        <React.Fragment>
            <Grid item xs={4}>
                <ActionCard icon={AddCircleOutlineIcon} title="Create New" />
            </Grid>
            <Grid item xs={4}>
                <ActionCard icon={CheckCircleIcon} title="Fulfilled" />
            </Grid>
            <Grid item xs={4}>
                <ActionCard icon={QueryBuilderIcon} title="Pending" />
            </Grid>
        </React.Fragment>
    );
}

export default ActionButtonGroup;