import axios from 'axios';
import { GET_INVOICES, GET_INVOICE } from './types';

export const getInvoics = (userId) => async dispatch => {
    try {
        const token = localStorage.getItem('token');
        const config = {
            'headers': {
                'Authorization': `Bearer ${token}`
            }
        };
        const response = await axios.get('http://localhost:8000/invoices', config);
        dispatch({
            type: GET_INVOICES,
            payload: response.data.invoices
        });
    } catch(err){

    }
}

export const getInvoice = (invoiceId) => async dispatch => {
    try {
        const token = localStorage.getItem('token');
        const config = {
            'headers': {
                'Authorization': `Bearer ${token}`
            }
        };
        const response = await axios.get(`http://localhost:8000/invoice/${invoiceId}`,config);
        dispatch({
            type: GET_INVOICE,
            payload: response.data.invoice
        });
    } catch(err) {

    }

}