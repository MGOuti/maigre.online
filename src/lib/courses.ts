export interface UpLesson {
  title: string;
  videoUrl?: string;
  pdfUrl?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  type: "video" | "pdf" | "mixed";
  videoUrl?: string;
  pdfUrl?: string;
  category: "lesson" | "bonus" | "up";
  upLessons?: UpLesson[];
}

export const courses: Course[] = [
  {
    id: "commencez-ici",
    title: "Commencez ici",
    description: "Vue d'ensemble de la methode, de l'utilisation des lecons et du suivi de votre evolution.",
    image: "https://i.postimg.cc/ZY1jZ7jX/imagem_1.png",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/qd6WJfoFwnI",
    category: "lesson",
  },
  {
    id: "comprendre-votre-corps",
    title: "Comprendre votre corps",
    description: "Les donnees essentielles pour personnaliser le plan sans compliquer votre routine.",
    image:
      "https://i.postimg.cc/6pG8KcjL/obesity-problems-plus-size-female-hate-her-body-beauty-standards-bands-centimeter-measuring-tape-ins.jpg",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/sHKQxh0KYao",
    category: "lesson",
  },
  {
    id: "recette-personnalisee",
    title: "Recette personnalisee",
    description: "Generez une recette guide selon l'age, le poids, la taille, le tour de taille, le sommeil et la sante.",
    image: "https://i.postimg.cc/mDdLC1pf/11825.jpg",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/NT2i9diAtvI",
    category: "lesson",
  },
  {
    id: "erreurs-qui-ralentissent",
    title: "Les erreurs qui ralentissent les resultats",
    description: "Ce qu'il faut observer au quotidien pour eviter de stagner pendant le processus.",
    image:
      "https://i.postimg.cc/tgqGkCxz/sad-woman-with-fat-upset-bored-dieting-weight-loss-fail-fat-diet-scale-sad-asian-woman-weight-scale.jpg",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/88YXTO1tyiQ",
    category: "lesson",
  },
  {
    id: "maintenir-les-resultats",
    title: "Comment maintenir les resultats",
    description: "Des ajustements simples pour rester legere, reguliere et eviter l'effet yo-yo.",
    image: "https://i.postimg.cc/KYpcggHh/beautiful-young-woman-looking-herself-reflection-mirror-home.jpg",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/8qk7EKhJrUU",
    category: "lesson",
  },
  {
    id: "histoires-reelles",
    title: "Histoires reelles",
    description: "Des references et de la motivation pour traverser les phases les plus difficiles du processus.",
    image: "https://i.postimg.cc/9X6MpZFt/sporty-belly-woman-standing-isolated-dark-background.jpg",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/9_wAUK5czH0",
    category: "lesson",
  },
  {
    id: "continuer",
    title: "Continuez avec confiance",
    description: "La prochaine etape pour transformer le plan en habitude durable.",
    image: "https://i.postimg.cc/sgv8WRXR/10163.jpg",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/dDIhGbbBKxw",
    category: "lesson",
  },
  {
    id: "accelerateur",
    title: "Accelerateur 7X",
    description: "Des lecons bonus pour organiser votre concentration, votre regularite et votre energie.",
    image: "https://i.postimg.cc/P5kCtZgf/up1-7x-accelerator.png",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "up",
    upLessons: [
      { title: "Lecon 1", videoUrl: "https://www.youtube.com/embed/ZqTLwQQ7sbk" },
      { title: "Lecon 2", videoUrl: "https://www.youtube.com/embed/JvShTSYvbEg" },
      { title: "Lecon 3", videoUrl: "https://www.youtube.com/embed/Pgq9KsVgN8s" },
      { title: "Lecon 4", videoUrl: "https://www.youtube.com/embed/JwAKkaK5Hc4" },
    ],
  },
  {
    id: "glycemie-et-minceur",
    title: "Minceur et sucre dans le sang",
    description: "Un contenu bonus pour les femmes qui doivent accorder plus d'attention a ce point.",
    image: "https://i.postimg.cc/dVYPMSQP/up2-blood-sugar.png",
    type: "pdf",
    pdfUrl: "https://drive.google.com/file/d/11-yh3W5FflKIzaN1bILQ2hbQaRB7h3gn/preview",
    category: "up",
    upLessons: [
      { title: "Materiel", pdfUrl: "https://drive.google.com/file/d/11-yh3W5FflKIzaN1bILQ2hbQaRB7h3gn/preview" },
    ],
  },
  {
    id: "peau-ferme",
    title: "Peau ferme",
    description: "Comment prendre soin de la peau et reduire l'inquietude liee au relachement pendant le processus.",
    image: "https://i.postimg.cc/hP0MjC80/up3-zero-sagging.png",
    type: "pdf",
    pdfUrl: "https://drive.google.com/file/d/1ZBWQqKpkSOAH17mPGHhu0nnGLrJJOkWL/preview",
    category: "up",
    upLessons: [
      { title: "Materiel", pdfUrl: "https://drive.google.com/file/d/1ZBWQqKpkSOAH17mPGHhu0nnGLrJJOkWL/preview" },
    ],
  },
  {
    id: "bonus-envies",
    title: "Maitriser les envies de manger",
    description: "Des habitudes simples pour mieux gerer la faim emotionnelle, les grignotages et l'anxiete.",
    image: "https://i.postimg.cc/T3zcZCRK/2149459204.jpg",
    type: "pdf",
    pdfUrl: "https://drive.google.com/file/d/1voWK55iQRWcxyaHEUlCd96DVSKtnPptg/preview",
    category: "bonus",
  },
  {
    id: "bonus-soirees",
    title: "Soirees legeres, matins meilleurs",
    description: "Une routine du soir plus calme pour se reveiller avec plus de controle le lendemain.",
    image: "https://i.postimg.cc/VsKWYYfS/2148334435.jpg",
    type: "pdf",
    pdfUrl: "https://drive.google.com/file/d/1gEgZW3HafrddDI-4DohLcwkDIMc_XDHh/preview",
    category: "bonus",
  },
  {
    id: "bonus-regularite",
    title: "Carte de la regularite",
    description: "Des systemes simples pour continuer meme quand la motivation baisse.",
    image: "https://i.postimg.cc/0jKjRd5Y/253278.jpg",
    type: "pdf",
    pdfUrl: "https://drive.google.com/file/d/1ST8O7qWF5AgC6pK4JGcEkSlhU9GweR-L/preview",
    category: "bonus",
  },
];

