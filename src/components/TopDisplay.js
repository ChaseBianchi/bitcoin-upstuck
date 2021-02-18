import React from 'react'
import {connect} from 'react-redux'

function TopDisplay(props) {
    return (
        <div>
            {
            props.btcCurrPrice===0
            ? <h3>Price: loading...</h3>
            : <h3>Price: ${props.btcCurrPrice}</h3>
            }
            {
            props.btcAth===0
            ? <h3>ATH: loading...</h3>
            : <h3>ATH: ${props.btcAth}</h3>
            }
        </div>
    )
}

const mapStateToProps = state =>{
    return{
    btcCurrPrice: state.btcCurrPrice,
    btcAth: state.btcAth
    }
}

export default connect(mapStateToProps)(TopDisplay);