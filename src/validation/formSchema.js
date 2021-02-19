import * as yup from 'yup'

export default yup.object().shape({
    btcUserAmount: yup.number().required('Enter how many Bitcoin.').typeError('How many Bitcoin do you own?')
})
