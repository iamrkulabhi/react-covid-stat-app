import React, {useEffect, useState} from 'react';
import {FilterForm} from './FilterForm';
import {ShowData} from './ShowData';

export const Covid = () => {

    const [covidData, setCovidData] = useState([]);
    const [defaultState, changeState] = useState("TT");

    const getCovidData = async () => {
        const response = await fetch('https://api.covid19india.org/data.json');
        const data = await response.json();

        setCovidData(...data.statewise.filter(item => item.statecode === defaultState));
        //console.log(...data.statewise.filter(item => item.statecode === defaultState));
    };

    const onFormSubmitHandler = (stateCode = "TT") => {
        //console.log(stateCode);
        changeState(stateCode);
    };

    useEffect(() => {
        getCovidData();
    }, [defaultState]);

    return (
        <div>
            <h1>Covid updates in India</h1>
            <FilterForm onFormSubmit={onFormSubmitHandler}/>
            <ShowData data={covidData}/>
        </div>
    )
}
