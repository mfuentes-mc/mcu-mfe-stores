import React, {useEffect} from 'react'

import {useSelector, useDispatch} from 'react-redux';

import {downloadStoresAction} from '../../../redux/actions/storesActions';
import { StoresCard } from './StoresCard';

export const StoresList = () => {

    const dispatch = useDispatch();
    useEffect(() => {
      const downloadStores = ()=> dispatch(downloadStoresAction());
      downloadStores();
    }, []);
    
    const stores = useSelector(state => state.stores.stores);
    console.log(stores);
    return (

        <div className="container-xxl">
            <h2 className="text-center my-5">Store List</h2>
            <table className="table table-striped ">
                <thead className="bg-danger table-dark">
                    <tr>
                        <th scope="col">Full Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Type</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    { stores.length === 0 ? null:(
                        stores.map(store => (
                            <StoresCard   key={store.id}
                                            store={store}
                                            />
                        ))
                    )}
                </tbody>
            </table>
        </div>
  )
}