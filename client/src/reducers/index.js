import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth from './auth';
import invoice from './invoice';

export default combineReducers({
    auth: auth,
    invoice: invoice,
    form: formReducer
});