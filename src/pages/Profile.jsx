import React from 'react';
import './Profile.css';
import profileImage from '../assets/profile.jpg';

function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-container">
        {/* user info */}
        <div className="profile-info">
          <h2 className="user-name">Prénom Nom</h2>
          <p>Street Address Line 1</p>
          <p>City, Province</p>
          <p>Postal Code</p>
          <p>Phone Number</p>
          <p>email@email.com</p>

          {/* links */}
          <div className="profile-links">
            <a href="#" className="profile-link">Commandes</a>
            <a href="#" className="profile-link">Réservations</a>
          </div>
        </div>

        {/* pfp */}
        <div className="profile-image">
          <img src={profileImage} alt="Profil utilisateur" className="profile-picture" />
        </div>
      </div>
    </div>
  );
}

export default Profile;
