import { useNavigate } from "react-router-dom";
import type { Course } from "@/lib/courses";

interface CourseCardProps {
  course: Course;
  index: number;
}

const CourseCard = ({ course, index }: CourseCardProps) => {
  const navigate = useNavigate();
  const hasReleasedCover = Boolean(
    course.pdfUrl || course.id === "accelerateur" || course.upLessons?.some((lesson) => lesson.pdfUrl)
  );
  const isLogoCover = course.image.startsWith("/");

  return (
    <button
      onClick={() => navigate(`/course/${course.id}`)}
      className="group relative w-full overflow-hidden rounded-lg border border-border bg-card text-left transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 animate-fade-in"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {hasReleasedCover ? (
        <div className={`relative h-44 w-full overflow-hidden border-b border-border ${isLogoCover ? "bg-white" : ""}`}>
          <img
            src={course.image}
            alt={course.title}
            className={`h-full w-full transition-transform duration-500 ${
              isLogoCover
                ? "scale-150 object-contain p-0 group-hover:scale-[1.58]"
                : "object-cover group-hover:scale-105"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        </div>
      ) : (
        <div className="flex h-44 w-full items-center justify-center border-b border-border bg-secondary/50 px-6 text-center">
          <span className="font-display text-lg font-semibold text-primary">Accorder l'accès</span>
        </div>
      )}
      <div className="p-4">
        <h3 className="font-display text-lg font-semibold text-foreground">{course.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{course.description}</p>
      </div>
    </button>
  );
};

export default CourseCard;
