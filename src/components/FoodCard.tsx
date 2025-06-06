
import { FoodItem } from "@/data/foodData";
import { cn } from "@/lib/utils";
import React from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FoodCardProps {
  food: FoodItem;
}

const FoodCard = ({ food }: FoodCardProps) => {
  // Function to determine GI level and badge color
  const getGILevel = (gi: number) => {
    if (gi === 0) return { level: "无", color: "bg-gray-400" };
    if (gi < 55) return { level: "低", color: "bg-green-500" };
    if (gi < 70) return { level: "中", color: "bg-yellow-500" };
    return { level: "高", color: "bg-red-500" };
  };

  // Function to determine GL level and color
  const getGLLevel = (gl?: number) => {
    if (gl === undefined || gl === 0) return { level: "无", color: "text-gray-500" };
    if (gl <= 10) return { level: "低", color: "text-green-600" };
    if (gl <= 19) return { level: "中", color: "text-yellow-600" };
    return { level: "高", color: "text-red-600" };
  };

  const giInfo = getGILevel(food.glycemicIndex);
  const glInfo = getGLLevel(food.glycemicLoad);

  return (
    <Card className="h-full flex flex-col transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{food.name}</CardTitle>
          <Badge className={cn("text-white", giInfo.color)}>
            {food.glycemicIndex === 0 ? "无GI" : `GI: ${food.glycemicIndex}`}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm">{food.description}</CardDescription>
      </CardContent>
      <CardFooter className="pt-2">
        <div className="w-full grid grid-cols-2 gap-2 text-sm text-muted-foreground">
          <div className="flex justify-between">
            <span>升糖指数:</span>
            <span className={cn(
              "font-medium",
              giInfo.color === "bg-green-500" ? "text-green-600" : 
              giInfo.color === "bg-yellow-500" ? "text-yellow-600" : 
              giInfo.color === "bg-red-500" ? "text-red-600" : 
              "text-gray-500"
            )}>
              {giInfo.level}
            </span>
          </div>
          <div className="flex justify-between">
            <span>升糖负荷:</span>
            <span className={cn("font-medium", glInfo.color)}>
              {food.glycemicLoad !== undefined ? `${food.glycemicLoad} (${glInfo.level})` : "无数据"}
            </span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default FoodCard;
