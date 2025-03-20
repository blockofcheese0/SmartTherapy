import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import API from './api';

// Mock data to simulate fetching from backend
const mockPatients = [
    { id: 1, name: 'John Doe', details: 'Details about John Doe' },
    { id: 2, name: 'Jane Smith', details: 'Details about Jane Smith' },
    // ...add more patients as needed...
];

function App() {
    const [data, setData] = useState([]);
    const [patients, setPatients] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState(null);

    useEffect(() => {
        // Simulate fetching data from backend
        setTimeout(() => {
            setPatients(mockPatients);
        }, 1000);
    }, []);

    useEffect(() => {
        API.get('api-endpoint/')  // Replace with actual endpoint 
            .then(response => setData(response.data))
            .catch(error => console.error(error));
    }, []);

    return (

        <div className="app-container">

            {/* <div>
                <h1>Data from Django API</h1>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div> */}
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