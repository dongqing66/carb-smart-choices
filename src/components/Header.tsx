
import * as React from "react";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-teal-500 to-green-500 text-white py-8 px-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">饮食升糖助手</h1>
          <p className="text-lg max-w-2xl">
            您的个性化饮食助手，轻松查询食物升糖指数(GI)与升糖负荷(GL)，助力健康饮食选择。
          </p>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
