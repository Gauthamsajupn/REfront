import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Property.css"


function PropertyTable() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch properties from backend API when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('YOUR_BACKEND_API_ENDPOINT');
      setProperties(response.data);
    } catch (error) {
      console.error('Error fetching properties:', error);
      // Handle error, e.g., display error message to the user
    }
  };

  return (
    <div className="property-table-container">
      <h2>Property List</h2>
      <table className="property-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Parking</th>
            <th>Bedroom</th>
          </tr>
        </thead>
        <tbody>
          {properties.map(property => (
            <tr key={property.id}>
              <td>{property.name}</td>
              <td>{property.description}</td>
              <td>{property.price}</td>
              <td>{property.parking ? 'Yes' : 'No'}</td>
              <td>{property.bedroom}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PropertyTable;
