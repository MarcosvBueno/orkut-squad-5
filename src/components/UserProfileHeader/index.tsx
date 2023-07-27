import React from 'react';
import { ProfileHeader, UserProfile } from './style';
import { useNavigate } from 'react-router-dom';

interface UserProfileHeaderProps {
  profileImage: string;
  name: string;
  status: string;
  editProfilePath: string;
  buttonContent: string;
}

const UserProfileHeader: React.FC<UserProfileHeaderProps> = ({
  profileImage,
  name,
  status,
  editProfilePath,
  buttonContent
}) => {
  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate(editProfilePath);
  };

  return (
    <ProfileHeader>
      <UserProfile>
        <img src='https://i.imgur.com/jguCgC7.png' alt="" />
        <h2>{name}</h2>
        <p>{status}</p>
      </UserProfile>
      <button onClick={handleEditProfile}>{buttonContent}</button>
    </ProfileHeader>
  );
};

export default UserProfileHeader;
