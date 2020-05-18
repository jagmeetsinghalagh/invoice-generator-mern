import React from 'react';

import InvoiceTable from '../helpercomponents/InvoiceTable';

import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

const Invoices = ({ title,dashboard, invoices }) => {
    return (
        <Card>
            {dashboard ? <CardHeader 
                title={title}
            /> : <CardHeader
                title={title}
                action={
                    <Button>View More</Button>
                }
            />
            }
            <CardContent>
                <InvoiceTable invoices={invoices} />
            </CardContent>
        </Card>
    )
}

export default Invoices;