import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMapPinLine, RiPhoneLine, RiMailLine, RiTimeLine, RiSendPlaneLine } from '@remixicon/react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Cảm ơn bạn! Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.');
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

  const contactInfo = [
    {
      icon: RiMapPinLine,
      title: 'Địa chỉ',
      content: '20 Quang Trung - TP. Hà Tĩnh',
      action: 'Xem bản đồ'
    },
    {
      icon: RiPhoneLine,
      title: 'Hotline',
      content: '0888 140 868',
      action: 'Gọi ngay'
    },
    {
      icon: RiMailLine,
      title: 'Email',
      content: 'contact@qthome.vn',
      action: 'Gửi email'
    },
    {
      icon: RiTimeLine,
      title: 'Giờ làm việc',
      content: 'T2-T6: 8:00-17:00\nT7: 8:00-12:00',
      action: 'Đặt lịch hẹn'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Liên Hệ <span className="text-primary">Tư Vấn</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hãy để lại thông tin để được tư vấn miễn phí về dự án xây dựng của bạn. 
            Đội ngũ chuyên gia của chúng tôi sẽ liên hệ trong vòng 30 phút.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Thông Tin Liên Hệ
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start group">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-gray-600 mb-2 whitespace-pre-line">
                        {info.content}
                      </p>
                      <button className="text-primary font-medium hover:text-primary-600 transition-colors text-sm">
                        {info.action}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Links */}
            <div className="mt-12">
              <h4 className="font-semibold text-gray-900 mb-4">Liên Kết Nhanh</h4>
              <div className="space-y-2">
                <Link
                  to="/calculator"
                  className="block text-primary hover:text-primary-600 transition-colors"
                >
                  → Tính giá xây dựng online
                </Link>
                <Link
                  to="/services"
                  className="block text-primary hover:text-primary-600 transition-colors"
                >
                  → Xem chi tiết dịch vụ
                </Link>
                <Link
                  to="/projects"
                  className="block text-primary hover:text-primary-600 transition-colors"
                >
                  → Tham khảo dự án đã thực hiện
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Gửi Yêu Cầu Tư Vấn
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Nhập họ và tên"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Nhập số điện thoại"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Nhập địa chỉ email"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Dịch vụ quan tâm
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Chọn dịch vụ</option>
                      <option value="xay-nha-moi">Xây nhà mới</option>
                      <option value="thiet-ke">Thiết kế kiến trúc</option>
                      <option value="sua-chua">Sửa chữa nâng cấp</option>
                      <option value="tu-van">Tư vấn xây dựng</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Mô tả dự án
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Mô tả chi tiết về dự án của bạn..."
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="agreement"
                    required
                    className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <label htmlFor="agreement" className="ml-2 text-sm text-gray-600">
                    Tôi đồng ý với{' '}
                    <Link to="/privacy" className="text-primary hover:underline">
                      chính sách bảo mật
                    </Link>
                    {' '}và{' '}
                    <Link to="/terms" className="text-primary hover:underline">
                      điều khoản dịch vụ
                    </Link>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-button font-semibold hover:bg-primary-600 transition-colors flex items-center justify-center group"
                >
                  <RiSendPlaneLine className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Gửi yêu cầu tư vấn
                </button>
              </form>

              <p className="text-sm text-gray-600 mt-4 text-center">
                * Chúng tôi cam kết bảo mật thông tin và sẽ liên hệ trong vòng 30 phút
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
