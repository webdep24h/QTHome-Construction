import React from 'react';
import { RiAwardLine, RiShieldCheckLine, RiTeamLine, RiCustomerService2Line, RiMapPinLine, RiTimeLine } from '@remixicon/react';

const AboutPage: React.FC = () => {
  const milestones = [
    {
      year: '2008',
      title: 'Thành lập công ty',
      description: 'QT Home Construction được thành lập với sứ mệnh mang đến những ngôi nhà chất lượng cao cho người dân Hà Tĩnh.'
    },
    {
      year: '2012',
      title: 'Mở rộng quy mô',
      description: 'Đầu tư máy móc, thiết bị hiện đại và mở rộng đội ngũ nhân viên chuyên nghiệp.'
    },
    {
      year: '2016',
      title: 'Đạt chứng nhận ISO',
      description: 'Đạt chứng nhận ISO 9001:2015 về hệ thống quản lý chất lượng trong xây dựng.'
    },
    {
      year: '2020',
      title: 'Ứng dụng công nghệ',
      description: 'Triển khai hệ thống quản lý dự án số hóa và thiết kế 3D hiện đại.'
    },
    {
      year: '2025',
      title: 'Phát triển bền vững',
      description: 'Cam kết hướng tới xây dựng xanh và phát triển bền vững trong mọi dự án.'
    }
  ];

  const values = [
    {
      icon: RiShieldCheckLine,
      title: 'Chất Lượng',
      description: 'Cam kết sử dụng vật liệu cao cấp và áp dụng quy trình thi công chuẩn quốc tế.'
    },
    {
      icon: RiCustomerService2Line,
      title: 'Tận Tâm',
      description: 'Lắng nghe và thấu hiểu nhu cầu khách hàng để đưa ra giải pháp tối ưu nhất.'
    },
    {
      icon: RiTimeLine,
      title: 'Uy Tín',
      description: 'Hoàn thành đúng tiến độ cam kết và tuân thủ nghiêm ngặt các thỏa thuận.'
    },
    {
      icon: RiAwardLine,
      title: 'Chuyên Nghiệp',
      description: 'Đội ngũ có kinh nghiệm lâu năm và được đào tạo bài bản, chuyên sâu.'
    }
  ];

  const team = [
    {
      name: 'KTS. Nguyễn Văn Quang',
      position: 'Giám đốc & Kiến trúc sư trưởng',
      experience: '20 năm kinh nghiệm',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'KS. Trần Thị Mai',
      position: 'Kỹ sư trưởng',
      experience: '15 năm kinh nghiệm',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Lê Văn Tuấn',
      position: 'Trưởng phòng Thi công',
      experience: '18 năm kinh nghiệm',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Phạm Thị Lan',
      position: 'Trưởng phòng Thiết kế',
      experience: '12 năm kinh nghiệm',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary to-primary-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Về QT Home Construction
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Hơn 15 năm đồng hành cùng người dân Hà Tĩnh xây dựng những ngôi nhà chất lượng cao với giá cả hợp lý
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Câu Chuyện <span className="text-primary">Của Chúng Tôi</span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  QT Home Construction được thành lập vào năm 2008 với mục tiêu mang đến cho người dân Hà Tĩnh 
                  những dịch vụ xây dựng chất lượng cao với giá cả hợp lý. Khởi đầu từ một đội ngũ nhỏ với 
                  đam mê xây dựng, chúng tôi đã không ngừng phát triển và hoàn thiện.
                </p>
                <p>
                  Trải qua hơn 15 năm hoạt động, QT Home đã hoàn thành hơn 500 công trình lớn nhỏ, từ nhà ở 
                  dân dụng đến các công trình thương mại. Mỗi dự án là một cam kết về chất lượng và sự tin tưởng 
                  mà khách hàng dành cho chúng tôi.
                </p>
                <p>
                  Với phương châm "Chất lượng tạo nên uy tín", chúng tôi luôn đặt lợi ích khách hàng lên hàng đầu, 
                  từ khâu tư vấn thiết kế đến hoàn thiện bàn giao. Đội ngũ kỹ sư, kiến trúc sư và thợ thi công 
                  của chúng tôi đều có kinh nghiệm lâu năm và được đào tạo chuyên sâu.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="QT Home Construction team"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-gray-600 font-medium">Năm kinh nghiệm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Giá Trị <span className="text-primary">Cốt Lõi</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những giá trị này định hướng mọi hoạt động của chúng tôi và tạo nên sự khác biệt trong dịch vụ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Hành Trình <span className="text-primary">Phát Triển</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những mốc quan trọng trong quá trình xây dựng và phát triển của QT Home Construction
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary"></div>

              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Year Badge */}
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold z-10">
                    {milestone.year}
                  </div>

                  {/* Content */}
                  <div className={`bg-white p-6 rounded-2xl shadow-lg ml-20 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'
                  } md:w-5/12`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Đội Ngũ <span className="text-primary">Chuyên Nghiệp</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những con người tâm huyết và giàu kinh nghiệm sẽ đồng hành cùng bạn trong mỗi dự án
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.experience}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Sẵn Sàng Bắt Đầu Dự Án Của Bạn?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí và nhận báo giá chi tiết
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
      </section>
    </div>
  );
};

export default AboutPage;
