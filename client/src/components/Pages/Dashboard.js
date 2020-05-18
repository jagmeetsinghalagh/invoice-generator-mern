import React from 'react';
import { connect } from 'react-redux';

import { getInvoics } from '../../actions/invoice';
import ActionButtonGroup from '../subcomponents/ActionButtonGroup';
import TopBar from '../subcomponents/TopBar';
import Invoices from '../subcomponents/Invoices';
import NavBar from '../subcomponents/NavBar';

import Grid from '@material-ui/core/Grid';

class Dashboard extends React.Component {

    componentDidMount(){
        this.props.getInvoics(this.props.userId);
    }

    render(){
        return (
            <Grid container >
                <Grid item xs={3}>
                    <NavBar />
                </Grid>
                <Grid item container xs={9} spacing={2} style={{ marginLeft: '250px'}} >
                    <Grid item xs={12}>
                        <TopBar title="Dashboard" />
                    </Grid>
                    <Grid item container xs={12} spacing={3}>
                        <ActionButtonGroup />
                    </Grid>
                    <Grid item xs={8}>
                        <Invoices title="Recent Invoices" invoices={this.props.invoices} />
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = state => {
    return {
        userId: state.auth.userId,
        invoices: state.invoice.invoices
    }
}

export default connect(mapStateToProps,{
    getInvoics
})(Dashboard);