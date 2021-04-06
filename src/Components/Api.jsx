import axios from 'axios';

const baseUrl = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
    let changeUrl = baseUrl;
    try {
        if (country) {
            changeUrl = `${baseUrl}/countries/${country}`
        }
    } catch (error) {
        console.log("error")
    }

    try {
        const { data } = await axios.get(changeUrl);
        return data;
    } catch (error) {
        console.log("error")
    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${baseUrl}/countries`);
        return countries.map((country) => country.name);
    } catch (error) {
        console.log("error")
    }
}

