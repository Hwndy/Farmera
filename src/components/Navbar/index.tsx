import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X, Sprout } from 'lucide-react';
import * as S from './styles';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <S.Nav>
      <S.Container>
        <S.NavContent>
          <S.Logo to="/">
            <Sprout size={32} />
            <span>Farmera</span>
          </S.Logo>

          <S.DesktopMenu>
            <S.NavLink to="/store">Store</S.NavLink>
            <S.NavLink to="/about">About Us</S.NavLink>
            <S.NavLink to="/help">Help</S.NavLink>
            
            <S.SearchContainer>
              <button onClick={() => setSearchOpen(!searchOpen)}>
                <Search size={20} />
              </button>
              {searchOpen && (
                <S.SearchInput>
                  <input type="text" placeholder="Search products..." />
                </S.SearchInput>
              )}
            </S.SearchContainer>

            <S.CartButton to="/cart">
              <ShoppingCart size={20} />
              <S.CartCount>0</S.CartCount>
            </S.CartButton>

            <S.AuthButtons>
              <S.SignInButton to="/signin">Sign In</S.SignInButton>
              <S.SignUpButton to="/signup">Create Account</S.SignUpButton>
            </S.AuthButtons>
          </S.DesktopMenu>

          <S.MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </S.MobileMenuButton>
        </S.NavContent>
      </S.Container>

      {isOpen && (
        <S.MobileMenu>
          <S.MobileNavLink to="/store">Store</S.MobileNavLink>
          <S.MobileNavLink to="/about">About Us</S.MobileNavLink>
          <S.MobileNavLink to="/help">Help</S.MobileNavLink>
          <S.MobileNavLink to="/signin">Sign In</S.MobileNavLink>
          <S.MobileNavLink to="/signup">Create Account</S.MobileNavLink>
        </S.MobileMenu>
      )}
    </S.Nav>
  );
}