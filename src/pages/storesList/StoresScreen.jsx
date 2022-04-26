import React from 'react'
import { StoresList } from './components/StoresList'

export const StoresScreen = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Stores List S3</h1>
          </div>
          <div className="col">
            
          </div>
        </div>
      </div>
        <hr />
        <StoresList publisher="hospice"/>
    </div>
  )
}
