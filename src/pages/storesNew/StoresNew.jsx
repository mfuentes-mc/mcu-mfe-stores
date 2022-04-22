import React ,{useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom';

//redux actions

const {createNewStoreAction} = require('../../redux/actions/storesActions');

export const StoresNew = () => {
  let navigate = useNavigate();
  //state del componente
  const [storeName, setStoreName] = useState('');
  const [address, setAddress] = useState('');
  const [type, setType] = useState('---');
  const [status, setStatus] = useState('---');
  //utilizar use dispatch y te crea una funcion
  const dispatch = useDispatch();
  //Acceder al state del store
  const loadingStores = useSelector(state => state.stores.loading);
  const error  = useSelector(state => state.stores.error);
  console.log(loadingStores);
  //mandar llamar el action de patientAction
  const addStore=store=>dispatch(createNewStoreAction(store));



  const submitNewStore = e=>{
    let mrn="123";
    let publisher="hospice";
    let imageId="1";
    e.preventDefault()
    //Validar formulario
    if(storeName.trim==='' || address.trim==='' || type.trim==='' || status.trim===''){
      return alert('All fields are required');
    }
    //Si no hay errores
    // crear el nuevo producto
    addStore({
      storeName,
      address,
      type,
      status,
      imageId
    });
    navigate('/stores');
  }

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Create a new store
            </h2>
            <form onSubmit={submitNewStore}>
              <label>Store Name</label>
              <input 
                type="text"
                className="form-control"
                placeholder="Full Name"
                value={storeName}
                onChange={e=> setStoreName(e.target.value)}
              />
              <label>Address</label>
              <input 
                type="text"
                className="form-control"
                placeholder="Address Name"
                value={address}
                onChange={e=> setAddress(e.target.value)}
              />
              <label>Type</label>
              <select className="form-select" value={type} onChange={e=>setType(e.target.value)} >
                <option value="---">---</option>
                <option value="store">Store</option>
                <option value="restaurant">Restaurant</option>
                <option value="pharmacy">Pharmacy</option>
                <option value="service">Service</option>
              </select>
              <label>Status</label>
              <select className="form-select" value={status} onChange={e=>setStatus(e.target.value)}>
                <option value="---">---</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="other">Other</option>
              </select>
              <br />
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              > 
                Add Store
              </button>
            </form>
            {loadingStores ? <p>Loading....</p>:null}
            {error ? <p className="alert alert-danger p2 mt-4 text-center">Something went wrong!</p>:null}
          </div>
        </div>
      </div>
    </div>   
  )
}
