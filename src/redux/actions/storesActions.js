import {
    ADD_STORE,
    ADD_STORE_SUCCESS,
    ADD_STORE_FAILURE,
    START_DOWNLOAD_STORES,
    DOWNLOAD_STORES_SUCCESS,
    DOWNLOAD_STORES_FAILURE
} from '../types';

import clientAxios from '../../services/config/axios';
import Swal from 'sweetalert2';

export function createNewStoreAction(store){
    return async (dispatch)=>{
        dispatch(addStore(store));
        try{
            //insert on api
            await clientAxios.post('/stores', store);
            //si todo sale bien, actualizar el state 
            dispatch(addStoreSuccess(store));
            Swal.fire(
                'Success',
                'Store added successfully',
                'success'
            );
        }catch(err){
            console.log('---------',err);
            dispatch(addStoreFailure(true));
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        }
    }
}

const addStore = () =>({
    type: ADD_STORE,
    payload:true
});

//si el paaiente se crea correctamente

const addStoreSuccess = (store) =>({
    type: ADD_STORE_SUCCESS,
    payload: store
});
//si hubo un error

const addStoreFailure = state =>({
    type: ADD_STORE_FAILURE,
    payload: state
});


//Funcion que descarga los pacientes
export function downloadStoresAction(){
    return async (dispatch)=>{
        dispatch(startDownloadStores());
        try{
            const response = await clientAxios.get('/stores');
            dispatch(downloadStoresSuccess(response.data));
        }catch(err){
            console.log(err);
            dispatch(downloadStoresFailure());
        }
    }
}
const startDownloadStores = () =>({
    type: START_DOWNLOAD_STORES,
    payload:true
});

const downloadStoresSuccess = stores =>({
    type: DOWNLOAD_STORES_SUCCESS,
    payload: stores
});

const   downloadStoresFailure = () =>({
    type: DOWNLOAD_STORES_FAILURE,
    payload: true
});