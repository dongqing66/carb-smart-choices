
import { useState, useMemo } from "react";
import { foodCategories, foodItems, type FoodCategory } from "@/data/foodData";
import CategoryCard from "@/components/CategoryCard";
import FoodCard from "@/components/FoodCard";
import InfoSection from "@/components/InfoSection";
import SearchBar from "@/components/SearchBar";
import Header from "@/components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Check, SortAsc, SortDesc } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Define sorting options
type SortOption = "none" | "gi-high-to-low" | "gi-low-to-high" | "gl-high-to-low" | "gl-low-to-high";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<FoodCategory | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState<SortOption>("none");
  const [showLowGiGl, setShowLowGiGl] = useState(false);

  // Filter foods based on selected category, search query, and low GI/GL filter
  const filteredFoods = useMemo(() => {
    let filtered = foodItems.filter((food) => {
      const categoryMatch = selectedCategory === "all" || food.category === selectedCategory;
      const searchMatch = food.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        food.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Apply low GI/GL filter if enabled
      const lowGiGlMatch = !showLowGiGl || 
                          (food.glycemicIndex < 55 && 
                          (!food.glycemicLoad || food.glycemicLoad <= 10));
                          
      return categoryMatch && searchMatch && lowGiGlMatch;
    });

    // Apply sorting
    if (sortOption !== "none") {
      filtered = [...filtered].sort((a, b) => {
        switch (sortOption) {
          case "gi-high-to-low":
            return b.glycemicIndex - a.glycemicIndex;
          case "gi-low-to-high":
            return a.glycemicIndex - b.glycemicIndex;
          case "gl-high-to-low":
            return (b.glycemicLoad || 0) - (a.glycemicLoad || 0);
          case "gl-low-to-high":
            return (a.glycemicLoad || 0) - (b.glycemicLoad || 0);
          default:
            return 0;
        }
      });
    }

    return filtered;
  }, [selectedCategory, searchQuery, sortOption, showLowGiGl]);

  // Get friendly name for sort option
  const getSortLabel = (option: SortOption) => {
    switch (option) {
      case "gi-high-to-low": return "升糖指数 (高→低)";
      case "gi-low-to-high": return "升糖指数 (低→高)";
      case "gl-high-to-low": return "升糖负荷 (高→低)";
      case "gl-low-to-high": return "升糖负荷 (低→高)";
      default: return "默认排序";
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        {/* Search and Sort Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-grow">
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </div>
          
          <div className="flex gap-2 flex-wrap">
            {/* Sort Dropdown */}
            <Select value={sortOption} onValueChange={(value) => setSortOption(value as SortOption)}>
              <SelectTrigger className="w-[180px]">
                <div className="flex items-center gap-2">
                  {sortOption.includes("high-to-low") ? (
                    <SortDesc className="h-4 w-4" />
                  ) : sortOption.includes("low-to-high") ? (
                    <SortAsc className="h-4 w-4" />
                  ) : null}
                  <SelectValue placeholder="排序方式" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">默认排序</SelectItem>
                <SelectItem value="gi-high-to-low">升糖指数 (高→低)</SelectItem>
                <SelectItem value="gi-low-to-high">升糖指数 (低→高)</SelectItem>
                <SelectItem value="gl-high-to-low">升糖负荷 (高→低)</SelectItem>
                <SelectItem value="gl-low-to-high">升糖负荷 (低→高)</SelectItem>
              </SelectContent>
            </Select>

            {/* Low GI/GL Filter */}
            <Button
              variant={showLowGiGl ? "default" : "outline"}
              className="flex gap-2 items-center"
              onClick={() => setShowLowGiGl(!showLowGiGl)}
            >
              {showLowGiGl && <Check className="h-4 w-4" />}
              低升糖食物
            </Button>
          </div>
        </div>

        {/* Active Filters Display */}
        {(sortOption !== "none" || showLowGiGl) && (
          <div className="flex gap-2 mb-4 flex-wrap">
            {sortOption !== "none" && (
              <Badge variant="secondary" className="flex items-center gap-1">
                排序: {getSortLabel(sortOption)}
              </Badge>
            )}
            {showLowGiGl && (
              <Badge variant="secondary" className="flex items-center gap-1">
                仅显示低升糖食物
              </Badge>
            )}
          </div>
        )}

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
