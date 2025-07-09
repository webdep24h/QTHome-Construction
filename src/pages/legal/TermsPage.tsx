import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Điều Khoản Dịch Vụ
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Khi sử dụng dịch vụ của QT Home Construction, bạn đồng ý tuân thủ các điều khoản sau đây.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Phạm Vi Dịch Vụ</h2>
            <p className="text-gray-700 mb-6">
              QT Home Construction cung cấp các dịch vụ:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Thiết kế kiến trúc và nội thất</li>
              <li>Thi công xây dựng nhà ở</li>
              <li>Sửa chữa và nâng cấp công trình</li>
              <li>Tư vấn xây dựng và quản lý dự án</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Quy Trình Thực Hiện</h2>
            <p className="text-gray-700 mb-6">
              Quy trình cung cấp dịch vụ bao gồm:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Tư vấn và khảo sát thực địa</li>
              <li>Lập thiết kế và báo giá</li>
              <li>Ký hợp đồng thi công</li>
              <li>Triển khai xây dựng theo tiến độ</li>
              <li>Nghiệm thu và bàn giao công trình</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Nghĩa Vụ Của Khách Hàng</h2>
            <p className="text-gray-700 mb-6">
              Khách hàng có nghĩa vụ:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Cung cấp thông tin chính xác về dự án</li>
              <li>Thanh toán đúng tiến độ theo hợp đồng</li>
              <li>Phối hợp thực hiện các thủ tục pháp lý</li>
              <li>Tạo điều kiện thuận lợi cho việc thi công</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cam Kết Của QT Home</h2>
            <p className="text-gray-700 mb-6">
              Chúng tôi cam kết:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Thi công đúng thiết kế và tiêu chuẩn kỹ thuật</li>
              <li>Sử dụng vật liệu chất lượng cao</li>
              <li>Hoàn thành đúng tiến độ cam kết</li>
              <li>Bảo hành công trình theo quy định</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Chính Sách Bảo Hành</h2>
            <p className="text-gray-700 mb-6">
              QT Home Construction bảo hành:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Kết cấu chính: 5 năm</li>
              <li>Hệ thống điện nước: 3 năm</li>
              <li>Hoàn thiện nội thất: 2 năm</li>
              <li>Thiết bị và phụ kiện: Theo quy định của nhà sản xuất</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Giải Quyết Tranh Chấp</h2>
            <p className="text-gray-700 mb-6">
              Mọi tranh chấp phát sinh sẽ được giải quyết thông qua thương lượng. 
              Nếu không thể thỏa thuận, tranh chấp sẽ được giải quyết tại Tòa án có thẩm quyền tại Hà Tĩnh.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Thay Đổi Điều Khoản</h2>
            <p className="text-gray-700 mb-6">
              QT Home Construction có quyền cập nhật điều khoản dịch vụ. 
              Các thay đổi sẽ được thông báo trước ít nhất 30 ngày.
            </p>

            <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Thông Tin Liên Hệ</h3>
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

export default TermsPage;
