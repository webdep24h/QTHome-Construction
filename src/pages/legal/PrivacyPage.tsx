import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Chính Sách Bảo Mật
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              QT Home Construction cam kết bảo vệ thông tin cá nhân của khách hàng theo các quy định pháp luật hiện hành.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Thu Thập Thông Tin</h2>
            <p className="text-gray-700 mb-6">
              Chúng tôi thu thập thông tin cá nhân của bạn khi bạn:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Đăng ký tư vấn dịch vụ</li>
              <li>Liên hệ qua form trên website</li>
              <li>Gọi điện hoặc gửi email cho chúng tôi</li>
              <li>Sử dụng các dịch vụ của QT Home Construction</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Sử Dụng Thông Tin</h2>
            <p className="text-gray-700 mb-6">
              Thông tin được sử dụng để:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Tư vấn và báo giá dịch vụ xây dựng</li>
              <li>Liên hệ và hỗ trợ khách hàng</li>
              <li>Cải thiện chất lượng dịch vụ</li>
              <li>Gửi thông tin khuyến mại (nếu có đồng ý)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Bảo Mật Thông Tin</h2>
            <p className="text-gray-700 mb-6">
              Chúng tôi áp dụng các biện pháp bảo mật nghiêm ngặt để bảo vệ thông tin cá nhân của bạn khỏi việc truy cập, 
              sử dụng hoặc tiết lộ trái phép.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Chia Sẻ Thông Tin</h2>
            <p className="text-gray-700 mb-6">
              QT Home Construction không bán, cho thuê hoặc chia sẻ thông tin cá nhân của khách hàng với bên thứ ba, 
              trừ khi có sự đồng ý của khách hàng hoặc theo yêu cầu của pháp luật.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Quyền Của Khách Hàng</h2>
            <p className="text-gray-700 mb-6">
              Bạn có quyền:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Truy cập và cập nhật thông tin cá nhân</li>
              <li>Yêu cầu xóa thông tin cá nhân</li>
              <li>Từ chối nhận thông tin quảng cáo</li>
              <li>Khiếu nại về việc xử lý thông tin cá nhân</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Liên Hệ</h2>
            <p className="text-gray-700 mb-6">
              Nếu có thắc mắc về chính sách bảo mật, vui lòng liên hệ:
            </p>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-gray-700 mb-2"><strong>QT Home Construction</strong></p>
              <p className="text-gray-700 mb-2">Địa chỉ: 20 Quang Trung - TP. Hà Tĩnh</p>
              <p className="text-gray-700 mb-2">Hotline: 0888 140 868</p>
              <p className="text-gray-700">Email: contact@qthome.vn</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
