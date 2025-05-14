
export interface FoodItem {
  id: number;
  name: string;
  glycemicIndex: number;
  category: FoodCategory;
  description: string;
  imageUrl?: string;
}

export type FoodCategory = 'staple' | 'fruit' | 'protein' | 'dairy' | 'nut' | 'sweet';

export const foodCategories = [
  { id: 'staple', label: '主食', description: '面包，米饭，面条等' },
  { id: 'fruit', label: '水果', description: '苹果，香蕉，橙子等' },
  { id: 'protein', label: '蛋白质', description: '鸡肉，牛肉，鱼等' },
  { id: 'dairy', label: '乳制品', description: '牛奶，奶酪，酸奶等' },
  { id: 'nut', label: '坚果', description: '杏仁，核桃，花生等' },
  { id: 'sweet', label: '甜食', description: '蛋糕，冰淇淋，巧克力等' },
];

export const foodItems: FoodItem[] = [
  // Staple foods
  {
    id: 1,
    name: '白米饭',
    glycemicIndex: 73,
    category: 'staple',
    description: '煮熟的白米饭，高升糖指数，建议少量食用'
  },
  {
    id: 2,
    name: '全麦面包',
    glycemicIndex: 51,
    category: 'staple',
    description: '全麦面包含有更多纤维，升糖指数较低'
  },
  {
    id: 3,
    name: '燕麦片',
    glycemicIndex: 55,
    category: 'staple',
    description: '富含纤维的健康早餐选择'
  },
  {
    id: 4,
    name: '意大利面',
    glycemicIndex: 45,
    category: 'staple',
    description: '煮至硬芯(al dente)的意大利面升糖指数较低'
  },
  {
    id: 5,
    name: '红薯',
    glycemicIndex: 63,
    category: 'staple',
    description: '含有丰富的维生素和矿物质，但升糖指数中等'
  },
  
  // Fruits
  {
    id: 6,
    name: '苹果',
    glycemicIndex: 36,
    category: 'fruit',
    description: '低升糖指数，富含纤维和抗氧化物'
  },
  {
    id: 7,
    name: '香蕉',
    glycemicIndex: 51,
    category: 'fruit',
    description: '成熟的香蕉升糖指数较高，未完全成熟的较低'
  },
  {
    id: 8,
    name: '橙子',
    glycemicIndex: 43,
    category: 'fruit',
    description: '含有丰富的维生素C，升糖指数中等'
  },
  {
    id: 9,
    name: '西瓜',
    glycemicIndex: 72,
    category: 'fruit',
    description: '高升糖指数，建议适量食用'
  },
  {
    id: 10,
    name: '草莓',
    glycemicIndex: 40,
    category: 'fruit',
    description: '低升糖指数，富含抗氧化物质'
  },
  
  // Proteins
  {
    id: 11,
    name: '鸡胸肉',
    glycemicIndex: 0,
    category: 'protein',
    description: '纯蛋白质，几乎不含碳水化合物，不会影响血糖'
  },
  {
    id: 12,
    name: '牛肉',
    glycemicIndex: 0,
    category: 'protein',
    description: '纯蛋白质和脂肪，不含碳水化合物，不会影响血糖'
  },
  {
    id: 13,
    name: '三文鱼',
    glycemicIndex: 0,
    category: 'protein',
    description: '富含健康的omega-3脂肪酸，不会提高血糖'
  },
  {
    id: 14,
    name: '豆腐',
    glycemicIndex: 15,
    category: 'protein',
    description: '植物蛋白来源，升糖指数非常低'
  },
  {
    id: 15,
    name: '鸡蛋',
    glycemicIndex: 0,
    category: 'protein',
    description: '优质蛋白质来源，不影响血糖'
  },
  
  // Dairy products
  {
    id: 16,
    name: '全脂牛奶',
    glycemicIndex: 31,
    category: 'dairy',
    description: '含有蛋白质和脂肪，升糖指数较低'
  },
  {
    id: 17,
    name: '希腊酸奶',
    glycemicIndex: 11,
    category: 'dairy',
    description: '高蛋白，低糖，是糖尿病前期患者的理想选择'
  },
  {
    id: 18,
    name: '奶酪',
    glycemicIndex: 0,
    category: 'dairy',
    description: '主要含有蛋白质和脂肪，很少含有碳水化合物'
  },
  {
    id: 19,
    name: '冰淇淋',
    glycemicIndex: 61,
    category: 'dairy',
    description: '含有大量糖和脂肪，升糖指数较高'
  },
  {
    id: 20,
    name: '酸奶',
    glycemicIndex: 33,
    category: 'dairy',
    description: '无糖酸奶升糖指数较低，含糖酸奶则较高'
  },
  
  // Nuts
  {
    id: 21,
    name: '杏仁',
    glycemicIndex: 0,
    category: 'nut',
    description: '富含健康脂肪，蛋白质和纤维，不会提高血糖'
  },
  {
    id: 22,
    name: '核桃',
    glycemicIndex: 0,
    category: 'nut',
    description: '含有丰富的omega-3脂肪酸，对血糖影响极小'
  },
  {
    id: 23,
    name: '腰果',
    glycemicIndex: 22,
    category: 'nut',
    description: '含有少量碳水化合物，但升糖指数仍然较低'
  },
  {
    id: 24,
    name: '花生',
    glycemicIndex: 14,
    category: 'nut',
    description: '含有健康脂肪和蛋白质，升糖指数低'
  },
  {
    id: 25,
    name: '开心果',
    glycemicIndex: 15,
    category: 'nut',
    description: '低升糖指数，是健康的零食选择'
  },
  
  // Sweets
  {
    id: 26,
    name: '蛋糕',
    glycemicIndex: 87,
    category: 'sweet',
    description: '高升糖指数，含有大量的糖和精制碳水化合物，应尽量避免'
  },
  {
    id: 27,
    name: '黑巧克力',
    glycemicIndex: 23,
    category: 'sweet',
    description: '可可含量70%以上的黑巧克力升糖指数较低'
  },
  {
    id: 28,
    name: '蜂蜜',
    glycemicIndex: 55,
    category: 'sweet',
    description: '虽然是天然甜味剂，但仍含有大量糖，建议适量使用'
  },
  {
    id: 29,
    name: '果酱',
    glycemicIndex: 51,
    category: 'sweet',
    description: '含有大量糖，升糖指数中等偏高'
  },
  {
    id: 30,
    name: '冰激凌',
    glycemicIndex: 57,
    category: 'sweet',
    description: '含有大量糖和脂肪，升糖指数中等偏高'
  }
];
