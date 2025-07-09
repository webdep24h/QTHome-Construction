import React from 'react';
import { useParams } from 'react-router-dom';
import { RiCalendarLine, RiEyeLine, RiUserLine } from '@remixicon/react';

const BlogDetailPage: React.FC = () => {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Xu Hướng Thiết Kế Nhà Ở Hiện Đại Năm 2025
            </h1>
            
            <div className="flex items-center text-gray-600 mb-6">
              <RiUserLine className="w-5 h-5 mr-2" />
              <span>QT Home Construction</span>
              <span className="mx-3">•</span>
              <RiCalendarLine className="w-5 h-5 mr-2" />
              <span>15/01/2025</span>
              <span className="mx-3">•</span>
              <RiEyeLine className="w-5 h-5 mr-2" />
              <span>5 phút đọc</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Xu hướng thiết kế nhà ở hiện đại"
              className="w-full h-96 object-cover rounded-2xl mb-8"
            />

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Năm 2025 đánh dấu một bước ngoặt mới trong lĩnh vực thiết kế kiến trúc nhà ở với những xu hướng 
              tối giản, bền vững và thông minh. Khám phá những ý tưởng thiết kế mới nhất để tạo nên ngôi nhà 
              hoàn hảo cho gia đình bạn.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Thiết Kế Tối Giản (Minimalism)</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Xu hướng thiết kế tối giản tiếp tục thống lĩnh trong năm 2025 với nguyên tắc "Less is more". 
              Không gian được tối ưu hóa với những đường nét đơn giản, màu sắc trung tính và chức năng rõ ràng.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Xây Dựng Xanh và Bền Vững</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Việc sử dụng vật liệu thân thiện với môi trường, hệ thống năng lượng tái tạo và thiết kế 
              tiết kiệm năng lượng đang trở thành tiêu chuẩn mới trong ngành xây dựng.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Không Gian Mở và Linh Hoạt</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Thiết kế không gian mở giúp tối đa hóa diện tích sử dụng và tạo cảm giác rộng rãi. 
              Các khu vực chức năng được kết nối một cách tự nhiên và linh hoạt.
            </p>

            <div className="bg-gray-50 p-6 rounded-2xl my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Lời Khuyên Từ Chuyên Gia</h3>
              <p className="text-gray-700 italic">
                "Khi thiết kế nhà ở hiện đại, hãy luôn ưu tiên chức năng trước thẩm mỹ. 
                Một ngôi nhà đẹp nhưng không tiện nghi sẽ không mang lại hạnh phúc cho gia đình."
              </p>
              <p className="text-primary font-medium mt-2">- KTS. Nguyễn Văn Quang, QT Home Construction</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogDetailPage;
