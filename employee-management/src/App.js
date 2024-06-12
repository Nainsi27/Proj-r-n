import React, { useState } from 'react';
import axios from 'axios';
import { Tabs, Tab } from 'react-bootstrap';
import Resume from './components/Resume';
import WorkInformation from './components/WorkInformation';
import PrivateInformation from './components/PrivateInformation';
import HRSettings from './components/HRSettings';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    employeeName: '',
    jobPosition: '',
    workMobile: '',
    department: '',
    workPhone: '',
    workEmail: '',
    manager: '',
    coach: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    axios.post('http://localhost:4000/employee-details', data)
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  };

  return (
    <>
   <form onSubmit={handleSubmit} className="mb-5">
  <div className="row mt-4">
    <div className="col-md-6">
      <div className="form-group mb-3">
        <label className="col-sm-4 col-form-label">Employee's Name</label>
        <input type="text" className="form-control" name="employeeName" value={formData.employeeName} onChange={handleChange} required />
      </div>
      <div className="form-group mb-3">
        <label className="col-sm-4 col-form-label">Job Position</label>
        <input type="text" className="form-control" name="jobPosition" value={formData.jobPosition} onChange={handleChange} required />
      </div>
    </div>
    <div className="col-md-6 text-right">
      <div className="form-group mb-3">
        <label className="col-sm-4 col-form-label">Upload Image</label>
        <input type="file" className="form-control" name="image" onChange={handleChange} />
      </div>
    </div>
  </div>

  <div className="row">
    <div className="col-md-6">
      <div className="form-group mb-3">
        <label className="col-sm-4 col-form-label">Work Mobile</label>
        <input type="text" className="form-control" name="workMobile" value={formData.workMobile} onChange={handleChange} required />
      </div>
      <div className="form-group mb-3">
        <label className="col-sm-4 col-form-label">Work Phone</label>
        <input type="text" className="form-control" name="workPhone" value={formData.workPhone} onChange={handleChange} required />
      </div>
      <div className="form-group mb-3">
        <label className="col-sm-4 col-form-label">Work Email</label>
        <input type="email" className="form-control" name="workEmail" value={formData.workEmail} onChange={handleChange} required />
      </div>
    </div>
    <div className="col-md-6">
      <div className="form-group mb-3">
        <label className="col-sm-4 col-form-label">Department</label>
        <input type="text" className="form-control" name="department" value={formData.department} onChange={handleChange} required />
      </div>
      <div className="form-group mb-3">
        <label className="col-sm-4 col-form-label">Manager</label>
        <input type="text" className="form-control" name="manager" value={formData.manager} onChange={handleChange} required />
      </div>
      <div className="form-group mb-3">
        <label className="col-sm-4 col-form-label">Coach</label>
        <input type="text" className="form-control" name="coach" value={formData.coach} onChange={handleChange} required />
      </div>
    </div>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>


      <div className="container mt-5">
        <Tabs defaultActiveKey="resume" id="uncontrolled-tab-example">
          <Tab eventKey="resume" title="Resume">
            <Resume />
          </Tab>
          <Tab eventKey="work-information" title="Work Information">
            <WorkInformation />
          </Tab>
          <Tab eventKey="private-information" title="Private Information">
            <PrivateInformation />
          </Tab>
          <Tab eventKey="hr-settings" title="HR Settings">
            <HRSettings />
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default App;
