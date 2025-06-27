import React from 'react';
import { Link } from 'react-router-dom';
import { RiCheckLine, RiPhoneLine, RiArrowRightLine } from '@remixicon/react';

const HeroSection: React.FC = () => {
  const features = [
    'Thiết kế miễn phí',
    'Bảo hành 5 năm',
    'Thi công nhanh chóng',
    'Giá cả hợp lý'
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-r from-white/95 via-white/85 to-white/70">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2131&q=80')"
        }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              <span className="text-primary">DỊCH VỤ XÂY NHÀ</span><br />
              <span className="text-secondary">TRỌN GÓI</span><br />
              <span className="text-gray-700">TẠI HÀ TĨNH</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Chuyên cung cấp dịch vụ xây dựng nhà trọn gói với chất lượng cao, 
              thiết kế hiện đại và giá cả hợp lý. Từ thiết kế đến hoàn thiện, 
              chúng tôi đồng hành cùng bạn tạo nên ngôi nhà mơ ước.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3">
                    <RiCheckLine className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/calculator"
                className="bg-primary text-white px-8 py-4 rounded-button font-semibold hover:bg-primary-600 transition-colors flex items-center justify-center group"
              >
                Tính giá ngay
                <RiArrowRightLine className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a
                href="tel:0888140868"
                className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-button font-semibold hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
              >
                <RiPhoneLine className="w-5 h-5 mr-2" />
                0888 140 868
              </a>
            </div>
          </div>

          {/* Right side - Additional content or form */}
          <div className="hidden lg:block">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Nhận Tư Vấn Miễn Phí
              </h3>
              
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Họ và tên"
                    className="w-full px-4 py-3 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <input
                    type="tel"
                    placeholder="Số điện thoại"
                    className="w-full px-4 py-3 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-600">
                    <option value="">Dịch vụ quan tâm</option>
                    <option value="xay-nha-moi">Xây nhà mới</option>
                    <option value="sua-chua">Sửa chữa nâng cấp</option>
                    <option value="thiet-ke">Thiết kế kiến trúc</option>
                    <option value="tu-van">Tư vấn xây dựng</option>
                  </select>
                </div>
                
                <div>
                  <textarea
                    placeholder="Mô tả dự án của bạn..."
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-button font-semibold hover:bg-primary-600 transition-colors"
                >
                  Gửi yêu cầu tư vấn
                </button>
              </form>
              
              <p className="text-sm text-gray-600 mt-4 text-center">
                * Chúng tôi sẽ liên hệ với bạn trong vòng 30 phút
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
