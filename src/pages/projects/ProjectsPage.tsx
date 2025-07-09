import React, { useState } from 'react';
import { RiEyeLine, RiRulerLine, RiTimeLine, RiMapPinLine } from '@remixicon/react';

const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tất cả' },
    { id: 'villa', name: 'Biệt thự' },
    { id: 'townhouse', name: 'Nhà phố' },
    { id: 'apartment', name: 'Chung cư' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Biệt thự hiện đại 2 tầng',
      category: 'villa',
      location: 'Hà Tĩnh',
      area: '180m²',
      duration: '8 tháng',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Thiết kế hiện đại với không gian mở, tối ưu ánh sáng tự nhiên và thông gió.',
      client: 'Gia đình anh Minh'
    },
    {
      id: 2,
      title: 'Nhà phố 3 tầng sang trọng',
      category: 'townhouse',
      location: 'Trung tâm Hà Tĩnh',
      area: '120m²',
      duration: '6 tháng',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Kiến trúc tân cổ điển kết hợp tiện nghi hiện đại, phù hợp với gia đình trẻ.',
      client: 'Gia đình chị Lan'
    },
    {
      id: 3,
      title: 'Biệt thự vườn phong cách Nhật',
      category: 'villa',
      location: 'Nghi Xuân, Hà Tĩnh',
      area: '250m²',
      duration: '10 tháng',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Hòa hợp với thiên nhiên, không gian yên bình và thư giãn.',
      client: 'Gia đình anh Tuấn'
    },
    {
      id: 4,
      title: 'Căn hộ chung cư cao cấp',
      category: 'apartment',
      location: 'Thành phố Hà Tĩnh',
      area: '85m²',
      duration: '3 tháng',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Tối ưu không gian nhỏ với thiết kế thông minh và tiện nghi.',
      client: 'Gia đình chị Mai'
    },
    {
      id: 5,
      title: 'Nhà phố kinh doanh 4 tầng',
      category: 'townhouse',
      location: 'Đức Thọ, Hà Tĩnh',
      area: '95m²',
      duration: '7 tháng',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Thiết kế đa năng vừa ở vừa kinh doanh hiệu quả.',
      client: 'Anh Hưng'
    },
    {
      id: 6,
      title: 'Villa nghỉ dưỡng ven biển',
      category: 'villa',
      location: 'Thạch Hà, Hà Tĩnh',
      area: '300m²',
      duration: '12 tháng',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Không gian nghỉ dưỡng với view hướng biển tuyệt đẹp.',
      client: 'Gia đình anh Quang'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary to-primary-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Dự Án Đã Thực Hiện
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Khám phá những công trình chất lượng cao đã được QT Home Construction hoàn thành
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-8 py-3 rounded-button font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors">
                      <RiEyeLine className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.year}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Details */}
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <RiMapPinLine className="w-4 h-4 mr-2 text-primary" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center">
                      <RiRulerLine className="w-4 h-4 mr-2 text-primary" />
                      <span>Diện tích: {project.area}</span>
                    </div>
                    <div className="flex items-center">
                      <RiTimeLine className="w-4 h-4 mr-2 text-primary" />
                      <span>Thời gian: {project.duration}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-500">Khách hàng:</p>
                    <p className="font-medium text-gray-700">{project.client}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Thành Tựu <span className="text-primary">Đáng Tự Hào</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Công trình hoàn thành</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-600">Khách hàng hài lòng</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-gray-600">Năm kinh nghiệm</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
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
            Bạn Muốn Có Một Công Trình Tương Tự?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Liên hệ với chúng tôi để được tư vấn thiết kế và báo giá chi tiết cho dự án của bạn
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
              Liên hệ tư vấn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
