import React from 'react';
import { Link } from 'react-router-dom';
import { RiPhoneLine, RiMessage3Line, RiCalculatorLine } from '@remixicon/react';

const FloatingContact: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {/* Phone Call */}
      <a
        href="tel:0888140868"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
        title="Gọi ngay: 0888 140 868"
      >
        <RiPhoneLine className="w-6 h-6" />
        <span className="absolute right-16 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Gọi ngay: 0888 140 868
        </span>
      </a>

      {/* Message/Contact */}
      <Link
        to="/contact"
        className="w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
        title="Gửi tin nhắn"
      >
        <RiMessage3Line className="w-6 h-6" />
        <span className="absolute right-16 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Gửi tin nhắn
        </span>
      </Link>

      {/* Price Calculator */}
      <Link
        to="/calculator"
        className="w-14 h-14 bg-primary hover:bg-primary-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
        title="Tính giá xây dựng"
      >
        <RiCalculatorLine className="w-6 h-6" />
        <span className="absolute right-16 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Tính giá xây dựng
        </span>
      </Link>
    </div>
  );
};

export default FloatingContact;
