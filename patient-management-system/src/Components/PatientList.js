

// src/components/PatientList.js
// import React from 'react';
// import './App.css'; // Import the App.css file for styling

// src/Components/PatientList.js
import React from 'react';
// import 'src/App.css'; // Adjust the path based on your project structure

// ... rest of the code


const PatientList = ({ patients, onDeletePatient }) => {
  return (
    <div>
      <h2>Patient List</h2>
      <table className="appointment-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Appointment Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.name}</td>
              <td>{patient.dob}</td>
              <td>{patient.appointmentDate}</td>
              <td>
                <button onClick={() => onDeletePatient(patient.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientList;

