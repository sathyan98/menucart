import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartReducer';


const appStore = configureStore({
    reducer : {
         cartReducer: cartReducer
    }
})

export default appStore;