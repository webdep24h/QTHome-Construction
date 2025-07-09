import React from 'react';
import { Link } from 'react-router-dom';
import { RiAwardLine, RiShieldCheckLine, RiTeamLine, RiCustomerService2Line, RiArrowRightLine } from '@remixicon/react';

const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: RiAwardLine,
      title: '15+ Năm Kinh Nghiệm',
      description: 'Với hơn 15 năm hoạt động trong lĩnh vực xây dựng tại Hà Tĩnh'
    },
    {
      icon: RiShieldCheckLine,
      title: 'Bảo Hành 5 Năm',
      description: 'Cam kết bảo hành chất lượng công trình lên đến 5 năm'
    },
    {
      icon: RiTeamLine,
      title: 'Đội Ngũ Chuyên Nghiệp',
      description: 'Đội ngũ kỹ sư, kiến trúc sư và thợ thi công có tay nghề cao'
    },
    {
      icon: RiCustomerService2Line,
      title: 'Hỗ Trợ 24/7',
      description: 'Đội ngũ tư vấn sẵn sàng hỗ trợ khách hàng mọi lúc'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <span className="text-primary font-semibold text-lg">Về QT Home Construction</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
                Đối Tác <span className="text-primary">Tin Cậy</span><br />
                Cho Ngôi Nhà Mơ Ước
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                QT Home Construction là đơn vị tiên phong trong lĩnh vực xây dựng nhà ở tại Hà Tĩnh. 
                Chúng tôi cam kết mang đến cho khách hàng những công trình chất lượng cao với 
                thiết kế hiện đại và giá cả hợp lý nhất.
              </p>
            </div>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Chất Lượng Đảm Bảo</h4>
                  <p className="text-gray-600">
                    Sử dụng vật liệu cao cấp, quy trình thi công chuẩn và kiểm tra chất lượng nghiêm ngặt.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Tiến Độ Đúng Hẹn</h4>
                  <p className="text-gray-600">
                    Lập kế hoạch chi tiết, quản lý tiến độ chặt chẽ và cam kết hoàn thành đúng thời gian.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Giá Cả Minh Bạch</h4>
                  <p className="text-gray-600">
                    Báo giá chi tiết, minh bạch từng hạng mục và không phát sinh chi phí ngoài dự toán.
                  </p>
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-button font-semibold hover:bg-primary-600 transition-colors group"
            >
              Tìm hiểu thêm
              <RiArrowRightLine className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Image & Highlights */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="QT Home Construction team at work"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-gray-600 font-medium">Công trình hoàn thành</div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-primary text-white p-4 rounded-xl shadow-xl">
              <div className="text-center">
                <RiShieldCheckLine className="w-8 h-8 mx-auto mb-2" />
                <div className="font-semibold text-sm">Bảo hành 5 năm</div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
