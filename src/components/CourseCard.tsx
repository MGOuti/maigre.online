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
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        <div className="absolute right-3 top-3 rounded-full bg-card/90 px-2.5 py-1 text-xs font-semibold text-primary backdrop-blur">
          Liberando acesso
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-display text-lg font-semibold text-foreground">{course.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{course.description}</p>
      </div>
    </button>
  );
};

export default CourseCard;
