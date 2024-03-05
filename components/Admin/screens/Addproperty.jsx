import React, { useState } from 'react';
import axios from 'axios';
import "./Add.css"

function AddPropertyForm() {
  const [property, setProperty] = useState({
    name: '',
    description: '',
    price: 0,
    parking: false,
    bedroom: 0
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProperty(prevProperty => ({
      ...prevProperty,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make API call to send property data to backend
      const response = await axios.post('YOUR_BACKEND_API_ENDPOINT', property);
      console.log('Property added successfully:', response.data);
      // Reset form fields after successful submission
      setProperty({
        name: '',
        description: '',
        price: 0,
        parking: false,
        bedroom: 0
      });
    } catch (error) {
      console.error('Error adding property:', error);
      // Handle error, e.g., display error message to the user
    }
  };

  return (
    <div className="form-container">
      <h2>Add Property</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={property.name}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={property.description}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={property.price}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div className="form-group checkbox-group">
          <input
            type="checkbox"
            name="parking"
            checked={property.parking}
            onChange={handleChange}
            id="parking-checkbox"
          />
          <label htmlFor="parking-checkbox">Parking</label>
        </div>
        <div className="form-group">
          <label>Bedroom:</label>
          <input
            type="number"
            name="bedroom"
            value={property.bedroom}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-button">Add Property</button>
      </form>
    </div>
  );
}

export default AddPropertyForm;
