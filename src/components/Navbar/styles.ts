import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  background-color: var(--color-white);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 50;
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-primary);
`;

export const DesktopMenu = styled.div`
  display: none;
  align-items: center;
  gap: 2rem;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const NavLink = styled(Link)`
  color: var(--color-text);
  transition: color 0.2s;

  &:hover {
    color: var(--color-primary);
  }
`;

export const SearchContainer = styled.div`
  position: relative;
`;

export const SearchInput = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  margin-top: 0.5rem;
  width: 16rem;
  background: var(--color-white);
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  padding: 0.5rem;

  input {
    width: 100%;
    padding: 0.5rem 1rem;
    border: 1px solid var(--color-border);
    border-radius: 0.5rem;
    outline: none;

    &:focus {
      border-color: var(--color-primary);
    }
  }
`;

export const CartButton = styled(Link)`
  position: relative;
`;

export const CartCount = styled.span`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  background: var(--color-primary);
  color: var(--color-white);
  font-size: 0.75rem;
  height: 1rem;
  width: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const AuthButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SignInButton = styled(Link)`
  color: var(--color-text);
  transition: color 0.2s;

  &:hover {
    color: var(--color-primary);
  }
`;

export const SignUpButton = styled(Link)`
  background: var(--color-primary);
  color: var(--color-white);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s;

  &:hover {
    background: var(--color-primary-hover);
  }
`;

export const MobileMenuButton = styled.button`
  display: block;
  color: var(--color-text);

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  display: block;
  background: var(--color-white);
  padding: 1rem 0;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileNavLink = styled(Link)`
  display: block;
  padding: 0.5rem 1rem;
  color: var(--color-text);
  transition: background-color 0.2s;

  &:hover {
    background: var(--color-background);
  }
`;