import React from 'react';

import classes from '../UI/Card.module.css';

export const Card = (props) => {
    
    return (
        <div className={classes.card} style={{backgroundColor: props.color ? props.color : 'transparent'}}>
            <div className={classes.container}>
            {props.children}
            </div>
        </div>
    )
}
