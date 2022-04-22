import React from 'react'

export const StoresCard = ({store}) => {
const {storeName, address, type,status} = store;
  return (
      <tr>
            <td>{storeName}</td>
            <td>{address}</td>
            <td>{type}</td>
            <td>{status}</td>
      </tr>
  )
}
