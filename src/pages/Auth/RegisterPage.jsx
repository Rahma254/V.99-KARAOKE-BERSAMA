// File: src/pages/Auth/RegisterPage.jsx

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import InputField from '../../components/common/InputField';
import Button from '../../components/common/Button';
import AnimatedBackground from '../../components/ui/AnimatedBackground';

// Deklarasi Styled-Components yang disalin dari LoginPage untuk konsistensi
const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const AuthFormWrapper = styled.div`
  padding: 3rem;
  width: 100%;
  max-width: 450px;
  background: rgba(13, 2, 33, 0.7);
  border: 1px solid #26175C;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  z-index: 2;
  position: relative;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
`;

const Subtext = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  color: #a9a9a9;
`;

const RegisterPage = () => {
  return (
    <AuthContainer>
        <AnimatedBackground />
        <AuthFormWrapper>
            <form>
                <Title>Create Account</Title>
                <InputField id="username" label="Username" type="text" />
                <InputField id="email" label="Email" type="email" />
                <InputField id="password" label="Password" type="password" />
                <Button primary="true" style={{width: '100%', marginTop: '1rem'}}>
                    Sign Up
                </Button>
                <Subtext>
                    Already have an account? <Link to="/login">Sign In</Link>
                </Subtext>
            </form>
        </AuthFormWrapper>
    </AuthContainer>
  );
};

export default RegisterPage;
