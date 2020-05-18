import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import { loginUser } from '../../actions/auth';
import RenderInput from '../helpercomponents/RenderInput';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Login = props => {

    const onSubmitHandler = values => {
        props.loginUser(values,props.history);
    }

    if(props.isAuthenticated){
        return <Redirect to="/dashboard" />;
    }

    const LoginHeader = () => {
        return <React.Fragment>
             <Typography variant="h3" align="center">Welcome Back!</Typography>
            <Typography variant="h3" align="center">Sign in to your account</Typography>
        </React.Fragment>
    }

    return (
        <Grid container>
            <Grid item xs={3} md={4}></Grid>
            <Grid item xs={6} md={4}>
                <Card>
                    <CardContent>
                        <LoginHeader />
                        <form noValidate onSubmit={props.handleSubmit(onSubmitHandler)}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Field name="email" type="email" label="Email" component={RenderInput} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field name="password" type="password" label="Password" component={RenderInput} />
                                </Grid>
                                <Button type="submit" fullWidth variant="outlined" color="primary">Continue</Button>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={3} md={4}></Grid>
        </Grid>
    )
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
};

export default reduxForm({
    form: 'loginForm'
})(
    connect(mapStateToProps,{
        loginUser: loginUser
    })(Login)
);