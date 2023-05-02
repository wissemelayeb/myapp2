import React from 'react';
import MESSI from '../../Image/MESSI.jpg'
function ProfilePhoto() {
  return (
    <div className="profile-photo-container">
      <img className="profile-photo" src={MESSI} alt="MyPhoto" />
    </div>
  );
}

export default ProfilePhoto;
