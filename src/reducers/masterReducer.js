import {FETCH_API,API_SUCCESS, USER_AMOUNT} from '../actions'

const initialState = {
    btcCurrPrice: 0,
    btcAth: 0,
    btcUserAmount: undefined,
    hfsp: false,
}

export const masterReducer = (state = initialState, action)=>{
    switch(action.type){
        case(API_SUCCESS):
            return({...state, btcCurrPrice: action.payload.market_data.current_price.usd, btcAth: action.payload.market_data.ath.usd})
        case(USER_AMOUNT):
            return({...state, btcUserAmount: action.payload})
        default: return state;
    }
}