
import { useState, useMemo } from "react";
import { foodCategories, foodItems, type FoodCategory } from "@/data/foodData";
import CategoryCard from "@/components/CategoryCard";
import FoodCard from "@/components/FoodCard";
import InfoSection from "@/components/InfoSection";
import SearchBar from "@/components/SearchBar";
import Header from "@/components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<FoodCategory | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter foods based on selected category and search query
  const filteredFoods = useMemo(() => {
    return foodItems.filter((food) => {
      const categoryMatch = selectedCategory === "all" || food.category === selectedCategory;
      const searchMatch = food.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        food.description.toLowerCase().includes(searchQuery.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        {/* Search Bar */}
        <div className="mb-6">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>

        {/* Category Selection - Mobile Tabs */}
        <div className="block md:hidden mb-6">
          <Tabs defaultValue="all" onValueChange={(value) => setSelectedCategory(value as FoodCategory | "all")}>
            <TabsList className="w-full flex overflow-x-auto">
              <TabsTrigger value="all">所有</TabsTrigger>
              {foodCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>{category.label}</TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Category Selection - Desktop Cards */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
          <CategoryCard 
            id="all"
            title="所有类别"
            description="查看所有食物"
            isSelected={selectedCategory === "all"}
            onClick={() => setSelectedCategory("all")}
          />
          {foodCategories.map((category) => (
            <CategoryCard 
              key={category.id}
              id={category.id}
              title={category.label}
              description={category.description}
              isSelected={selectedCategory === category.id}
              onClick={() => setSelectedCategory(category.id as FoodCategory)}
            />
          ))}
        </div>

        {/* Food Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
          {filteredFoods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
          {filteredFoods.length === 0 && (
            <div className="col-span-full text-center py-12 text-gray-500">
              没有找到符合条件的食物
            </div>
          )}
        </div>

        {/* Info Section */}
        <InfoSection />
      </main>

      <footer className="bg-muted py-6 text-center text-sm text-muted-foreground">
        <div className="container mx-auto">
          <p>© 2025 碳水智选 - 为糖前期患者设计的升糖指数指南</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
