import React from 'react';
import {Bar} from 'react-chartjs-2';

export const BarGraph = (props) => {
    return (
        <div>
            <Bar
                data={
                    {
                        labels: ['Total case', 'Active case', 'Death case'],
                        datasets: [
                            {
                                label: 'Covid Graph',
                                data: [props.data.confirmed, props.data.active, props.data.deaths],
                                backgroundColor: [
                                    'yellow', 'gray', 'red'
                                ]
                            }
                        ]
                    }
                }
                options={{
                    maintainAspectRatio: true
                }}
            />
        </div>
    )
}
