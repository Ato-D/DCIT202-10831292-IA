export const API_KEY = '355e91af9emshffc53c11c2485dfp150c6bjsn3ee269f8648c'


const options = {
    method: 'GET',
    url: 'https://v1-sneakers.p.rapidapi.com/v1/genders',
    headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com'
    }
};

export const requests = {
    fetchGenders: {
        method: 'GET',
        url: 'https://v1-sneakers.p.rapidapi.com/v1/genders',
        headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com'
        }
    },
    fetchBrands: {
        method: 'GET',
        url: 'https://v1-sneakers.p.rapidapi.com/v1/brands',
        headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com'
        }
    },
    fetchExplore: (page) => ({
        method: 'GET',
        params: {limit: '20', page: page },
        url: 'https://v1-sneakers.p.rapidapi.com/v1/genders',
        headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com'
        }
    }),
}