import {createSlice} from '@reduxjs/toolkit';

const initialState = {
     cartArray: []
}
const cartreducer = createSlice({
    name : 'cart',
    initialState : initialState,
    reducers : {
        pushCartItems : (action,state) => {
               state.cartArray.push(action.payload)
        },
        removeCartItems : (action,payload) => {
              return { cartArray : []}
        }
    }
})

export const {pushCartItems,removeCartItems} = cartreducer.actions
export default cartreducer.reducer