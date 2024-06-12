CREATE DATABASE employee_management;

USE employee_management;

CREATE TABLE resume (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  skills TEXT
);

CREATE TABLE work_information (
  id INT AUTO_INCREMENT PRIMARY KEY,
  workAddress VARCHAR(255),
  workLocation VARCHAR(255),
  expenseApprover VARCHAR(255),
  timeOffApprover VARCHAR(255),
  workingHours VARCHAR(255),
  timezone VARCHAR(255),
  roles VARCHAR(255),
  defaultRoles VARCHAR(255)
);

CREATE TABLE private_information (
  id INT AUTO_INCREMENT PRIMARY KEY,
  address VARCHAR(255),
  email VARCHAR(255),
  phone VARCHAR(255),
  language VARCHAR(255),
  homeWorkDistance VARCHAR(255),
  privateCarPlate VARCHAR(255),
  maritalStatus VARCHAR(255),
  numberOfDependentChildren INT,
  emergencyContactName VARCHAR(255),
  emergencyContactPhone VARCHAR(255),
  certificateLevel VARCHAR(255),
  fieldOfStudy VARCHAR(255),
  school VARCHAR(255),
  nationality VARCHAR(255),
  identificationNo VARCHAR(255),
  passportNo VARCHAR(255),
  gender VARCHAR(255),
  dateOfBirth DATE,
  placeOfBirth VARCHAR(255),
  countryOfBirth VARCHAR(255),
  nonResident BOOLEAN,
  visaNo VARCHAR(255),
  workPermitNo VARCHAR(255),
  visaExpireDate DATE,
  workPermitExpireDate DATE
);

CREATE TABLE hr_settings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  employeeType VARCHAR(255),
  relatedUser VARCHAR(255),
  pinCode VARCHAR(255),
  badgeId VARCHAR(255),
  registrationNo VARCHAR(255),
  jobPosition VARCHAR(255),
  hourlyCost DECIMAL(10, 2),
  fleetMobilityCard VARCHAR(255)
);
