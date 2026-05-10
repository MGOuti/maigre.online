import { courses } from "@/lib/courses";
import CourseCard from "@/components/CourseCard";
import AppHeader from "@/components/AppHeader";
import BottomNav from "@/components/BottomNav";

const Index = () => {
  const lessonsAndUps = courses.filter((c) => c.category === "lesson" || c.category === "up");
  const bonuses = courses.filter((c) => c.category === "bonus");

  return (
    <div className="min-h-screen bg-background pb-20">
      <AppHeader />
      <main className="mx-auto max-w-md px-4 py-6">
        <section>
          <h2 className="mb-4 font-display text-lg font-semibold text-foreground">Lecons</h2>
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
