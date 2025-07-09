import React, { useState } from 'react';
import { RiStarFill, RiDoubleQuotesL, RiArrowLeftLine, RiArrowRightLine } from '@remixicon/react';

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Anh Nguyễn Văn Minh',
      location: 'Hà Tĩnh',
      project: 'Biệt thự 2 tầng',
      rating: 5,
      content: 'QT Home đã giúp gia đình tôi xây dựng được ngôi nhà mơ ước. Từ khâu thiết kế đến thi công đều rất chuyên nghiệp và tỉ mỉ. Đặc biệt, đội ngũ luôn tư vấn nhiệt tình và hoàn thành đúng tiến độ cam kết.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 2,
      name: 'Chị Trần Thị Lan',
      location: 'Nghi Xuân, Hà Tĩnh',
      project: 'Nhà phố 3 tầng',
      rating: 5,
      content: 'Tôi rất hài lòng với chất lượng công trình và thái độ phục vụ của QT Home. Giá cả hợp lý, vật liệu chất lượng cao và đặc biệt là bảo hành chu đáo. Nhà tôi xây từ 2 năm trước đến nay vẫn rất bền đẹp.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 3,
      name: 'Anh Lê Văn Tuấn',
      location: 'Thạch Hà, Hà Tĩnh',
      project: 'Villa nghỉ dưỡng',
      rating: 5,
      content: 'Dự án villa của gia đình được QT Home thực hiện vượt cả mong đợi. Thiết kế độc đáo, thi công chỉn chu và đặc biệt là team luôn lắng nghe ý kiến để điều chỉnh cho phù hợp. Chắc chắn sẽ giới thiệu cho bạn bè.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 4,
      name: 'Chị Phạm Thị Mai',
      location: 'Đức Thọ, Hà Tĩnh',
      project: 'Sửa chữa nâng cấp nhà',
      rating: 5,
      content: 'QT Home đã giúp tôi cải tạo ngôi nhà cũ thành không gian hiện đại và tiện nghi. Đội thi công làm việc sạch sẽ, gọn gàng và hoàn thành nhanh chóng. Giá cả minh bạch, không phát sinh chi phí ngoài dự toán.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Khách Hàng <span className="text-primary">Nói Gì</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sự hài lòng và tin tưởng của khách hàng là động lực để chúng tôi không ngừng cải thiện chất lượng dịch vụ
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gray-50 rounded-3xl p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <RiDoubleQuotesL className="w-8 h-8 text-primary" />
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-8 right-8 flex space-x-2">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
              >
                <RiArrowLeftLine className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
              >
                <RiArrowRightLine className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Testimonial Content */}
            <div className="mt-12">
              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, index) => (
                  <RiStarFill key={index} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-bold text-gray-900 text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentTestimonial].project} • {testimonials[currentTestimonial].location}
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-gray-600">Khách hàng hài lòng</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-gray-600">Đánh giá trung bình</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">85%</div>
            <div className="text-gray-600">Khách hàng quay lại</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
