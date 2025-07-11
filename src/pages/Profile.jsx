import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEdit, FaSave } from 'react-icons/fa';
import Button from '../components/common/Button';
import InputField from '../components/common/InputField';

const ProfileWrapper = styled.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
  background: rgba(15, 8, 75, 0.5);
  padding: 2rem;
  border-radius: 15px;
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid #FFD700;
  object-fit: cover;
`;

const UserInfo = styled.div``;

const Username = styled.h1`
  font-size: 3rem;
  margin: 0;
`;

const UserBio = styled.p`
  color: #a9a9a9;
  font-size: 1.1rem;
`;

const Section = styled.div`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  margin-bottom: 1.5rem;
  border-left: 4px solid #00C4FF;
  padding-left: 1rem;
`;

const EditProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: rgba(15, 8, 75, 0.5);
  padding: 2rem;
  border-radius: 15px;
`;

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  // Placeholder data
  const user = {
    username: 'Nabila',
    bio: 'Founder & CEO of Nabila Studio Development.',
    avatarUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&q=80'
  };

  return (
    <ProfileWrapper>
      <ProfileHeader>
        <Avatar src={user.avatarUrl} alt="User Avatar" />
        <UserInfo>
          <Username>{user.username}</Username>
          <UserBio>{user.bio}</UserBio>
        </UserInfo>
      </ProfileHeader>

      <Section>
        <SectionTitle>Edit Profile</SectionTitle>
        <EditProfileForm>
          <InputField id="username" label="Username" defaultValue={user.username} disabled={!isEditing} />
          <InputField id="bio" label="Bio" defaultValue={user.bio} disabled={!isEditing} />
          {isEditing && <InputField id="avatarUrl" label="Avatar Image URL" />}
          
          {isEditing ? (
            <Button type="submit" onClick={() => setIsEditing(false)} primary>
              <FaSave />   Save Changes
            </Button>
          ) : (
            <Button type="button" onClick={() => setIsEditing(true)} secondary>
              <FaEdit />   Edit Profile
            </Button>
          )}
        </EditProfileForm>
      </Section>

      <Section>
        <SectionTitle>My AI Generated Art</SectionTitle>
        {/* Galeri dari Stability AI akan ditampilkan di sini */}
        <p style={{color: '#a9a9a9'}}>Your gallery is empty.</p>
      </Section>

    </ProfileWrapper>
  );
};

export default Profile;
