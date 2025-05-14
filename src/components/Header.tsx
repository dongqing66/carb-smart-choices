
import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-teal-500 to-green-500 text-white py-8 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">碳水智选</h1>
        <p className="text-lg max-w-2xl">
          为糖前期患者提供的升糖指数食物指南，帮助您做出更健康的饮食选择。
        </p>
      </div>
    </header>
  );
};

export default Header;
