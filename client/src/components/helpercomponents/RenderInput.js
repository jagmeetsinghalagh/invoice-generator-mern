import React from 'react';
import TextField from '@material-ui/core/TextField';

const RenderInput = ({input,label,type}) => {
    return <TextField {...input} type={type} fullWidth label={label} variant="outlined" />
};

export default RenderInput;