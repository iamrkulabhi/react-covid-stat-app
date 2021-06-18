import React, {useState} from 'react';

import classes from './FilterForm.module.css';

const ALL_STATES =  [
    {code: 'TT', name: 'All States'},
    {code: 'AP', name: 'Andhra Pradesh'},
    {code: 'AR', name: 'Arunachal Pradesh'},
    {code: 'AS', name: 'Assam'},
    {code: 'BR', name: 'Bihar'},
    {code: 'CT', name: 'Chhattisgarh'},
    {code: 'GA', name: 'Goa'},
    {code: 'GJ', name: 'Gujarat'},
    {code: 'HR', name: 'Haryana'},
    {code: 'HP', name: 'Himachal Pradesh'},
    {code: 'JK', name: 'Jammu and Kashmir'},
    {code: 'JH', name: 'Jharkhand'},
    {code: 'KA', name: 'Karnataka'},
    {code: 'KL', name: 'Kerala'},
    {code: 'MP', name: 'Madhya Pradesh'},
    {code: 'MH', name: 'Maharashtra'},
    {code: 'MN', name: 'Manipur'},
    {code: 'ML', name: 'Meghalaya'},
    {code: 'MZ', name: 'Mizoram'},
    {code: 'NL', name: 'Nagaland'},
    {code: 'OR', name: 'Odisha'},
    {code: 'PB', name: 'Punjab'},
    {code: 'RJ', name: 'Rajasthan'},
    {code: 'SK', name: 'Sikkim'},
    {code: 'TN', name: 'Tamil Nadu'},
    {code: 'TG', name: 'Telangana'},
    {code: 'TR', name: 'Tripura'},
    {code: 'UP', name: 'Uttar Pradesh'},
    {code: 'UT', name: 'Uttarakhand'},
    {code: 'WB', name: 'West Bengal'},
    {code: 'AN', name: 'Andaman and Nicobar Islands'},
    {code: 'CH', name: 'Chandigarh'},
    {code: 'DN', name: 'Dadra and Nagar Haveli'},
    {code: 'DD', name: 'Daman and Diu'},
    {code: 'LD', name: 'Lakshadweep'},
    {code: 'DL', name: 'National Capital Territory of Delhi'},
    {code: 'PY', name: 'Puducherry'}
];

export const FilterForm = (props) => {

    const [seletedState, changeState] = useState("");
    const [isBtnDisabled, setBtnDisabled] = useState(true);

    const onSumitHandler = (event) => {
        event.preventDefault();
        //console.log(seletedState);
        props.onFormSubmit(seletedState);
        setBtnDisabled(true);
    }

    return (
        <div className={classes["filter-form"]}>
            <form onSubmit={onSumitHandler}>
                <label>Filter By State</label>
                <select onChange={(e) => {changeState(e.target.value); setBtnDisabled(false);}}>
                    {ALL_STATES.map(state => <option key={state.code} value={state.code}>{state.name}</option>)}
                </select>
                <input type="submit" value="check data" disabled={isBtnDisabled}/>
            </form>
        </div>
    )
}
