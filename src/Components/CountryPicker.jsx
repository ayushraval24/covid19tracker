import React, { useEffect, useState } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from './Api'
import './CountryPicker.css'

const CountryPicker = ({ handleCountryChange }) => {

    const [fetchAllCountries, setFetchCountries] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            let data = await fetchCountries()
            setFetchCountries(data)
        }

        fetchApi();
    }, [setFetchCountries])

    return (
        <FormControl className="formControl">
            <NativeSelect defaultValue="" onChange={(e) => { handleCountryChange(e.target.value) }}>
                <option value="[country]">Global</option>
                {fetchAllCountries.map((country, i) => <option value={country} key={i}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker