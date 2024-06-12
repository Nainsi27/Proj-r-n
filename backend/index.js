const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 4000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'employee_management'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
      }
      console.log('Connected to the database as id ' + connection.threadId);
//   if (err) throw err;
//   console.log('Connected to database');
});

app.use(cors());
app.use(bodyParser.json());

// data for resume
app.post('/resume', (req, res) => {
  const { name, skills } = req.body;
  const sql = 'INSERT INTO resume (name, skills) VALUES (?, ?)';
  db.query(sql, [name, skills], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// data for work-information 
app.post('/work-information', (req, res) => {
    const {
      workAddress, workLocation, expenseApprover, timeOffApprover,
      workingHours, timezone, roles, defaultRoles
    } = req.body;
    const sql = `
      INSERT INTO work_information (
        workAddress, workLocation, expenseApprover, timeOffApprover,
        workingHours, timezone, roles, defaultRoles
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    db.query(sql, [
      workAddress, workLocation, expenseApprover, timeOffApprover,
      workingHours, timezone, roles, defaultRoles
    ], (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });
  
//    data for  private-information
  app.post('/private-information', (req, res) => {
    const {
      address, email, phone, language, homeWorkDistance,
      privateCarPlate, maritalStatus, numberOfDependentChildren,
      emergencyContactName, emergencyContactPhone, certificateLevel,
      fieldOfStudy, school, nationality, identificationNo,
      passportNo, gender, dateOfBirth, placeOfBirth,
      countryOfBirth, nonResident, visaNo, workPermitNo,
      visaExpireDate, workPermitExpireDate
    } = req.body;
    const sql = `
      INSERT INTO private_information (
        address, email, phone, language, homeWorkDistance,
        privateCarPlate, maritalStatus, numberOfDependentChildren,
        emergencyContactName, emergencyContactPhone, certificateLevel,
        fieldOfStudy, school, nationality, identificationNo,
        passportNo, gender, dateOfBirth, placeOfBirth,
        countryOfBirth, nonResident, visaNo, workPermitNo,
        visaExpireDate, workPermitExpireDate
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    db.query(sql, [
      address, email, phone, language, homeWorkDistance,
      privateCarPlate, maritalStatus, numberOfDependentChildren,
      emergencyContactName, emergencyContactPhone, certificateLevel,
      fieldOfStudy, school, nationality, identificationNo,
      passportNo, gender, dateOfBirth, placeOfBirth,
      countryOfBirth, nonResident, visaNo, workPermitNo,
      visaExpireDate, workPermitExpireDate
    ], (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });
  
//   data for hr-settings 
  app.post('/hr-settings', (req, res) => {
    const {
      employeeType, relatedUser, pinCode, badgeId, registrationNo,
      jobPosition, hourlyCost, fleetMobilityCard
    } = req.body;
    const sql = `
      INSERT INTO hr_settings (
        employeeType, relatedUser, pinCode, badgeId, registrationNo,
        jobPosition, hourlyCost, fleetMobilityCard
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    db.query(sql, [
      employeeType, relatedUser, pinCode, badgeId, registrationNo,
      jobPosition, hourlyCost, fleetMobilityCard
    ], (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });
  


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

connection.end();