import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

function PrivateInformation() {
  const [formData, setFormData] = useState({
    address: '', email: '', phone: '', language: '', homeWorkDistance: '',
    privateCarPlate: '', maritalStatus: '', numberOfDependentChildren: '',
    emergencyContactName: '', emergencyContactPhone: '', certificateLevel: '',
    fieldOfStudy: '', school: '', nationality: '', identificationNo: '',
    passportNo: '', gender: '', dateOfBirth: '', placeOfBirth: '',
    countryOfBirth: '', nonResident: false, visaNo: '', workPermitNo: '',
    visaExpireDate: '', workPermitExpireDate: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/private-information', formData)
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
    <div className="container">

      {/* Private Contact and Family Status */}
      <div className="row mb-4">
        <div className="col-md-6">
          <h5 className="section-title mb-3">PRIVATE CONTACT</h5>
          <div className="form-group row mb-3">
            <label className="col-sm-4 col-form-label">Address</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" name="address" value={formData.address} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group row mb-3">
            <label className="col-sm-4 col-form-label">Email</label>
            <div className="col-sm-8">
              <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group row mb-3">
            <label className="col-sm-4 col-form-label">Phone</label>
            <div className="col-sm-8">
              <input type="tel" className="form-control" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group row mb-3">
            <label className="col-sm-4 col-form-label">Language</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" name="language" value={formData.language} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group row mb-3">
            <label className="col-sm-4 col-form-label">Home-Work Distance</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" name="homeWorkDistance" value={formData.homeWorkDistance} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group row mb-3">
            <label className="col-sm-4 col-form-label">Private Car Plate</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" name="privateCarPlate" value={formData.privateCarPlate} onChange={handleChange} required />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h5 className="section-title mb-3">FAMILY STATUS</h5>
          <div className="form-group row mb-3">
            <label className="col-sm-4 col-form-label">Marital Status</label>
            <div className="col-sm-8">
              <select className="form-control" name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} required>
                <option value="">Select</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
              </select>
            </div>
          </div>
          <div className="form-group row mb-3">
            <label className="col-sm-4 col-form-label">Number of Dependent Children</label>
            <div className="col-sm-8">
              <input type="number" className="form-control" name="numberOfDependentChildren" value={formData.numberOfDependentChildren} onChange={handleChange} required />
            </div>
          </div>
        </div>
      </div>
  
      {/* Education and Emergency */}
      <div className="row mb-4">
        <div className="col-md-6">
          <h5 className="section-title mb-3">EDUCATION</h5>
          <div className="form-group row mb-3">
            <label className="col-sm-4 col-form-label">Certificate Level</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" name="certificateLevel" value={formData.certificateLevel} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group row mb-3">
            <label className="col-sm-4 col-form-label">Field of Study</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" name="fieldOfStudy" value={formData.fieldOfStudy} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group row mb-3">
            <label className="col-sm-4 col-form-label">School</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" name="school" value={formData.school} onChange={handleChange} required />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h5 className="section-title mb-3">EMERGENCY</h5>
          <div className="form-group row mb-3">
            <label className="col-sm-4 col-form-label">Emergency Contact Name</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" name="emergencyContactName" value={formData.emergencyContactName} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group row mb-3">
            <label className="col-sm-4 col-form-label">Emergency Contact Phone</label>
            <div className="col-sm-8">
              <input type="tel" className="form-control" name="emergencyContactPhone" value={formData.emergencyContactPhone} onChange={handleChange} required />
            </div>
          </div>
        </div>
      </div>
  
      {/* Work Permit and Citizenship */}
      <div className="row mb-4">
      <div className="col-md-6">
          <h5 className="section-title mb-3">CITIZENSHIP</h5>
          <div className="form-group row mb-3">
            <label className="col-sm-4 col-form-label">Nationality</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" name="nationality" value={formData.nationality} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group row mb-3">
            <label className="col-sm-4 col-form-label">Identification No</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" name="identificationNo" value={formData.identificationNo} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group row mb-3">
            <label className="col-sm-4 col-form-label">Passport No</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" name="passportNo" value={formData.passportNo} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group row mb-3">
            <label className="col-sm-4 col-form-label">Gender</label>
            <div className="col-sm-8">
              <select className="form-control" name="gender" value={formData.gender} onChange={handleChange} required>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="form-group row mb-3">
            <label className="col-sm-4 col-form-label">Date of Birth</label>
            <div className="col-sm-8">
              <input type="date" className="form-control" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group row mb-3">
            <label className="col-sm-4 col-form-label">Place of Birth</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" name="placeOfBirth" value={formData.placeOfBirth} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group row mb-3">
            <label className="col-sm-4 col-form-label">Country of Birth</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" name="countryOfBirth" value={formData.countryOfBirth} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group row mb-3">
            <label className="col-sm-4 col-form-label">Non-Resident</label>
            <div className="col-sm-8">
              <input type="checkbox" className="form-check-input" name="nonResident" checked={formData.nonResident} onChange={handleChange} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h5 className="section-title mb-3">WORK PERMIT</h5>
          <div className="form-group row mb-3">
            <label className="col-sm-4 col-form-label">Visa No</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" name="visaNo" value={formData.visaNo} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group row mb-3">
            <label className="col-sm-4 col-form-label">Work Permit No</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" name="workPermitNo" value={formData.workPermitNo} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group row mb-3">
            <label className="col-sm-4 col-form-label">Visa Expiry Date</label>
            <div className="col-sm-8">
              <input type="date" className="form-control" name="visaExpireDate" value={formData.visaExpireDate} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group row mb-3">
            <label className="col-sm-4 col-form-label">Work Permit Expiry Date</label>
            <div className="col-sm-8">
              <input type="date" className="form-control" name="workPermitExpireDate" value={formData.workPermitExpireDate} onChange={handleChange} required />
            </div>
          </div>
        </div>
      </div>
  
      <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </div>
  </form>
  
  // 
  
  );
}

export default PrivateInformation;
