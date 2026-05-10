import { getStartedCourses, getCompletedCourses } from "@/lib/courses";
import CourseCard from "@/components/CourseCard";
import AppHeader from "@/components/AppHeader";
import BottomNav from "@/components/BottomNav";

const ContinuePage = () => {
  const inProgress = getStartedCourses();
  const completed = getCompletedCourses();

  return (
    <div className="min-h-screen bg-background pb-20">
      <AppHeader title="Continuar" />
      <main className="mx-auto max-w-md px-4 py-6">
        {inProgress.length === 0 && completed.length === 0 ? (
          <div className="mt-20 text-center">
            <p className="text-muted-foreground">Nenhuma aula iniciada ainda.</p>
            <p className="mt-1 text-sm text-muted-foreground/60">Comece pela tela inicial.</p>
          </div>
        ) : (
          <>
            {inProgress.length > 0 && (
              <section>
                <h2 className="mb-4 font-display text-lg font-semibold text-accent">Em andamento</h2>
                <div className="flex flex-col gap-4">
                  {inProgress.map((c, i) => (
                    <CourseCard key={c.id} course={c} index={i} />
                  ))}
                </div>
              </section>
            )}
            {completed.length > 0 && (
              <section className="mt-8">
                <h2 className="mb-4 font-display text-lg font-semibold text-success">Concluidas</h2>
                <div className="flex flex-col gap-4">
                  {completed.map((c, i) => (
                    <CourseCard key={c.id} course={c} index={i} />
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </main>
      <BottomNav />
    </div>
  );
};

export default ContinuePage;
