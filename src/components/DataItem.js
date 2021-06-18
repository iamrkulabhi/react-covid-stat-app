import React from 'react';

import {Card} from '../UI/Card';

export const DataItem = (props) => {
    return (
        <Card color={props.color ? props.color : 'transparent'}>
            <h2>{props.data.label}</h2>
            <strong>{props.data.number}</strong>
        </Card>
    )
}

