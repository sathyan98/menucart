import {createSlice} from '@reduxjs/toolkit';

const initialState = {
     cartArray: []
}
const cartreducer = createSlice({
    name : 'cart',
    initialState : {
        cart : []
    },
    reducers : {
        enterCartItems : (state, action) => {
                console.log('action',action,'state',state);
               state.cart.push(action.payload)
        },
        removeCartItems : (action,payload) => {
              return { cartArray : []}
        }
    }
})

export const {enterCartItems,removeCartItems} = cartreducer.actions
export default cartreducer.reducer