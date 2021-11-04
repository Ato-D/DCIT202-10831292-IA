import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { API_KEY, requests } from '../APIRequest/requests'

export const GenderContext = createContext()
export const BrandsContext = createContext()
export const AuthContext = createContext()
function Context({ children }) {


    const [genders, setGenders] = useState([])
    const [brands, setbrands] = useState(null)

    // useEffect(() => {
    //     const options = {
    //         method: 'GET',
    //         url: 'https://the-sneaker-database.p.rapidapi.com/genders',
    //         headers: {
    //           'x-rapidapi-key': '355e91af9emshffc53c11c2485dfp150c6bjsn3ee269f8648c',
    //           'x-rapidapi-host': 'the-sneaker-database.p.rapidapi.com'
    //         }
    //       };

    //     axios.request(options).then(function (response) {
    //         const newResults = response.data.results
    //         setGenders(newResults)
    //         console.log('data',response.data.results)
    //         // console.log('genders', genders)
    //     }).catch(function (error) {
    //         console.log('err gender', error);
    //     });

    // }, [])

    

    // useEffect(() => {
    //     axios.request(requests.fetchBrands).then(function (response) {
    //         setGenders(response.data.results)
    //         console.log('data', brands);
    //     }).catch(function (error) {
    //         console.log('err brands', error);
    //     });

    // }, [])

    return (
        <GenderContext.Provider value={genders} >
            <BrandsContext.Provider value={brands} >
                {children}
            </BrandsContext.Provider>
        </GenderContext.Provider>
    )
}

export default Context
