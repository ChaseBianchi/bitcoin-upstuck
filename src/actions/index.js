import axios from 'axios';
export const FETCH_API = 'FETCH_API'
export const API_SUCCESS = 'API_SUCCESS'
export const USER_AMOUNT = 'USER_AMOUNT'

export const getUpstuck = () =>{
    return dispatch => {
        
    }
}

export const fetchApi = ()=>{
    return dispatch =>{
        axios.get('https://api.coingecko.com/api/v3/coins/bitcoin?market_data=true')
            .then(res=>{
                dispatch(fetchApiSuccess(res.data))
            })
            .catch(err=>dispatch(console.log(err)))
    }
}

export const fetchApiSuccess = (data)=>{
    return({type: API_SUCCESS, payload: data})
}

export const changeBtcUserAmount = (input)=>{
    return({type: USER_AMOUNT, payload: input})
}