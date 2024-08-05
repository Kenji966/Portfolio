import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { cn } from "@/lib/utils";

// 使用具体的颜色代码替换 CSS 变量
const backgroundColors = [
  "#111827", // var(--slate-900) 对应的颜色
  "#000000", // var(--black) 对应的颜色
  "#1f2937", // var(--neutral-900) 对应的颜色
];

const linearGradients = [
  "linear-gradient(to bottom right, #06b6d4, #10b981)", // var(--cyan-500), var(--emerald-500)
  "linear-gradient(to bottom right, #ec4899, #4f46e5)", // var(--pink-500), var(--indigo-500)
  "linear-gradient(to bottom right, #f97316, #facc15)", // var(--orange-500), var(--yellow-500)
];

export const StickyScroll = ({
  content = [], // 默認值應為空數組
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null); // 更具體的類型
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });


  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / content.length);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    // 计算背景渐变
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[70rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
      ref={ref}
    >
      <div className="relative flex items-start px-4">
        <div className="max-w-xl">
          {content.length === 0 ? (
            <p>暂无内容</p>
          ) : (
            content.map((item, index) => (
              <div key={item.title + index} className="my-20">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-xl font-bold text-gray-600"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-lg text-gray-600 max-w-sm mt-10"
                >
                  {item.description}
                </motion.p>
              </div>
            ))
          )}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-20 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard]?.content ?? null}
      </div>
    </motion.div>
  );
};
