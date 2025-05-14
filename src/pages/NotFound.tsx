
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-50 to-green-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-teal-500 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">页面不存在</p>
        <Button asChild>
          <a href="/" className="inline-flex items-center gap-2">
            <Home size={18} /> 返回首页
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
