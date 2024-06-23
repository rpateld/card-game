import React from 'react'
import MaterialCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Card({ values, playerType }) {
    const total = values.reduce((a, b) => a + b, 0);
    const displayValues = values.join(' + ');

    return (
        <MaterialCard variant="outlined" style={{ width: '560px' }}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    {playerType} Card Value
                </Typography>
                <Typography variant="h5" component="div">
                    {displayValues} = {total}
                </Typography>
            </CardContent>
        </MaterialCard>
    );
}

export default Card;