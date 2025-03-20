import React, { useState } from 'react';
import './App.css';

const patients = [
  { id: 1, name: 'John Doe', details: 'Details about John Doe' },
  { id: 2, name: 'Jane Smith', details: 'Details about Jane Smith' },
  // ...add more patients as needed...
];

function App() {
  const [selectedPatient, setSelectedPatient] = useState(null);

  return (
    <div className="app-container">
      <div className="left-column">
        <input type="text" placeholder="Search patients..." className="search-bar" />
        <ul className="patient-list">
          {patients.map(patient => (
            <li key={patient.id} onClick={() => setSelectedPatient(patient)}>
              {patient.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="right-column">
        {selectedPatient ? (
          <div>
            <h2>{selectedPatient.name}</h2>
            <p>{selectedPatient.details}</p>
          </div>
        ) : (
          <div>
            <h2>Welcome</h2>
            <img src="welcome.jpg" alt="Welcome" className="welcome-image" />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
