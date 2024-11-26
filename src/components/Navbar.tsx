import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="bg-green-50 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Sprout className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-green-800">Farmera</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/store" className="text-green-700 hover:text-green-500">Store</Link>
            <Link to="/about" className="text-green-700 hover:text-green-500">About Us</Link>
            <Link to="/help" className="text-green-700 hover:text-green-500">Help</Link>
            
            <div className="relative">
              <button onClick={() => setSearchOpen(!searchOpen)} className="text-green-700 hover:text-green-500">
                <Search className="h-5 w-5" />
              </button>
              {searchOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl p-2">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full px-4 py-2 rounded-lg border border-green-200 focus:outline-none focus:border-green-500"
                  />
                </div>
              )}
            </div>

            <Link to="/cart">
              <div className="relative">
                <ShoppingCart className="h-5 w-5 text-green-700 hover:text-green-500" />
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
              </div>
            </Link>

            <div className="flex items-center space-x-4">
              <Link to="/signin" className="text-green-700 hover:text-green-500">Sign In</Link>
              <Link to="/signup" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition-colors">
                Create Account
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-green-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-50 pb-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/store" className="block px-3 py-2 text-green-700 hover:bg-green-100 rounded-md">Store</Link>
            <Link to="/about" className="block px-3 py-2 text-green-700 hover:bg-green-100 rounded-md">About Us</Link>
            <Link to="/help" className="block px-3 py-2 text-green-700 hover:bg-green-100 rounded-md">Help</Link>
            <Link to="/signin" className="block px-3 py-2 text-green-700 hover:bg-green-100 rounded-md">Sign In</Link>
            <Link to="/signup" className="block px-3 py-2 text-green-700 hover:bg-green-100 rounded-md">Create Account</Link>
          </div>
        </div>
      )}
    </nav>
  );
}