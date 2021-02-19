import './App.css';
import Form from './components/Form'
import TopDisplay from './components/TopDisplay'
import BottomDisplay from './components/BottomDisplay'
import React, {useEffect} from 'react'
// import {connect} from 'react-redux'
// import axios from 'axios'
// import {fetchApi} from './actions/index'

function App() {
  return (
    <div className="App">
      <h1>🚀 Bitcoin Upstuck 🚀</h1>
      <TopDisplay/>
      <Form/>
      <BottomDisplay/>

    </div>
  );
}
const mapStateToProps = state=>{
  return({btcCurrPrice: state.btcCurrPrice,btcAth: state.btcAth, btcUserAmount: state.btcUserAmount, hfsp: state.hfsp})
}
export default 
// connect(mapStateToProps)
(App);
