import React from 'react';
import { Link } from 'react-router-dom';
import { RiMapPinLine, RiPhoneLine, RiMailLine, RiTimeLine, RiFacebookFill, RiYoutubeFill, RiInstagramLine } from '@remixicon/react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <section className="bg-primary py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Đăng Ký Nhận Tin Tức Mới Nhất
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Nhận thông tin về các xu hướng xây dựng mới nhất, mẹo hay và ưu đãi đặc biệt từ QT Home Construction
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Email của bạn"
              className="flex-1 px-4 py-3 border border-gray-200 rounded-button focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-gray-800"
            />
            <button className="px-6 py-3 bg-white text-primary rounded-button font-medium hover:bg-gray-100 transition-colors whitespace-nowrap">
              Đăng Ký
            </button>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-1">
              <Link to="/" className="font-pacifico text-2xl text-white mb-4 inline-block">
                QT Home
              </Link>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Chuyên cung cấp dịch vụ xây dựng nhà trọn gói tại Hà Tĩnh với chất lượng cao và giá cả hợp lý.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <RiFacebookFill className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <RiYoutubeFill className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <RiInstagramLine className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Liên Hệ</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <RiMapPinLine className="w-5 h-5 mr-3 mt-1 text-primary flex-shrink-0" />
                  <span>20 Quang Trung - TP. Hà Tĩnh</span>
                </li>
                <li className="flex items-center">
                  <RiPhoneLine className="w-5 h-5 mr-3 text-primary flex-shrink-0" />
                  <a href="tel:0888140868" className="hover:text-white transition-colors">
                    0888 140 868
                  </a>
                </li>
                <li className="flex items-center">
                  <RiMailLine className="w-5 h-5 mr-3 text-primary flex-shrink-0" />
                  <a href="mailto:contact@qthome.vn" className="hover:text-white transition-colors">
                    contact@qthome.vn
                  </a>
                </li>
                <li className="flex items-start">
                  <RiTimeLine className="w-5 h-5 mr-3 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <div>Thứ 2 - Thứ 6: 8:00 - 17:00</div>
                    <div>Thứ 7: 8:00 - 12:00</div>
                    <div>Chủ nhật: Nghỉ</div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Liên Kết Nhanh</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    Trang chủ
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white transition-colors">
                    Giới thiệu
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white transition-colors">
                    Dịch vụ
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="hover:text-white transition-colors">
                    Dự án
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="hover:text-white transition-colors">
                    Tin tức
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors">
                    Liên hệ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Dịch Vụ</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/services" className="hover:text-white transition-colors">
                    Xây nhà trọn gói
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white transition-colors">
                    Thiết kế kiến trúc
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white transition-colors">
                    Thi công xây dựng
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white transition-colors">
                    Sửa chữa nâng cấp
                  </Link>
                </li>
                <li>
                  <Link to="/calculator" className="hover:text-white transition-colors">
                    Tính giá xây dựng
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-8 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 QT Home Construction. Tất cả quyền được bảo lưu.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Chính sách bảo mật
                </Link>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Điều khoản dịch vụ
                </Link>
                <a href="#" className="hover:text-white transition-colors">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
