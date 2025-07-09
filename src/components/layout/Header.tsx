import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RiMapPinLine, RiMailLine, RiFacebookFill, RiYoutubeFill, RiInstagramLine, RiMenuLine, RiCloseLine, RiPhoneLine } from '@remixicon/react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActivePage = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: '/', label: 'Trang chủ' },
    { path: '/about', label: 'Giới thiệu' },
    { path: '/services', label: 'Dịch vụ' },
    { path: '/projects', label: 'Dự án' },
    { path: '/news', label: 'Tin tức' },
    { path: '/contact', label: 'Liên hệ' },
  ];

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-gray-100 py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center">
              <RiMapPinLine className="w-5 h-5 text-primary mr-1" />
              <span>20 Quang Trung - TP. Hà Tĩnh</span>
            </div>
            <div className="flex items-center">
              <RiMailLine className="w-5 h-5 text-primary mr-1" />
              <span>contact@qthome.vn</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-primary hover:text-white transition-colors">
              <RiFacebookFill className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-primary hover:text-white transition-colors">
              <RiYoutubeFill className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-primary hover:text-white transition-colors">
              <RiInstagramLine className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="font-pacifico text-3xl text-primary">QT Home</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium transition-colors relative ${
                    isActivePage(item.path)
                      ? 'text-primary'
                      : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  {item.label}
                  {isActivePage(item.path) && (
                    <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary"></div>
                  )}
                </Link>
              ))}
            </nav>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-700">
                <RiPhoneLine className="w-5 h-5 text-primary" />
                <span className="font-semibold">0888 140 868</span>
              </div>
              <Link
                to="/calculator"
                className="bg-primary text-white px-6 py-3 rounded-button font-medium hover:bg-primary-600 transition-colors"
              >
                Tư vấn ngay
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <RiCloseLine className="w-6 h-6" />
              ) : (
                <RiMenuLine className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t bg-white absolute left-0 right-0 top-full shadow-lg">
              <nav className="flex flex-col py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-4 py-3 font-medium transition-colors ${
                      isActivePage(item.path)
                        ? 'text-primary bg-primary-50'
                        : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="px-4 py-3 border-t">
                  <div className="flex items-center space-x-2 text-gray-700 mb-3">
                    <RiPhoneLine className="w-5 h-5 text-primary" />
                    <span className="font-semibold">0888 140 868</span>
                  </div>
                  <Link
                    to="/calculator"
                    className="block w-full text-center bg-primary text-white px-6 py-3 rounded-button font-medium hover:bg-primary-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Tư vấn ngay
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
