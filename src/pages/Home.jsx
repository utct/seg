import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Home.css';
import productImage from '../assets/zachary-keimig-3fX4XRIkHVw-unsplash.png';

function Home() {
    const navigate = useNavigate(); 

    // Handle button click
    const goToMenu = () => {
        navigate('/menu');
    };

    return (
      <div className="home-page">
        <div className="home-left">
          <h1 className="home-title">CAFÉ 40</h1>
          <p className="home-description">
            Découvrez notre édition limitée : un café exceptionnel aux notes florales et d'agrumes.
          </p>
          <button className="order-button" onClick={goToMenu}>
            Commander
          </button>
        </div>
  
        {/* ad */}
        <div className="home-right">
          <img src={productImage} alt="Annonce de nouveau produit" className="product-image" />
        </div>
      </div>
    );
}

export default Home;
