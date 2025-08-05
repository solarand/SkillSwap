import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { examples } from "./../../../utils/startPageUtils";
import ExempleCard from "./ui/exempleCard";

const StartPageExemplesTrade: React.FC = () => {
  const getItemsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 600) return 1;
      if (window.innerWidth < 991) return 2;
    }
    return 4;
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  useEffect(() => {
    const handleResize = () => {
      const newItemsPerView = getItemsPerView();
      if (newItemsPerView !== itemsPerView) {
        setItemsPerView(newItemsPerView);
        setCurrentIndex(0);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [itemsPerView]);

  const totalSlides = Math.ceil(examples.length / itemsPerView);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex < totalSlides - 1) {
        setCurrentIndex((prev) => prev + 1);
      }
    },
    onSwipedRight: () => {
      if (currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      }
    },
    trackTouch: true,
    delta: 10,
  });

  const visibleItems = examples.slice(
    currentIndex * itemsPerView,
    (currentIndex + 1) * itemsPerView
  );

  return (
    <section className="bg-gray-50 py-20 px-4">
      <h1 className="text-header font-bold text-center">Примеры обменов</h1>
      <h2 className="text-paragraph mt-8 text-center">
        Посмотри, какими навыками обмениваются наши пользователи
      </h2>

      <div className="mt-24">
        {itemsPerView === 4 ? (
          <div className="flex justify-around">
            {examples.slice(0, 4).map((example) => (
              <ExempleCard key={example.h1} obj={example} />
            ))}
          </div>
        ) : (
          /* Мобильный/планшетный вид с свайпом */
          <div {...handlers} className="relative overflow-hidden touch-none">
            <div
              className="flex transition-transform duration-300"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {Array.from({ length: totalSlides }).map((_, pageIndex) => (
                <div
                  key={pageIndex}
                  className="w-full flex-shrink-0 flex justify-around"
                >
                  {examples
                    .slice(
                      pageIndex * itemsPerView,
                      (pageIndex + 1) * itemsPerView
                    )
                    .map((example) => (
                      <ExempleCard key={example.h1} obj={example} />
                    ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Индикаторы для мобильных/планшетов */}
        {itemsPerView < 4 && (
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Перейти к слайду ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default StartPageExemplesTrade;
