import React from 'react';

import {DataItem} from './DataItem';
import classes from './ShowData.module.css';
import { BarGraph } from './BarGraph';

export const ShowData = (props) => {



    return (
        <div className={classes["show-data"]}>
            <h3>{props.data.state}</h3>
            <BarGraph data={props.data}/>
            <DataItem 
                data={{label: 'Last update on', number: props.data.lastupdatedtime}} 
                color="purple"
            />
            <DataItem 
                data={{label: 'Active case', number: props.data.active}} 
                color="gray"
            />
            <DataItem 
                data={{label: 'Total case', number: props.data.confirmed}}
                color="yellow"
            />
            <DataItem 
                data={{label: 'Death case', number: props.data.deaths}}
                color="red"
            />
        </div>
    )
}
