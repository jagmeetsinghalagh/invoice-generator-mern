import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import RenderInput from '../helpercomponents/RenderInput';
import { signupUser } from '../../actions/auth';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/Styles';

const useStyles = makeStyles({
    flex: {
        display: 'flex'
    },
    margin: {
        margin: '0.5rem'
    }
})

const Signup = ({handleSubmit, signupUser, history}) => {
    const classes = useStyles();

    const onSubmitHandler = values => signupUser(values,history);

    return (
        <Card variant="outlined">
            <CardContent>
                <form noValidate onSubmit={handleSubmit(onSubmitHandler)}>
                    <div className={classes.flex}>
                        <Field name="firstName" className={classes.margin} label="First Name" component={RenderInput} />
                        <Field className={classes.margin} name="lastName" label="Last Name" component={RenderInput} />
                    </div>
                    <Field name="email" type="email" label="Email" className={classes.margin}  component={RenderInput}/>
                    <Field name="password" type="password" label="Password" className={classes.margin} component={RenderInput} />
                    <Button className={classes.margin} type="submit" fullWidth color="primary" variant="outlined">Create an account</Button>
                </form>
                <Typography variant="body1" align="center">
                    Already have an account? <Link to="/login">Login</Link>
                </Typography>
            </CardContent>
        </Card>
    )
}

export default reduxForm({
    form: 'signupForm'
})(
    connect(null,{
        signupUser: signupUser
    })(Signup)
);