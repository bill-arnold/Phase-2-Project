// // src/components/AddPatient.js
// import React, { useState } from 'react';

// const AddPatient = ({ onAddPatient }) => {
//   const [name, setName] = useState('');
//   const [dob, setDob] = useState('');
//   const [appointmentDate, setAppointmentDate] = useState('');

//   const handleAddPatient = () => {
//     // Perform validation if needed

//     // Create a new patient object
//     const newPatient = {
//       id: Date.now(),
//       name: name,
//       dob: dob,
//       appointmentDate: appointmentDate,
//     };

//     // Pass the new patient to the parent component
//     onAddPatient(newPatient);

//     // Clear the input fields
//     setName('');
//     setDob('');
//     setAppointmentDate('');
//   };

//   return (
//     <div>
//       <h2>Add Patient</h2>
//       <label>Name:</label>
//       <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

//       <label>Date of Birth:</label>
//       <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />

//       <label>Appointment Date:</label>
//       <input
//         type="date"
//         value={appointmentDate}
//         onChange={(e) => setAppointmentDate(e.target.value)}
//       />

//       <button onClick={handleAddPatient}>Add Patient</button>
//     </div>
//   );
// };

// export default AddPatient;


// src/components/AddPatient.js
import React, { useState } from 'react';
// import './App.css'; // Import the App.css file for styling
// Example for PatientList.js

import '../App.css'; // Update the path accordingly



const AddPatient = ({ onAddPatient }) => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');

  const handleAddPatient = () => {
    const newPatient = {
      id: Date.now(),
      name: name,
      dob: dob,
      appointmentDate: appointmentDate,
    };

    onAddPatient(newPatient);

    setName('');
    setDob('');
    setAppointmentDate('');
  };

  return (
    <div>
      <h2>Add Patient</h2>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>Date of Birth:</label>
      <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />

      <label>Appointment Date:</label>
      <input
        type="date"
        value={appointmentDate}
        onChange={(e) => setAppointmentDate(e.target.value)}
      />

      <button onClick={handleAddPatient}>Add Patient</button>
    </div>
  );
};

export default AddPatient;
