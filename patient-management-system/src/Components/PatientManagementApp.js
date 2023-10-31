// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// // src/components/PatientManagementApp.js
// import React, { useState } from 'react';
// import PatientList from './PatientList';
// import AddPatient from './AddPatient';

// const PatientManagementApp = () => {
//   const [patients, setPatients] = useState([]);

//   const handleAddPatient = (newPatient) => {
//     // Update the list of patients with the new patient
//     setPatients([...patients, newPatient]);

//     // Set a reminder for the appointment (simulated with a simple setTimeout)
//     const reminderTime = new Date(newPatient.appointmentDate).getTime() - Date.now();
//     if (reminderTime > 0) {
//       setTimeout(() => {
//         alert(`Reminder: Appointment for ${newPatient.name} today!`);
//       }, reminderTime);
//     }
//   };

//   const handleDeletePatient = (patientId) => {
//     // Filter out the deleted patient
//     const updatedPatients = patients.filter((patient) => patient.id !== patientId);
//     setPatients(updatedPatients);
//   };

//   return (
//     <div>
//       <h1>Patient Management System</h1>
//       <PatientList patients={patients} onDeletePatient={handleDeletePatient} />
//       <AddPatient onAddPatient={handleAddPatient} />
//     </div>
//   );
// };

// export default PatientManagementApp;

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
    axios.post('http://localhost:3001/patients', newPatient)
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
