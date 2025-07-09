import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiArrowRightLine, RiEyeLine, RiRulerLine, RiTimeLine } from '@remixicon/react';

const ProjectsSection: React.FC = () => {
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
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Thiết kế hiện đại với không gian mở, tối ưu ánh sáng tự nhiên'
    },
    {
      id: 2,
      title: 'Nhà phố 3 tầng sang trọng',
      category: 'townhouse',
      location: 'Trung tâm Hà Tĩnh',
      area: '120m²',
      duration: '6 tháng',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Kiến trúc tân cổ điển kết hợp tiện nghi hiện đại'
    },
    {
      id: 3,
      title: 'Biệt thự vườn phong cách Nhật',
      category: 'villa',
      location: 'Nghi Xuân, Hà Tĩnh',
      area: '250m²',
      duration: '10 tháng',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Hòa hợp với thiên nhiên, không gian yên bình và thư giãn'
    },
    {
      id: 4,
      title: 'Căn hộ chung cư cao cấp',
      category: 'apartment',
      location: 'Thành phố Hà Tĩnh',
      area: '85m²',
      duration: '3 tháng',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Tối ưu không gian nhỏ với thiết kế thông minh'
    },
    {
      id: 5,
      title: 'Nhà phố kinh doanh 4 tầng',
      category: 'townhouse',
      location: 'Đức Thọ, Hà Tĩnh',
      area: '95m²',
      duration: '7 tháng',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Thiết kế đa năng vừa ở vừa kinh doanh hiệu quả'
    },
    {
      id: 6,
      title: 'Villa nghỉ dưỡng ven biển',
      category: 'villa',
      location: 'Thạch Hà, Hà Tĩnh',
      area: '300m²',
      duration: '12 tháng',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Không gian nghỉ dưỡng với view hướng biển tuyệt đẹp'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dự Án <span className="text-primary">Tiêu Biểu</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Khám phá những công trình đã được QT Home Construction thực hiện với chất lượng cao và thiết kế độc đáo
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-button font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <RiRulerLine className="w-4 h-4 mr-2 text-primary" />
                    <span>{project.area}</span>
                  </div>
                  <div className="flex items-center">
                    <RiTimeLine className="w-4 h-4 mr-2 text-primary" />
                    <span>{project.duration}</span>
                  </div>
                </div>

                <div className="text-primary font-medium mb-4">
                  📍 {project.location}
                </div>

                {/* View Details Button */}
                <Link
                  to="/projects"
                  className="inline-flex items-center text-primary font-medium hover:text-primary-600 transition-colors group"
                >
                  Xem chi tiết
                  <RiArrowRightLine className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-button font-semibold hover:bg-primary-600 transition-colors group"
          >
            Xem tất cả dự án
            <RiArrowRightLine className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
