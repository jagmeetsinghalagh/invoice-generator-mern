import { GET_INVOICES, GET_INVOICE } from '../actions/types';

const initialState = {
    invoices: [],
    selectedInvoice: null,
    isLoading: false
}

export default (state = initialState, action) => {
    const { type,payload } = action;
    switch(type){
        case GET_INVOICES:
            return {
                ...state,
                invoices: payload
            };
        case GET_INVOICE:
            return {
                ...state,
                selectedInvoice: payload
            }
        default:
            return state;
    }
}