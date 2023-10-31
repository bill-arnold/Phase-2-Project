// // src/components/PatientList.js
// import React from 'react';

// const PatientList = ({ patients, onDeletePatient }) => {
//   return (
//     <div>
//       <h2>Patient List</h2>
//       <ul>
//         {patients.map((patient) => (
//           <li key={patient.id}>
//             {patient.name} - {patient.dob}
//             <button onClick={() => onDeletePatient(patient.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PatientList;

// src/components/PatientList.js
// import React from 'react';
// import './App.css'; // Import the App.css file for styling

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

