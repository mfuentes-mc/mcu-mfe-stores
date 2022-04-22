import React from 'react'

export const StoresEdit = () => {
  return (
    <div>
      <h1>
        Edit Store Screen
      </h1>
      <br />
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4 font-weight-bold">
                Edit store
              </h2>
              <form>
                <label>Full Name</label>
                <input 
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                />
                <label>adress</label>
                <input 
                  type="text"
                  className="form-control"
                  placeholder="Store Adress"
                />
                <label>Type Care</label>
                <select class="form-select">
                  <option selected>---</option>
                  <option value="hospice">Hospice</option>
                  <option value="palliative">Palliative</option>
                </select>
                <label>Status</label>
                <select class="form-select">
                  <option selected>---</option>
                  <option value="referral">Referral</option>
                  <option value="other">Other</option>
                </select>
                <br />
                <button
                  type="submit"
                  className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                > 
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
