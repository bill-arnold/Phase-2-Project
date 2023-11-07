
// src/components/PatientManagementApp.js
import React, { useState, useEffect } from 'react';
import PatientList from './PatientList';
import AddPatient from './AddPatient';
import axios from 'axios';  // Import axios here

import '../App.css'; // Import the App.css file for styling


const PatientManagementApp = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    // Use axios here
    axios.get('http://localhost:3001/patients')
      .then(response => setPatients(response.data))
      .catch(error => console.error('Error fetching patients', error));
  }, []);

  const handleAddPatient = (newPatient) => {
    // Use axios here
    axios.post('http://localhost:3000/patients', newPatient)
      .then(response => setPatients([...patients, response.data]))
      .catch(error => console.error('Error adding patient', error));

    // Set a reminder for the appointment (simulated with a simple setTimeout)
    const reminderTime = new Date(newPatient.appointmentDate).getTime() - Date.now();
    if (reminderTime > 0) {
      setTimeout(() => {
        alert(`Reminder: Appointment for ${newPatient.name} today!`);
      }, reminderTime);
    }
  };

  const handleDeletePatient = (patientId) => {
    // Use axios here
    axios.delete(`http://localhost:3001/patients/${patientId}`)
      .then(() => setPatients(patients.filter(patient => patient.id !== patientId)))
      .catch(error => console.error('Error deleting patient', error));
  };

  return (
    <div>
      <h1>Patient Management System</h1>
      <PatientList patients={patients} onDeletePatient={handleDeletePatient} />
      <AddPatient onAddPatient={handleAddPatient} />
    </div>
  );
};

export default PatientManagementApp;
