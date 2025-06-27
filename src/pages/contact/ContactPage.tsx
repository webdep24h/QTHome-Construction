import React, { useState } from 'react';
import { RiMapPinLine, RiPhoneLine, RiMailLine, RiTimeLine, RiSendPlaneLine, RiQuestionLine } from '@remixicon/react';

const ContactPage: React.FC = () => {
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
    console.log('Form submitted:', formData);
    alert('Cảm ơn bạn! Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.');
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

  const contactInfo = [
    {
      icon: RiMapPinLine,
      title: 'Địa chỉ',
      content: '20 Quang Trung - TP. Hà Tĩnh',
      description: 'Showroom và văn phòng làm việc chính'
    },
    {
      icon: RiPhoneLine,
      title: 'Hotline',
      content: '0888 140 868',
      description: 'Hỗ trợ 24/7, kể cả cuối tuần'
    },
    {
      icon: RiMailLine,
      title: 'Email',
      content: 'contact@qthome.vn',
      description: 'Phản hồi trong vòng 24 giờ'
    },
    {
      icon: RiTimeLine,
      title: 'Giờ làm việc',
      content: 'T2-T6: 8:00-17:00\nT7: 8:00-12:00\nCN: Nghỉ',
      description: 'Hotline 24/7 cho trường hợp khẩn cấp'
    }
  ];

  const faqs = [
    {
      question: 'Chi phí xây nhà trọn gói là bao nhiều?',
      answer: 'Chi phí dao động từ 8-15 triệu/m² tùy vào loại nhà, vật liệu và thiết kế. Chúng tôi sẽ báo giá chi tiết sau khi khảo sát thực địa.'
    },
    {
      question: 'Thời gian xây dựng một ngôi nhà mất bao lâu?',
      answer: 'Thời gian xây dựng thường từ 6-12 tháng tùy vào quy mô và độ phức tạp. Chúng tôi cam kết hoàn thành đúng tiến độ đã thỏa thuận.'
    },
    {
      question: 'QT Home có hỗ trợ thủ tục pháp lý không?',
      answer: 'Có, chúng tôi hỗ trợ đầy đủ các thủ tục như xin phép xây dựng, giấy phép môi trường và các giấy tờ liên quan khác.'
    },
    {
      question: 'Chế độ bảo hành của QT Home như thế nào?',
      answer: 'Chúng tôi bảo hành toàn bộ công trình 5 năm với kết cấu chính và 2 năm với các hạng mục hoàn thiện.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary to-primary-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Liên Hệ Với Chúng Tôi
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Hãy để lại thông tin để được tư vấn miễn phí về dự án xây dựng của bạn
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {info.title}
                  </h3>
                  <p className="text-lg text-primary font-medium mb-2 whitespace-pre-line">
                    {info.content}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {info.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Gửi Yêu Cầu Tư Vấn
                </h2>

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
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="Mô tả chi tiết về dự án của bạn..."
                    />
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

            {/* Map & Info */}
            <div className="space-y-8">
              {/* Google Map */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="h-96 bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <RiMapPinLine className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">
                      Bản đồ Google Maps sẽ được tích hợp tại đây
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      20 Quang Trung - TP. Hà Tĩnh
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-primary rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">
                  Cần Hỗ Trợ Ngay?
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:0888140868"
                    className="flex items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                  >
                    <RiPhoneLine className="w-6 h-6 mr-4" />
                    <div>
                      <div className="font-semibold">Gọi ngay</div>
                      <div className="opacity-90">0888 140 868</div>
                    </div>
                  </a>
                  
                  <a
                    href="mailto:contact@qthome.vn"
                    className="flex items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                  >
                    <RiMailLine className="w-6 h-6 mr-4" />
                    <div>
                      <div className="font-semibold">Gửi email</div>
                      <div className="opacity-90">contact@qthome.vn</div>
                    </div>
                  </a>
                </div>
                
                <p className="text-sm opacity-90 mt-6">
                  Đội ngũ tư vấn của chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Câu Hỏi <span className="text-primary">Thường Gặp</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những câu hỏi phổ biến mà khách hàng quan tâm khi sử dụng dịch vụ của chúng tôi
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <RiQuestionLine className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Vẫn có thắc mắc? Liên hệ với chúng tôi để được giải đáp chi tiết
            </p>
            <a
              href="tel:0888140868"
              className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-button font-semibold hover:bg-primary-600 transition-colors"
            >
              <RiPhoneLine className="w-5 h-5 mr-2" />
              Gọi ngay: 0888 140 868
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
