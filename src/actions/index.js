import axios from 'axios';

export const fetchCarsSuccess = data => ({
    type: "CAR_LOADED",
    payload: data 
});

//not handled currently
export const fetchCarsError = error => ({
    type: "CAR_LOAD_ERROR",
    payload: { error }
});

export function loadCars(dispatch) {
    return axios.get('/data/cars-medium.json')
        .then(res=> {
            dispatch(fetchCarsSuccess(res.data)) // data format have data
        })
        .catch(err => console.log(err));
}
