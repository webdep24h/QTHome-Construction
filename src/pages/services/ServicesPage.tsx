import React from 'react';
import { Link } from 'react-router-dom';
import { RiHome5Line, RiPencilRuler2Line, RiHammerLine, RiTeamLine, RiCheckLine, RiArrowRightLine, RiTimeLine, RiShieldCheckLine } from '@remixicon/react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 'xay-nha-tron-goi',
      icon: RiHome5Line,
      title: 'Xây Nhà Trọn Gói',
      subtitle: 'Dịch vụ hoàn thiện từ A đến Z',
      description: 'Dịch vụ xây dựng hoàn chỉnh từ thiết kế đến bàn giao, đảm bảo chất lượng và tiến độ theo cam kết.',
      price: 'Từ 8 triệu/m²',
      duration: '6-12 tháng',
      features: [
        'Tư vấn thiết kế miễn phí',
        'Báo giá chi tiết, minh bạch',
        'Vật liệu chất lượng cao',
        'Thi công theo tiêu chuẩn',
        'Bảo hành 5 năm',
        'Hỗ trợ thủ tục pháp lý'
      ],
      process: [
        'Khảo sát thực địa',
        'Thiết kế phương án',
        'Ký hợp đồng',
        'Thi công xây dựng',
        'Nghiệm thu và bàn giao'
      ],
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'thiet-ke-kien-truc',
      icon: RiPencilRuler2Line,
      title: 'Thiết Kế Kiến Trúc',
      subtitle: 'Không gian sống hiện đại',
      description: 'Thiết kế kiến trúc hiện đại, tối ưu không gian và phù hợp với phong thủy, thể hiện cá tính riêng của gia đình.',
      price: 'Từ 150k/m²',
      duration: '2-4 tuần',
      features: [
        'Thiết kế 3D chuyên nghiệp',
        'Tư vấn phong thủy',
        'Thiết kế theo yêu cầu',
        'Bản vẽ chi tiết đầy đủ',
        'Tính toán kết cấu',
        'Hỗ trợ xin phép xây dựng'
      ],
      process: [
        'Trao đổi ý tưởng',
        'Phác thảo ban đầu',
        'Thiết kế 3D',
        'Hoàn thiện bản vẽ',
        'Bàn giao hồ sơ'
      ],
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'sua-chua-nang-cap',
      icon: RiHammerLine,
      title: 'Sửa Chữa Nâng Cấp',
      subtitle: 'Cải tạo không gian cũ',
      description: 'Dịch vụ sửa chữa, cải tạo và nâng cấp nhà cũ thành không gian hiện đại, tiện nghi và tiết kiệm năng lượng.',
      price: 'Báo giá theo yêu cầu',
      duration: '2-6 tháng',
      features: [
        'Khảo sát hiện trạng chi tiết',
        'Đánh giá kết cấu an toàn',
        'Thiết kế cải tạo tối ưu',
        'Thi công nhanh gọn',
        'Ít ảnh hưởng sinh hoạt',
        'Đảm bảo mỹ thuật cao'
      ],
      process: [
        'Khảo sát hiện trạng',
        'Lập phương án cải tạo',
        'Thi công từng giai đoạn',
        'Hoàn thiện nội thất',
        'Bàn giao công trình'
      ],
      image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'tu-van-xay-dung',
      icon: RiTeamLine,
      title: 'Tư Vấn Xây Dựng',
      subtitle: 'Hỗ trợ chuyên nghiệp 24/7',
      description: 'Dịch vụ tư vấn chuyên nghiệp về quy hoạch, thiết kế, thi công và quản lý dự án xây dựng.',
      price: 'Miễn phí tư vấn ban đầu',
      duration: 'Linh hoạt',
      features: [
        'Tư vấn 24/7',
        'Đội ngũ chuyên nghiệp',
        'Giải pháp tối ưu chi phí',
        'Hỗ trợ thủ tục',
        'Quản lý dự án',
        'Giám sát chất lượng'
      ],
      process: [
        'Tiếp nhận yêu cầu',
        'Phân tích hiện trạng',
        'Đưa ra giải pháp',
        'Lập kế hoạch thực hiện',
        'Theo dõi và hỗ trợ'
      ],
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const whyChooseUs = [
    {
      icon: RiShieldCheckLine,
      title: 'Chất Lượng Đảm Bảo',
      description: 'Sử dụng vật liệu cao cấp và quy trình thi công chuẩn'
    },
    {
      icon: RiTimeLine,
      title: 'Đúng Tiến Độ',
      description: 'Cam kết hoàn thành đúng thời gian đã thỏa thuận'
    },
    {
      icon: RiTeamLine,
      title: 'Đội Ngũ Chuyên Nghiệp',
      description: 'Kỹ sư, kiến trúc sư và thợ thi công có kinh nghiệm'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary to-primary-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Dịch Vụ Xây Dựng
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Cung cấp đầy đủ các dịch vụ xây dựng từ thiết kế, thi công đến hoàn thiện với chất lượng đảm bảo
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                    index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 !== 0 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900">
                          {service.title}
                        </h2>
                        <p className="text-primary font-medium">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Service Info */}
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="bg-gray-50 p-4 rounded-xl">
                        <div className="text-primary font-bold text-lg">
                          {service.price}
                        </div>
                        <div className="text-gray-600 text-sm">Giá khởi điểm</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-xl">
                        <div className="text-primary font-bold text-lg">
                          {service.duration}
                        </div>
                        <div className="text-gray-600 text-sm">Thời gian thực hiện</div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Điểm Nổi Bật
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <RiCheckLine className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Process */}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Quy Trình Thực Hiện
                      </h3>
                      <div className="space-y-3">
                        {service.process.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-center">
                            <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                              {stepIndex + 1}
                            </div>
                            <span className="text-gray-700">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-button font-semibold hover:bg-primary-600 transition-colors group"
                    >
                      Liên hệ tư vấn
                      <RiArrowRightLine className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Image */}
                  <div className={index % 2 !== 0 ? 'lg:col-start-1' : ''}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-96 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Tại Sao Chọn <span className="text-primary">QT Home</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những ưu điểm vượt trội giúp chúng tôi trở thành đối tác tin cậy của hàng nghìn khách hàng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center group hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Công trình hoàn thành</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-gray-600">Năm kinh nghiệm</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-600">Khách hàng hài lòng</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600">Hỗ trợ khách hàng</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Bắt Đầu Dự Án Ngay Hôm Nay
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Liên hệ với chúng tôi để được tư vấn miễn phí và nhận báo giá chi tiết cho dự án của bạn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0888140868"
              className="bg-white text-primary px-8 py-4 rounded-button font-semibold hover:bg-gray-100 transition-colors"
            >
              Gọi ngay: 0888 140 868
            </a>
            <Link
              to="/calculator"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-button font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              Tính giá online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
