import React from 'react'
import {connect} from 'react-redux'
import hfspIMG from '../assets/hfsp.jpg'

function BottomDisplay(props) {
    if(props.btcUserAmount>0){return(
        <h2>You're Upstuck ${(props.btcAth - props.btcCurrPrice) * props.btcUserAmount}</h2>
    )}else if(props.btcUserAmount<=0){return(
        <img style={{marginTop: '20px'}} alt='have fun staying poor meme' src={hfspIMG}/>
    )}else return <div></div>
}
const mapPropsToState = state=>{
    return({
        btcCurrPrice: state.btcCurrPrice, btcAth: state.btcAth, btcUserAmount: state.btcUserAmount, hfsp: state.hfsp,
    })
}
export default connect(mapPropsToState,{})(BottomDisplay)