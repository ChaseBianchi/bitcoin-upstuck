import * as yup from 'yup'

export default yup.object().shape({
    btcUserAmount: yup.number('Must enter a number.').required('Enter how much BTC you have.')
})
