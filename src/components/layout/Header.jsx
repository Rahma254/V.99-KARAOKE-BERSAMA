import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import Button from '../common/Button'; // Akan kita buat

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(13, 2, 33, 0.5);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #26175C;
  z-index: 1000;
`;

const Logo = styled(Link)`
  font-family: 'Orbitron', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: #FFD700;
  text-shadow: 0 0 8px #FFD700;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 1rem;
  font-weight: 600;
  color: #F0F0F0;
  transition: all 0.3s ease;

  &.active, &:hover {
    color: #00C4FF;
    text-shadow: 0 0 5px #00C4FF;
  }
`;

const UserActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Header = () => {
  const isLoggedIn = false; // Ganti dengan state dari AuthContext nantinya

  return (
    <HeaderContainer>
      <Logo to="/">Nabila Studio</Logo>
      <Nav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/stream/start">Start Stream</StyledNavLink>
        {/* Tambah link lain jika perlu */}
      </Nav>
      <UserActions>
        {isLoggedIn ? (
          <FaUserCircle size={32} style={{ color: '#FFD700', cursor: 'pointer' }} />
        ) : (
          <>
            <Link to="/login" style={{color: '#f0f0f0', fontWeight: '600'}}>Login</Link>
            <Button to="/register" primary>Register</Button>
          </>
        )}
      </UserActions>
    </HeaderContainer>
  );
};

export default Header;
