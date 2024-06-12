import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

function WorkInformation() {
  const [formData, setFormData] = useState({
    workAddress: '',
    workLocation: '',
    expenseApprover: '',
    timeOffApprover: '',
    workingHours: '',
    timezone: '',
    roles: '',
    defaultRoles: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/work-information', formData)
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
    <div className="container">
      <div className="row mb-4">
        {/* Location Section */}
        <div className="col-md-6">
          <h5 className="section-title mb-3">LOCATION</h5>
          <div className="form-group row mb-3">
            <label className="col-sm-4 col-form-label">Work Address</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" name="workAddress" value={formData.workAddress} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group row mb-3">
            <label className="col-sm-4 col-form-label">Work Location</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" name="workLocation" value={formData.workLocation} onChange={handleChange} required />
            </div>
          </div>
        </div>
        {/* Approvers Section */}
        <div className="col-md-6">
          <h5 className="section-title mb-3">APPROVERS</h5>
          <div className="form-group row mb-3">
            <label className="col-sm-4 col-form-label">Expense Approver</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" name="expenseApprover" value={formData.expenseApprover} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group row mb-3">
            <label className="col-sm-4 col-form-label">Time Off Approver</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" name="timeOffApprover" value={formData.timeOffApprover} onChange={handleChange} required />
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-4">
        {/* Schedule Section */}
        <div className="col-md-6">
          <h5 className="section-title mb-3">SCHEDULE</h5>
          <div className="form-group row mb-3">
            <label className="col-sm-4 col-form-label">Working Hours</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" name="workingHours" value={formData.workingHours} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group row mb-3">
            <label className="col-sm-4 col-form-label">Timezone</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" name="timezone" value={formData.timezone} onChange={handleChange} required />
            </div>
          </div>
        </div>
        {/* Planning Section */}
        <div className="col-md-6">
          <h5 className="section-title mb-3">PLANNING</h5>
          <div className="form-group row mb-3">
            <label className="col-sm-4 col-form-label">Roles</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" name="roles" value={formData.roles} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group row mb-3">
            <label className="col-sm-4 col-form-label">Default Roles</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" name="defaultRoles" value={formData.defaultRoles} onChange={handleChange} required />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </div>
  </form>
  );
}

export default WorkInformation;
