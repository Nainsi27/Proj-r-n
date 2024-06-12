import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

function Resume() {
  const [formData, setFormData] = useState({
    resumeEntry: '',
    skillEntry: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/resume', formData)
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container custom-container">
        {/* Resume and Skills */}
        <div className="row mb-4 mt-3 custom-section">
          <div className="col-md-6 mt-3">
            <h5 className="section-title mb-3">RESUME</h5>
            {/* Button trigger modal for Resume */}
            <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#resumeModal">
              Create a new entry
            </button>
          </div>
          <div className="col-md-6 mt-3">
            <h5 className="section-title mb-3">SKILLS</h5>
            {/* Button trigger modal for Skills */}
            <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#skillsModal">
              Create a new entry
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary btn-lg">Submit</button>
        </div>
      </div>

      {/* Resume Modal */}
      <div className="modal fade" id="resumeModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="resumeModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="resumeModalLabel">Resume</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/* Add your form or content here for the Resume modal */}
              <div className="form-group">
                <label>Resume Entry</label>
                <input
                  type="text"
                  className="form-control"
                  name="resumeEntry"
                  value={formData.resumeEntry}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Modal */}
      <div className="modal fade" id="skillsModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="skillsModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="skillsModalLabel">Skills</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/* Add your form or content here for the Skills modal */}
              <div className="form-group">
                <label>Skill Entry</label>
                <input
                  type="text"
                  className="form-control"
                  name="skillEntry"
                  value={formData.skillEntry}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Resume;
