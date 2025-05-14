
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const InfoSection = () => {
  return (
    <div className="py-6">
      <h2 className="text-2xl font-semibold mb-4">关于升糖指数</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>什么是升糖指数?</AccordionTrigger>
          <AccordionContent>
            升糖指数（Glycemic Index，简称GI）是衡量食物中碳水化合物对血糖水平影响的一种测量方法。它表示食物对血糖水平的影响与纯葡萄糖相比较的百分比。GI值越高，表示该食物对血糖水平的影响越大。
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>如何解读升糖指数?</AccordionTrigger>
          <AccordionContent>
            <p>升糖指数通常分为三个级别：</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><span className="text-green-600 font-medium">低GI食物（55或以下）</span>：这些食物被身体慢慢消化和吸收，导致血糖水平缓慢上升。</li>
              <li><span className="text-yellow-600 font-medium">中GI食物（56-69）</span>：这些食物导致血糖水平中等速率上升。</li>
              <li><span className="text-red-600 font-medium">高GI食物（70或以上）</span>：这些食物被快速消化和吸收，导致血糖水平快速上升。</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>糖前期患者应该如何选择食物?</AccordionTrigger>
          <AccordionContent>
            <p>对于糖前期或糖尿病患者，建议：</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>优先选择低GI食物</li>
              <li>适量食用中GI食物</li>
              <li>尽量避免或限制高GI食物</li>
              <li>注意食物组合：将高GI食物与蛋白质、健康脂肪或纤维一起食用可以降低整体餐食的升糖反应</li>
              <li>控制食物的烹饪方式和时间，避免过度烹饪</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default InfoSection;
