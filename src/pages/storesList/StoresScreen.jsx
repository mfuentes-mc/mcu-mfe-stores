import React from 'react'
import { StoresList } from './components/StoresList'

import UserInfo from 'users/UserInfo';

export const StoresScreen = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Stores List</h1>
          </div>
          <div className="col">
            <a 
              href="/stores/new"
              className="btn d-block d-md-inline-block px-md-5 btn-primary"
            >New Store
            </a>
          </div>
        </div>
      </div>
        <UserInfo/>
        <hr />
        <StoresList publisher="hospice"/>
    </div>
  )
}
