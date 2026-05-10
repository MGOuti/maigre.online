import { courses } from "@/lib/courses";
import CourseCard from "@/components/CourseCard";
import AppHeader from "@/components/AppHeader";
import BottomNav from "@/components/BottomNav";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useState, useEffect } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

const bannerImages = ["https://i.postimg.cc/Hnwrq9TF/Gemini-Generated-Image-w9jdd2w9jdd2w9jd.png"];

const Index = () => {
  const lessonsAndUps = courses.filter((c) => c.category === "lesson" || c.category === "up");
  const bonuses = courses.filter((c) => c.category === "bonus");
  const autoplayPlugin = useRef(Autoplay({ delay: 20000, stopOnInteraction: false }));
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;
    const onSelect = () => setCurrent(carouselApi.selectedScrollSnap());
    carouselApi.on("select", onSelect);
    onSelect();
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  return (
    <div className="min-h-screen bg-background pb-20">
      <AppHeader />
      <main className="mx-auto max-w-md px-4 py-6">
        <section className="mb-8">
          <Carousel opts={{ loop: true }} plugins={[autoplayPlugin.current]} setApi={setCarouselApi} className="w-full">
            <CarouselContent>
              {bannerImages.map((src, i) => (
                <CarouselItem key={i}>
                  <div className="overflow-hidden rounded-xl">
                    <img src={src} alt={`Banner ${i + 1}`} className="aspect-video w-full object-cover" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="mt-3 flex justify-center gap-2">
            {bannerImages.map((_, i) => (
              <button
                key={i}
                onClick={() => carouselApi?.scrollTo(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 font-display text-lg font-semibold text-foreground">Aulas</h2>
          <div className="flex flex-col gap-4">
            {lessonsAndUps.map((course, i) => (
              <CourseCard key={course.id} course={course} index={i} />
            ))}
          </div>
        </section>

        {bonuses.length > 0 && (
          <section className="mt-8">
            <h2 className="mb-4 font-display text-lg font-semibold text-accent">Bonus</h2>
            <div className="flex flex-col gap-4">
              {bonuses.map((course, i) => (
                <CourseCard key={course.id} course={course} index={i + lessonsAndUps.length} />
              ))}
            </div>
          </section>
        )}
      </main>
      <BottomNav />
    </div>
  );
};

export default Index;
