import React from 'react';
import MESSI from '../../Image/MESSI.jpg';

// ProfilePhoto component
function ProfilePhoto() {
  return (
    // Container for the profile photo
    <div className="profile-photo-container">
      {/* Profile photo */}
      <img className="profile-photo" src={MESSI} alt="MyPhoto" />
    </div>
  );
}

export default ProfilePhoto;
