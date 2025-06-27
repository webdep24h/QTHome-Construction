import React from 'react';
import { Link } from 'react-router-dom';
import { RiHome5Line, RiPencilRuler2Line, RiHammerLine, RiTeamLine, RiArrowRightLine, RiCheckLine } from '@remixicon/react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: RiHome5Line,
      title: 'Xây Nhà Trọn Gói',
      description: 'Dịch vụ xây dựng hoàn chỉnh từ thiết kế đến bàn giao, đảm bảo chất lượng và tiến độ.',
      features: ['Thiết kế miễn phí', 'Thi công nhanh chóng', 'Bảo hành 5 năm'],
      price: 'Từ 8 triệu/m²',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: RiPencilRuler2Line,
      title: 'Thiết Kế Kiến Trúc',
      description: 'Thiết kế kiến trúc hiện đại, tối ưu không gian và phù hợp với phong thủy.',
      features: ['3D visualization', 'Tư vấn phong thủy', 'Thiết kế theo yêu cầu'],
      price: 'Từ 150k/m²',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: RiHammerLine,
      title: 'Sửa Chữa Nâng Cấp',
      description: 'Dịch vụ sửa chữa, cải tạo và nâng cấp nhà cũ thành không gian hiện đại.',
      features: ['Tư vấn miễn phí', 'Vật liệu chất lượng', 'Thi công nhanh gọn'],
      price: 'Báo giá theo yêu cầu',
      image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: RiTeamLine,
      title: 'Tư Vấn Xây Dựng',
      description: 'Dịch vụ tư vấn chuyên nghiệp về quy hoạch, thiết kế và thi công xây dựng.',
      features: ['Tư vấn 24/7', 'Đội ngũ chuyên nghiệp', 'Giải pháp tối ưu'],
      price: 'Miễn phí tư vấn',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dịch Vụ <span className="text-primary">Chuyên Nghiệp</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            QT Home Construction cung cấp đầy đủ các dịch vụ xây dựng từ thiết kế, 
            thi công đến hoàn thiện với chất lượng đảm bảo và giá cả hợp lý.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Service Image */}
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Service Content */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <RiCheckLine className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="text-primary font-bold text-lg mb-4">
                    {service.price}
                  </div>

                  {/* CTA */}
                  <Link
                    to="/services"
                    className="inline-flex items-center text-primary font-medium hover:text-primary-600 transition-colors group"
                  >
                    Xem chi tiết
                    <RiArrowRightLine className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Cần tư vấn dịch vụ phù hợp?
            </h3>
            <p className="text-gray-600 mb-6">
              Liên hệ ngay với chúng tôi để được tư vấn miễn phí và báo giá chi tiết
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-primary text-white px-8 py-3 rounded-button font-semibold hover:bg-primary-600 transition-colors"
              >
                Liên hệ tư vấn
              </Link>
              <Link
                to="/calculator"
                className="bg-white text-primary border-2 border-primary px-8 py-3 rounded-button font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                Tính giá xây dựng
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
