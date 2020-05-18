import React from 'react';
import styled from 'styled-components';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Divider from '@material-ui/core/Divider';

const FlexWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const TopBar = props => {
    return (
        <React.Fragment>
            <FlexWrapper>
                <Typography variant="h5">{props.title}</Typography>
                <div style={{ display: 'flex', 'alignItems': 'center'  }}>
                    <Typography variant="h5">Jagmeet Singh</Typography>
                    <IconButton><MoreVertIcon fontSize="large" /></IconButton>
                </div>
            </FlexWrapper>
            <Divider />
        </React.Fragment>
    )
}

export default TopBar;