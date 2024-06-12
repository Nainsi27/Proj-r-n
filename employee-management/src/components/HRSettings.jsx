import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

function HRSettings() {
  const [formData, setFormData] = useState({
    employeeType: '',
    relatedUser: '',
    pinCode: '',
    badgeId: '',
    registrationNo: '',
    jobPosition: '',
    hourlyCost: '',
    fleetMobilityCard: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/hr-settings', formData)
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  };

  return (
<form onSubmit={handleSubmit}>
  <div className="container">
    {/* Status and Attendance */}
    <div className="row mb-4 mt-4">
      <div className="col-md-6">
        <h5 className="section-title mb-3">STATUS</h5>
        <div className="form-group row mb-3">
          <label className="col-sm-4 col-form-label">Employee Type</label>
          <div className="col-sm-8">
            <input type="text" className="form-control" name="employeeType" value={formData.employeeType} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-group row mb-3">
          <label className="col-sm-4 col-form-label">Related User</label>
          <div className="col-sm-8">
           <input type="text" className="form-control" name="relatedUser" value={formData.relatedUser} onChange={handleChange} required />
         </div>
        </div>
      </div>
      <div className="col-md-6">
        <h5 className="section-title mb-3">ATTENDANCE</h5>
        <div className="form-group row mb-3">
          <label className="col-sm-4 col-form-label">PIN Code</label>
          <div className="col-sm-8">
          <input type="text" className="form-control" name="pinCode" value={formData.pinCode} onChange={handleChange} required />
        </div>
        </div>
        <div className="form-group row mb-3">
          <label className="col-sm-4 col-form-label">Badge ID</label>
          <div className="col-sm-8">
          <input type="text" className="form-control" name="badgeId" value={formData.badgeId} onChange={handleChange} required />
        </div>
        </div>
      </div>
    </div>

    {/* Payroll and Application Settings */}
    <div className="row mb-4">
      <div className="col-md-6">
        <h5 className="section-title mb-3">PAYROLL</h5>
        <div className="form-group row mb-3">
          <label className="col-sm-4 col-form-label">Registration No of Employee</label>
          <div className="col-sm-8">
          <input type="text" className="form-control" name="registrationNo" value={formData.registrationNo} onChange={handleChange} required />
        </div>
        </div>
        <div className="form-group row mb-3">
          <label className="col-sm-4 col-form-label">Job Position</label>
          <div className="col-sm-8">
          <input type="text" className="form-control" name="jobPosition" value={formData.jobPosition} onChange={handleChange} required />
        </div>
        </div>
      </div>
      <div className="col-md-6">
        <h5 className="section-title mb-3">Application Settings</h5>
        <div className="form-group row mb-3">
          <label className="col-sm-4 col-form-label">Hourly Cost</label>
          <div className="col-sm-8">
          <input type="number" className="form-control" name="hourlyCost" value={formData.hourlyCost} onChange={handleChange} required />
        </div>
        </div>
        <div className="form-group row mb-3">
          <label className="col-sm-4 col-form-label">Fleet Mobility Card</label>
          <div className="col-sm-8">
           <input type="text" className="form-control" name="fleetMobilityCard" value={formData.fleetMobilityCard} onChange={handleChange} required />
        </div>
        </div>
      </div>
    </div>

    {/* Submit Button */}
    <div className="d-flex justify-content-center">
      <button type="submit" className="btn btn-primary">Submit</button>
    </div>
  </div>
</form>


  );
}

export default HRSettings;
