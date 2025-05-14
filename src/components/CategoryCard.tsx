
import { cn } from "@/lib/utils";
import React from "react";
import { 
  Card,
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

interface CategoryCardProps {
  id: string;
  title: string;
  description: string;
  isSelected?: boolean;
  onClick?: () => void;
}

const CategoryCard = ({ 
  title, 
  description, 
  isSelected = false,
  onClick 
}: CategoryCardProps) => {
  return (
    <Card 
      className={cn(
        "cursor-pointer transition-all hover:shadow-md transform hover:-translate-y-1",
        isSelected ? "border-primary border-2" : "border-border"
      )}
      onClick={onClick}
    >
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
