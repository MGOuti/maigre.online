import { useNavigate } from "react-router-dom";
import { isStarted, isCompleted } from "@/lib/courses";
import { CheckCircle2, Play } from "lucide-react";
import type { Course } from "@/lib/courses";

interface CourseCardProps {
  course: Course;
  index: number;
}

const CourseCard = ({ course, index }: CourseCardProps) => {
  const navigate = useNavigate();
  const started = isStarted(course.id);
  const completed = isCompleted(course.id);

  return (
    <button
      onClick={() => navigate(`/course/${course.id}`)}
      className="group relative w-full overflow-hidden rounded-lg border border-border bg-card text-left transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 animate-fade-in"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        {completed && (
          <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-success px-2.5 py-1 text-xs font-semibold text-success-foreground">
            <CheckCircle2 size={14} /> Concluida
          </div>
        )}
        {started && !completed && (
          <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">
            <Play size={14} /> Em andamento
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-display text-lg font-semibold text-foreground">{course.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{course.description}</p>
      </div>
    </button>
  );
};

export default CourseCard;
