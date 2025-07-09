import React, { useState } from 'react';
import { RiCalculatorLine, RiCheckLine, RiArrowRightLine } from '@remixicon/react';

const CalculatorPage: React.FC = () => {
  const [formData, setFormData] = useState({
    area: '',
    floors: '1',
    houseType: 'nha-pho',
    foundation: 'basic',
    structure: 'reinforced-concrete',
    finishing: 'standard',
    location: 'center'
  });

  const [result, setResult] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calculatePrice = () => {
    if (!formData.area) {
      alert('Vui lòng nhập diện tích');
      return;
    }

    const area = parseFloat(formData.area);
    let basePrice = 8000000; // 8 triệu/m² cơ bản

    // Tính theo loại nhà
    const houseMultiplier = {
      'nha-pho': 1.0,
      'biet-thu': 1.3,
      'nha-cap-4': 0.8,
      'nha-vuon': 1.2
    }[formData.houseType] || 1.0;

    // Tính theo móng
    const foundationMultiplier = {
      'basic': 1.0,
      'deep': 1.2,
      'pile': 1.4
    }[formData.foundation] || 1.0;

    // Tính theo kết cấu
    const structureMultiplier = {
      'reinforced-concrete': 1.0,
      'steel': 1.3,
      'mixed': 1.1
    }[formData.structure] || 1.0;

    // Tính theo hoàn thiện
    const finishingMultiplier = {
      'basic': 0.8,
      'standard': 1.0,
      'premium': 1.4,
      'luxury': 1.8
    }[formData.finishing] || 1.0;

    // Tính theo vị trí
    const locationMultiplier = {
      'center': 1.1,
      'suburb': 1.0,
      'rural': 0.9
    }[formData.location] || 1.0;

    // Tính theo số tầng
    const floorsMultiplier = 1 + (parseInt(formData.floors) - 1) * 0.15;

    const totalPrice = area * basePrice * houseMultiplier * foundationMultiplier * 
                      structureMultiplier * finishingMultiplier * locationMultiplier * floorsMultiplier;

    setResult(Math.round(totalPrice));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary to-primary-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tính Giá Xây Dựng
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Ước tính chi phí xây dựng ngôi nhà của bạn một cách nhanh chóng và chính xác
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-primary p-6 text-white">
                <div className="flex items-center">
                  <RiCalculatorLine className="w-8 h-8 mr-4" />
                  <h2 className="text-2xl font-bold">Công Cụ Tính Giá Xây Dựng</h2>
                </div>
                <p className="mt-2 opacity-90">
                  Nhập thông tin dự án để nhận báo giá ước tính
                </p>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Form Inputs */}
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Diện tích xây dựng (m²) *
                      </label>
                      <input
                        type="number"
                        name="area"
                        value={formData.area}
                        onChange={handleInputChange}
                        placeholder="Nhập diện tích"
                        className="w-full px-4 py-3 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Số tầng
                      </label>
                      <select
                        name="floors"
                        value={formData.floors}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="1">1 tầng</option>
                        <option value="2">2 tầng</option>
                        <option value="3">3 tầng</option>
                        <option value="4">4 tầng</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Loại nhà
                      </label>
                      <select
                        name="houseType"
                        value={formData.houseType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="nha-pho">Nhà phố</option>
                        <option value="biet-thu">Biệt thự</option>
                        <option value="nha-cap-4">Nhà cấp 4</option>
                        <option value="nha-vuon">Nhà vườn</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Loại móng
                      </label>
                      <select
                        name="foundation"
                        value={formData.foundation}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="basic">Móng băng thông thường</option>
                        <option value="deep">Móng sâu</option>
                        <option value="pile">Móng cọc</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Kết cấu
                      </label>
                      <select
                        name="structure"
                        value={formData.structure}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="reinforced-concrete">Bê tông cốt thép</option>
                        <option value="steel">Khung thép</option>
                        <option value="mixed">Kết cấu hỗn hợp</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Mức hoàn thiện
                      </label>
                      <select
                        name="finishing"
                        value={formData.finishing}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="basic">Cơ bản</option>
                        <option value="standard">Tiêu chuẩn</option>
                        <option value="premium">Cao cấp</option>
                        <option value="luxury">Sang trọng</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Vị trí
                      </label>
                      <select
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="center">Trung tâm thành phố</option>
                        <option value="suburb">Ngoại ô</option>
                        <option value="rural">Nông thôn</option>
                      </select>
                    </div>

                    <button
                      onClick={calculatePrice}
                      className="w-full bg-primary text-white py-4 rounded-button font-semibold hover:bg-primary-600 transition-colors flex items-center justify-center group"
                    >
                      <RiCalculatorLine className="w-5 h-5 mr-2" />
                      Tính giá ngay
                    </button>
                  </div>
                </div>

                {/* Result */}
                {result && (
                  <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-2xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Kết Quả Ước Tính
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="text-3xl font-bold text-primary mb-2">
                          {formatPrice(result)}
                        </div>
                        <div className="text-gray-600 mb-4">
                          Tổng chi phí ước tính ({formData.area}m²)
                        </div>
                        <div className="text-lg text-gray-700">
                          Đơn giá: {formatPrice(result / parseFloat(formData.area || '1'))}/m²
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-600 mb-4">
                          * Đây là mức giá ước tính. Giá thực tế có thể thay đổi tùy vào điều kiện thực tế của dự án.
                        </p>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-center">
                            <RiCheckLine className="w-4 h-4 text-green-500 mr-2" />
                            Bao gồm thiết kế cơ bản
                          </div>
                          <div className="flex items-center">
                            <RiCheckLine className="w-4 h-4 text-green-500 mr-2" />
                            Vật liệu theo tiêu chuẩn
                          </div>
                          <div className="flex items-center">
                            <RiCheckLine className="w-4 h-4 text-green-500 mr-2" />
                            Thi công hoàn thiện
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Contact CTA */}
                <div className="mt-8 p-6 bg-gray-50 rounded-2xl text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Cần Báo Giá Chi Tiết?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Liên hệ với chúng tôi để được khảo sát thực địa và báo giá chính xác nhất
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="tel:0888140868"
                      className="bg-primary text-white px-8 py-3 rounded-button font-semibold hover:bg-primary-600 transition-colors"
                    >
                      Gọi ngay: 0888 140 868
                    </a>
                    <a
                      href="/contact"
                      className="bg-white text-primary border-2 border-primary px-8 py-3 rounded-button font-semibold hover:bg-primary hover:text-white transition-colors"
                    >
                      Liên hệ tư vấn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CalculatorPage;