const STORAGE_KEY = "stylo-maison-happ-progress";

interface CourseProgress {
  started: string[];
  completed: string[];
}

function getProgress(): CourseProgress {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return { started: [], completed: [] };
  return JSON.parse(raw);
}

function saveProgress(p: CourseProgress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

export function markStarted(courseId: string) {
  const p = getProgress();
  if (!p.started.includes(courseId)) {
    p.started.push(courseId);
    saveProgress(p);
  }
}

export function markCompleted(courseId: string) {
  const p = getProgress();
  if (!p.completed.includes(courseId)) {
    p.completed.push(courseId);
    saveProgress(p);
  }
}

export function isStarted(courseId: string) {
  return getProgress().started.includes(courseId);
}

export function isCompleted(courseId: string) {
  return getProgress().completed.includes(courseId);
}

export function getStartedCourses() {
  const p = getProgress();
  return courses.filter(
    (c) => c.category !== "up" && p.started.includes(c.id) && !p.completed.includes(c.id)
  );
}

export function getCompletedCourses() {
  const p = getProgress();
  return courses.filter((c) => c.category !== "up" && p.completed.includes(c.id));
}

export const lessonCourses = courses.filter((c) => c.category === "lesson");

export function getCompletedLessonCount() {
  const p = getProgress();
  return lessonCourses.filter((c) => p.completed.includes(c.id)).length;
}
