import React, {useState} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {changeBtcUserAmount} from '../actions'
import * as yup from 'yup'
import schema from '../validation/formSchema'

const FormStyled = styled.form`
// display: flex;
// flex-flow: column nowrap;

input{
    width: 50px;
}

`

function Form(props) {
const [form, setForm] = useState({btcUserAmount:undefined})
const [formErr, setFormErr] = useState({btcUserAmount: ''}) 

const checkInput = (name, value) =>{
    yup.reach(schema, name).validate(value).then(()=>{
        setFormErr({...formErr, [name]:''})
    }).catch(err=>{console.log(err);
        setFormErr({...formErr, [name]: err.errors[0]})})
    setForm({...form, [name]: value})
}

const inputChange = (e) =>{
    checkInput(e.target.name, e.target.value)
}

// const inputChange = (e) =>{
//     console.log(e)
//     setForm({btcUserAmount: e.target.value})
// }
const onSubmit = (e)=>{
    
    e.preventDefault();
    // console.log(e)
    props.changeBtcUserAmount(form.btcUserAmount)
}

    return (
        <FormStyled onSubmit={onSubmit}>
            <label htmlFor='userBitcoin'>I have <input onChange={inputChange} id='btcUserAmount' name='btcUserAmount' value={form.btcUserAmount} placeholder='0.15'/> Bitcoin</label>
            <p style={{color:'red'}}>{formErr.btcUserAmount}</p>
            <br/><button>Calculate Upstuck</button>
        </FormStyled>
    )
}
const mapStateToProps = state =>{
    return {
        btcUserAmount: state.btcUserAmount
    }
}
export default connect(mapStateToProps,{changeBtcUserAmount})(Form)