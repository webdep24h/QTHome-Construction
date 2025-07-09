import React from 'react';
import { Link } from 'react-router-dom';
import { RiCalendarLine, RiEyeLine, RiArrowRightLine } from '@remixicon/react';

const NewsPage: React.FC = () => {
  const articles = [
    {
      id: 1,
      slug: 'xu-huong-thiet-ke-nha-o-hien-dai-2025',
      title: 'Xu Hướng Thiết Kế Nhà Ở Hiện Đại Năm 2025',
      excerpt: 'Khám phá những xu hướng thiết kế nhà ở mới nhất năm 2025 với phong cách tối giản, thân thiện môi trường.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Xu hướng',
      date: '15/01/2025',
      readTime: '5 phút đọc'
    },
    {
      id: 2,
      slug: 'meo-tiet-kiem-chi-phi-xay-dung',
      title: 'Mẹo Tiết Kiệm Chi Phí Xây Dựng Hiệu Quả',
      excerpt: 'Những cách thông minh để giảm chi phí xây dựng mà vẫn đảm bảo chất lượng công trình.',
      image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Mẹo hay',
      date: '12/01/2025',
      readTime: '7 phút đọc'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary to-primary-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tin Tức & Blog
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Cập nhật những thông tin mới nhất về xu hướng xây dựng và mẹo hay cho ngôi nhà của bạn
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <RiCalendarLine className="w-4 h-4 mr-1" />
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <RiEyeLine className="w-4 h-4 mr-1" />
                    <span>{article.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <Link
                    to={`/news/${article.slug}`}
                    className="inline-flex items-center text-primary font-medium hover:text-primary-600 transition-colors group"
                  >
                    Đọc tiếp
                    <RiArrowRightLine className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
