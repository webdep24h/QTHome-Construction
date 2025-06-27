import React from 'react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      number: '500+',
      title: 'Công Trình Hoàn Thành',
      description: 'Các dự án xây dựng nhà ở chất lượng cao'
    },
    {
      number: '15+',
      title: 'Năm Kinh Nghiệm',
      description: 'Hoạt động chuyên nghiệp trong lĩnh vực xây dựng'
    },
    {
      number: '1000+',
      title: 'Khách Hàng Hài Lòng',
      description: 'Tin tướng và đồng hành cùng QT Home'
    },
    {
      number: '100%',
      title: 'Bảo Hành Chất Lượng',
      description: 'Cam kết bảo hành toàn bộ công trình'
    }
  ];

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 border-2 border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Những Con Số Ấn Tượng
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Hành trình 15 năm xây dựng và phát triển cùng với sự tin tưởng của khách hàng
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="relative">
                {/* Number */}
                <div className="text-5xl md:text-6xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {stat.title}
                </h3>
                
                {/* Description */}
                <p className="text-white/80 leading-relaxed">
                  {stat.description}
                </p>

                {/* Animated Border */}
                <div className="absolute -inset-4 border border-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Hãy để QT Home biến ước mơ thành hiện thực
            </h3>
            <p className="text-white/90 mb-6 text-lg">
              Với kinh nghiệm và uy tín đã được khẳng định, chúng tôi cam kết mang đến cho bạn ngôi nhà hoàn hảo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0888140868"
                className="bg-white text-primary px-8 py-4 rounded-button font-semibold hover:bg-gray-100 transition-colors"
              >
                Gọi ngay: 0888 140 868
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-button font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                Đặt lịch tư vấn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
