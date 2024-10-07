// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      Home: 'Home',
      Inventory: 'Inventory',
      Admin: 'Admin',
      Cart: 'Cart',
      Products: 'Products',
      // Các chuỗi khác của bạn
    }
  },
  vi: {
    translation: {
      Home: 'Trang Chủ',
      Inventory: 'Quản Lý Kho',
      Admin: 'Quản Trị',
      Cart: 'Giỏ Hàng',
      Products: 'Sản Phẩm',
      // Các chuỗi khác của bạn
    }
  }
};

i18n
  .use(initReactI18next) // Kết nối i18next với React
  .init({
    resources,
    lng: 'en', // Ngôn ngữ mặc định
    fallbackLng: 'en', // Ngôn ngữ dự phòng
    interpolation: {
      escapeValue: false // Không cần thoát giá trị
    }
  });

export default i18n;
