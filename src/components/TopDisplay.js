import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchApi} from '../actions/index'

function TopDisplay(props) {
    useEffect(()=>{
        props.fetchApi()
      },[])
    return (
        <div>
            {
            props.btcCurrPrice===0
            ? <h3>Current Price: loading...</h3>
            : <h3>Current Price: ${props.btcCurrPrice}</h3>
            }
            {
            props.btcAth===0
            ? <h3>All Time High: loading...</h3>
            : <h3>All Time High: ${props.btcAth}</h3>
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

export default connect(mapStateToProps,{fetchApi})(TopDisplay);