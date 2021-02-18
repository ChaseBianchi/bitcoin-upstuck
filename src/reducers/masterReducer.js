import {FETCH_API,API_SUCCESS, USER_AMOUNT} from '../actions'

const initialState = {
    btcCurrPrice: 52825,
    btcAth: 48858,
    btcUserAmount: null,
    hfsp: false,
}

export const masterReducer = (state = initialState, action)=>{
    switch(action.type){
        case(API_SUCCESS):
            return({...state, btcCurrPrice: action.payload.market_data.current_price.usd})
        case(USER_AMOUNT):
            return({...state, btcUserAmount: action.payload})
        default: return state;
    }
}