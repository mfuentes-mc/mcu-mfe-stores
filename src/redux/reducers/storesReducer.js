import {
    ADD_STORE,
    ADD_STORE_SUCCESS,
    ADD_STORE_FAILURE,
    START_DOWNLOAD_STORES,
    DOWNLOAD_STORES_SUCCESS,
    DOWNLOAD_STORES_FAILURE
} from '../types';

const initialState = {
    stores: [],
    error:null,
    loading:false
}


export default function (state = initialState, action) {
    switch(action.type){
        case START_DOWNLOAD_STORES:
        case ADD_STORE:{
            return {
                ...state,
                loading:action.payload
            }
        }
        case ADD_STORE_SUCCESS:{
            return {
                ...state,
                loading:false,
                stores: [...state.stores, action.payload]
            }
        }
        case DOWNLOAD_STORES_FAILURE:
        case ADD_STORE_FAILURE:{
            return {
                ...state,
                loading:false,
                error: action.payload
            }
        }
        case DOWNLOAD_STORES_SUCCESS:{
            return {
                ...state,
                loading:false,
                error:false,
                stores: action.payload
            }
        }
        default:{
            return state;
        }
    }
}