import React, { useState } from 'react';
import $ from 'jquery'; 
const Contact = () => {
  const [data, setData] = useState(null);
  const [endpoint, setEndpoint] = useState(null); 

  const fetchData = (endpoint) => {
   
    $.ajax({
      url: `http://localhost:3030/contact/${endpoint}`,
      method: 'GET',
      dataType: 'json', 
      success: function(response) {
        setData(response); 
        setEndpoint(endpoint);
      },
      error: function(xhr, status, error) {
        console.error('Error fetching data:', error);
      }
    });
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Made by 🎀</h1>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <button
          style={{ padding: '10px 20px', margin: '0 10px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          onClick={() => fetchData('names')}
        >
          Fetch Names
        </button>
        <button
          style={{ padding: '10px 20px', margin: '0 10px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          onClick={() => fetchData('roll-numbers')}
        >
          Fetch Roll Numbers
        </button>
        <button
          style={{ padding: '10px 20px', margin: '0 10px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          onClick={() => fetchData('batches')}
        >
          Fetch Batches
        </button>
      </div>
      {data ? (
        <div>
          <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Data Received:</h2>
          <div style={{ backgroundColor: '#f4f4f4', padding: '20px', borderRadius: '5px' }}>
            {endpoint === 'names' && (
              <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                {data.names.map((name, index) => (
                  <li key={index} style={{ marginBottom: '10px' }}>{name}</li>
                ))}
              </ul>
            )}
            {endpoint === 'roll-numbers' && (
              <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                {data.rollNumbers.map((number, index) => (
                  <li key={index} style={{ marginBottom: '10px' }}> Roll No.{number}</li>
                ))}
              </ul>
            )}
            {endpoint === 'batches' && (
              <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                <li style={{ marginBottom: '10px' }}> Batch {data.batch}</li>
              </ul>
            )}
          </div>
        </div>
      ) : (
        <p style={{ textAlign: 'center' }}>Click the buttons to know who made this site , this will send ajax requests 😊😊</p>
      )}
    </div>
  );
};

export default Contact;
