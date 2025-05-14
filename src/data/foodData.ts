
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
  {
    id: 31,
    name: '糙米饭',
    glycemicIndex: 50,
    category: 'staple',
    description: '比白米饭含有更多纤维，升糖指数较低'
  },
  {
    id: 32,
    name: '藜麦',
    glycemicIndex: 53,
    category: 'staple',
    description: '富含蛋白质和纤维的全谷物，升糖指数中等'
  },
  {
    id: 33,
    name: '玉米',
    glycemicIndex: 52,
    category: 'staple',
    description: '含有丰富的纤维和维生素，升糖指数中等'
  },
  {
    id: 34,
    name: '土豆',
    glycemicIndex: 78,
    category: 'staple',
    description: '烤土豆升糖指数高，煮熟后冷却的土豆升糖指数较低'
  },
  {
    id: 35,
    name: '荞麦面',
    glycemicIndex: 54,
    category: 'staple',
    description: '不含麸质，富含蛋白质和矿物质，升糖指数中等'
  },
  {
    id: 36,
    name: '小米粥',
    glycemicIndex: 71,
    category: 'staple',
    description: '熬成粥后升糖指数较高，建议少量食用'
  },
  {
    id: 37,
    name: '粗粮馒头',
    glycemicIndex: 48,
    category: 'staple',
    description: '添加了全麦粉和其他粗粮，升糖指数中等'
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
  {
    id: 38,
    name: '蓝莓',
    glycemicIndex: 53,
    category: 'fruit',
    description: '富含抗氧化物质，升糖指数中等'
  },
  {
    id: 39,
    name: '樱桃',
    glycemicIndex: 22,
    category: 'fruit',
    description: '低升糖指数，富含抗氧化物质和维生素'
  },
  {
    id: 40,
    name: '葡萄',
    glycemicIndex: 59,
    category: 'fruit',
    description: '含糖量较高，升糖指数中等'
  },
  {
    id: 41,
    name: '猕猴桃',
    glycemicIndex: 52,
    category: 'fruit',
    description: '富含维生素C和纤维，升糖指数中等'
  },
  {
    id: 42,
    name: '芒果',
    glycemicIndex: 56,
    category: 'fruit',
    description: '含糖量较高，但也富含维生素和纤维，升糖指数中等'
  },
  {
    id: 43,
    name: '柚子',
    glycemicIndex: 25,
    category: 'fruit',
    description: '低升糖指数，富含维生素C和纤维'
  },
  {
    id: 44,
    name: '梨',
    glycemicIndex: 38,
    category: 'fruit',
    description: '低升糖指数，富含纤维'
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
  {
    id: 45,
    name: '虾',
    glycemicIndex: 0,
    category: 'protein',
    description: '纯蛋白质，不含碳水化合物，不会影响血糖'
  },
  {
    id: 46,
    name: '猪肉瘦肉',
    glycemicIndex: 0,
    category: 'protein',
    description: '蛋白质来源，不含碳水化合物，不影响血糖'
  },
  {
    id: 47,
    name: '羊肉',
    glycemicIndex: 0,
    category: 'protein',
    description: '蛋白质和脂肪，不含碳水化合物，不影响血糖'
  },
  {
    id: 48,
    name: '金枪鱼',
    glycemicIndex: 0,
    category: 'protein',
    description: '富含omega-3脂肪酸，不含碳水化合物'
  },
  {
    id: 49,
    name: '鸭肉',
    glycemicIndex: 0,
    category: 'protein',
    description: '蛋白质和脂肪，不含碳水化合物，不影响血糖'
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
  {
    id: 50,
    name: '脱脂牛奶',
    glycemicIndex: 32,
    category: 'dairy',
    description: '低脂肪，但升糖指数与全脂牛奶相似'
  },
  {
    id: 51,
    name: '鲜奶油',
    glycemicIndex: 0,
    category: 'dairy',
    description: '主要含脂肪，几乎不含碳水化合物，不影响血糖'
  },
  {
    id: 52,
    name: '酸奶乳酪',
    glycemicIndex: 10,
    category: 'dairy',
    description: '发酵乳制品，升糖指数非常低'
  },
  {
    id: 53,
    name: '羊奶',
    glycemicIndex: 27,
    category: 'dairy',
    description: '比牛奶含有更多蛋白质和钙，升糖指数低'
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
  {
    id: 54,
    name: '榛子',
    glycemicIndex: 0,
    category: 'nut',
    description: '富含维生素E和健康脂肪，不会提高血糖'
  },
  {
    id: 55,
    name: '松子',
    glycemicIndex: 0,
    category: 'nut',
    description: '富含抗氧化物和健康脂肪，不影响血糖'
  },
  {
    id: 56,
    name: '巴西坚果',
    glycemicIndex: 0,
    category: 'nut',
    description: '富含硒和健康脂肪，不会提高血糖'
  },
  {
    id: 57,
    name: '夏威夷果',
    glycemicIndex: 0,
    category: 'nut',
    description: '富含单不饱和脂肪，不影响血糖水平'
  },
  {
    id: 58,
    name: '瓜子',
    glycemicIndex: 35,
    category: 'nut',
    description: '含有较多膳食纤维，升糖指数较低'
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
  },
  {
    id: 59,
    name: '牛轧糖',
    glycemicIndex: 78,
    category: 'sweet',
    description: '高升糖指数，含有大量糖和脂肪'
  },
  {
    id: 60,
    name: '巧克力饼干',
    glycemicIndex: 74,
    category: 'sweet',
    description: '高升糖指数，含有精制面粉和糖'
  },
  {
    id: 61,
    name: '奶糖',
    glycemicIndex: 70,
    category: 'sweet',
    description: '含有大量糖和脂肪，升糖指数高'
  },
  {
    id: 62,
    name: '果汁',
    glycemicIndex: 66,
    category: 'sweet',
    description: '比整个水果升糖指数更高，缺乏膳食纤维'
  },
  {
    id: 63,
    name: '苏打饮料',
    glycemicIndex: 63,
    category: 'sweet',
    description: '含有大量精制糖，升糖指数中等偏高'
  },
  {
    id: 64,
    name: '枣泥糕',
    glycemicIndex: 70,
    category: 'sweet',
    description: '虽然用枣制作，但升糖指数仍然较高'
  },
  {
    id: 65,
    name: '糖浆',
    glycemicIndex: 90,
    category: 'sweet',
    description: '极高升糖指数，含有高浓度的糖'
  }
];
