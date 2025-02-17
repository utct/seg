import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Locations.css';
import { useNavigate } from 'react-router-dom';
import location1 from '../assets/location1.png';
import location2 from '../assets/location2.png';

function Locations() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '',
    selectedDate: new Date(),
    selectedHour: '',
  });

  const [activeForm, setActiveForm] = useState(null);

  const locations = [
    {
      id: 1,
      name: "Location #1",
      address: "Street Address Line 1",
      city: "City, Province",
      postal: "Postal Code",
      phone: "Phone Number",
      hours: "07:30 - 18:00",
      image: location1,
    },
    {
      id: 2,
      name: "Location #2",
      address: "Street Address Line 1",
      city: "City, Province",
      postal: "Postal Code",
      phone: "Phone Number",
      hours: "07:30 - 17:00",
      image: location2,
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, selectedDate: date });
  };

  const handleShowForm = (locationId) => {
    setActiveForm((prev) => (prev === locationId ? null : locationId));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservation = {
      id: Math.floor(Math.random() * 10000),
      date: formData.selectedDate.toLocaleDateString('fr-FR'),
      time: formData.selectedHour || 'Non spécifié',
      guests: formData.guests,
      email: formData.email,
      address: "Street Address Line 1",
      city: "City, Province",
      postal: "Postal Code",
      phone: "Phone Number",
    };
    navigate('/confirmation', { state: { reservation } });
  };

  const availableHours = [
    '07:30', '08:00', '08:30', '09:00', '09:30',
    '10:00', '10:30', '11:00', '11:30', '12:00',
    '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00'
  ];

  return (
    <div className="locations-page">
      <div className="locations-container">
        {locations.map((location) => (
          <div key={location.id} className="location-card">
            <img src={location.image} alt={location.name} className="location-image" />

            <h3 className="location-title">{location.name}</h3>
            <p>{location.address}</p>
            <p>{location.city}</p>
            <p>{location.postal}</p>
            <p>{location.phone}</p>
            <p><strong>Hours:</strong> {location.hours}</p>

            <button
              className="reserve-button"
              onClick={() => handleShowForm(location.id)}
            >
              {activeForm === location.id ? "Annuler" : "Réserver"}
            </button>

            {activeForm === location.id && (
              <form className="reservation-form" onSubmit={handleSubmit}>
                {/* datepicker */}
                <div className="datepicker-container">
                  <DatePicker
                    selected={formData.selectedDate}
                    onChange={handleDateChange}
                    inline
                  />
                </div>

                {/* hour */}
                <select
                  name="selectedHour"
                  value={formData.selectedHour}
                  onChange={handleChange}
                  className="hour-picker"
                  required
                >
                  <option value="">Sélectionnez une heure</option>
                  {availableHours.map((hour) => (
                    <option key={hour} value={hour}>{hour}</option>
                  ))}
                </select>

                {/* name */}
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nom"
                  required
                />

                {/* email */}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />

                {/* invites */}
                <input
                  type="number"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  placeholder="Invités"
                  min="1"
                  required
                />

                {/* submit*/}
                <button type="submit" className="submit-button">
                  Confirmer
                </button>
              </form>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Locations;
