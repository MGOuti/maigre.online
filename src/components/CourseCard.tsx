import { useNavigate } from "react-router-dom";
import type { Course } from "@/lib/courses";

interface CourseCardProps {
  course: Course;
  index: number;
}

const CourseCard = ({ course, index }: CourseCardProps) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(`/course/${course.id}`)}
      className="group relative w-full overflow-hidden rounded-lg border border-border bg-card text-left transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 animate-fade-in"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="flex h-44 w-full items-center justify-center border-b border-border bg-secondary/50 px-6 text-center">
        <span className="font-display text-lg font-semibold text-primary">Accorder l'accès</span>
      </div>
      <div className="p-4">
        <h3 className="font-display text-lg font-semibold text-foreground">{course.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{course.description}</p>
      </div>
    </button>
  );
};

export default CourseCard;
