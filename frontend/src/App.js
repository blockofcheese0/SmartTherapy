import logo from './logo.svg'; 
import './App.css'; 
import React, { useEffect, useState } from 'react'; 
import API from './api'; 
 
function App() { 
    const [data, setData] = useState([]); 
 
    useEffect(() => { 
        API.get('api-endpoint/')  // Replace with actual endpoint 
            .then(response => setData(response.data)) 
            .catch(error => console.error(error)); 
    }, []); 
 
    return ( 
        <div> 
            <h1>Data from Django API</h1> 
            <pre>{JSON.stringify(data, null, 2)}</pre> 
        </div> 
    ); 
} 
 
export default App;