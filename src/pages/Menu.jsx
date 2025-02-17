import React, { useState } from 'react';
import './Menu.css';
import { FaStar } from 'react-icons/fa';
import { Modal, Button, Toast } from 'react-bootstrap';
import espresso from '../assets/espresso.png';
import vanille from '../assets/vanille.png';
import cappuccino from '../assets/cappuccino.png';
import mocha from '../assets/mocha.png';
import matcha from '../assets/matcha.png';
import menthe from '../assets/menthe.png';
import fruits from '../assets/fruits.png';
import earlgrey from '../assets/earlgrey.png';

function Menu() {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);

  const coffees = [
    { name: "Espresso Intense", prices: { small: "$2.50", medium: "$3.20", large: "$4.00" }, image: espresso, mostOrdered: true },
    { name: "Vanille Crémeux", prices: { small: "$4.50", medium: "$5.00", large: "$5.50" }, image: vanille, mostOrdered: false },
    { name: "Cappuccino", prices: { small: "$3.50", medium: "$4.00", large: "$4.50" }, image: cappuccino, mostOrdered: false },
    { name: "Mocha Chocolat Noir", prices: { small: "$4.50", medium: "$5.20", large: "$5.70" }, image: mocha, mostOrdered: false },
  ];

  const teas = [
    { name: "Matcha", prices: { small: "$2.00", medium: "$2.50", large: "$3.00" }, image: matcha, mostOrdered: true },
    { name: "Thé à la Menthe", prices: { small: "$2.00", medium: "$2.50", large: "$3.00" }, image: menthe, mostOrdered: false },
    { name: "Thé aux Fruits", prices: { small: "$2.50", medium: "$3.00", large: "$3.50" }, image: fruits, mostOrdered: false },
    { name: "Earl Grey", prices: { small: "$2.50", medium: "$3.00", large: "$3.50" }, image: earlgrey, mostOrdered: false },
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setSelectedSize(null);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  const handleOrder = () => {
    if (selectedSize) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      handleClose();
    } else {
      alert('Veuillez sélectionner une taille avant de commander.');
    }
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="menu-page">
      {/* banner */}
      <div className="menu-banner">
        <h1 className="menu-title">Notre menu</h1>
        <p className="menu-subtitle">Explorez notre sélection de cafés et de thés</p>
      </div>

      {/* coffees */}
      <div className="menu-section">
        <h2 className="section-title">Cafés</h2>
        <div className="item-grid">
          {coffees.map((coffee, index) => (
            <div key={index} className="menu-item" onClick={() => handleItemClick(coffee)}>
              {coffee.mostOrdered && (
                <div className="most-ordered-badge">
                  <FaStar className="star-icon" /> Le Plus Commandé
                </div>
              )}
              <img src={coffee.image} alt={coffee.name} className="menu-image" />
              <p className="item-name">{coffee.name}</p>
              <p className="item-price">
                {coffee.prices.small} | {coffee.prices.medium} | {coffee.prices.large}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* teas */}
      <div className="menu-section">
        <h2 className="section-title">Thés</h2>
        <div className="item-grid">
          {teas.map((tea, index) => (
            <div key={index} className="menu-item" onClick={() => handleItemClick(tea)}>
              {tea.mostOrdered && (
                <div className="most-ordered-badge">
                  <FaStar className="star-icon" /> Uniquement en ligne
                </div>
              )}
              <img src={tea.image} alt={tea.name} className="menu-image" />
              <p className="item-name">{tea.name}</p>
              <p className="item-price">
                {tea.prices.small} | {tea.prices.medium} | {tea.prices.large}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* item modal */}
      {selectedItem && (
        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedItem.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="modal-content">
              <img src={selectedItem.image} alt={selectedItem.name} className="modal-image-small" />
              <div className="price-options">
                {Object.entries(selectedItem.prices).map(([size, price]) => (
                  <label key={size}>
                    <input
                      type="checkbox"
                      checked={selectedSize === size}
                      onChange={() => handleSizeSelect(size)}
                      className="size-checkbox"
                    />
                    {size.charAt(0).toUpperCase() + size.slice(1)}: {price}
                  </label>
                ))}
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fermer
            </Button>
            <Button variant="success" onClick={handleOrder}>
              Commander maintenant
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      {/* toast notif */}
      <div className="toast-container">
        <Toast show={showToast} onClose={() => setShowToast(false)} autohide delay={3000}>
          <Toast.Body>✅ Votre commande a été passée avec succès!</Toast.Body>
        </Toast>
      </div>
    </div>
  );
}

export default Menu;
