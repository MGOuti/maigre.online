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
    videoUrl: "https://www.youtube.com/embed/Ac-FYRlTyuk",
    category: "lesson",
  },
  {
    id: "comprendre-votre-corps",
    title: "Qu'est-ce qui freine votre perte de poids ?",
    description: "Comprenez les blocages qui peuvent ralentir vos resultats et votre progression.",
    image:
      "https://i.postimg.cc/6pG8KcjL/obesity-problems-plus-size-female-hate-her-body-beauty-standards-bands-centimeter-measuring-tape-ins.jpg",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/UL3CuZyqWgw",
    category: "lesson",
  },
  {
    id: "recette-personnalisee",
    title: "Comment préparer l'astuce au vinaigre de cidre",
    description: "La preparation pas a pas de l'astuce au vinaigre de cidre.",
    image: "/aula-3-vinaigre.png",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/D_qQ2q6IJ0g",
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
    title: "Accélérateur 7X",
    description: "Des lecons bonus pour organiser votre concentration, votre regularite et votre energie.",
    image: "/accelerateur-7x.png",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "up",
    upLessons: [
      { title: "Lecon 1", videoUrl: "https://www.youtube.com/embed/GzBP-7neYjs" },
      { title: "Lecon 2", videoUrl: "https://www.youtube.com/embed/ZxY7Sv0aphI" },
      { title: "Lecon 3", videoUrl: "https://www.youtube.com/embed/Wv9GpILux7s" },
      { title: "Lecon 4", videoUrl: "https://www.youtube.com/embed/Verbr0-qAsw" },
    ],
  },
  {
    id: "glycemie-et-minceur",
    title: "Comment perdre du poids en contrôlant sa glycémie",
    description: "Un contenu bonus pour mieux comprendre le lien entre glycémie, énergie et perte de poids.",
    image: "/antiglycemie.png",
    type: "pdf",
    pdfUrl: "https://drive.google.com/file/d/1BaX2nfqX8SUko7zwG_yW-K-dEN0L3lR2/preview",
    category: "up",
    upLessons: [
      { title: "Document", pdfUrl: "https://drive.google.com/file/d/1BaX2nfqX8SUko7zwG_yW-K-dEN0L3lR2/preview" },
    ],
  },
  {
    id: "peau-ferme",
    title: "Zéro affaissement",
    description: "Comment prendre soin de la peau et réduire l'inquiétude liée au relâchement pendant le processus.",
    image: "/zero-cellulite.png",
    type: "pdf",
    pdfUrl: "https://drive.google.com/file/d/1-bgaixEOKwI24x6Q7Y15uWlUrSbzJe9a/preview",
    category: "up",
    upLessons: [
      { title: "Document", pdfUrl: "https://drive.google.com/file/d/1-bgaixEOKwI24x6Q7Y15uWlUrSbzJe9a/preview" },
    ],
  },
  {
    id: "bonus-envies",
    title: "Maîtriser les envies",
    description: "Des habitudes simples pour mieux gérer la faim émotionnelle, les grignotages et l'anxiété.",
    image: "https://i.postimg.cc/T3zcZCRK/2149459204.jpg",
    type: "pdf",
    pdfUrl: "https://drive.google.com/file/d/15fGm7r75d3AFALV-0XOYJ6bAHx0etfrt/preview",
    category: "bonus",
  },
  {
    id: "bonus-soirees",
    title: "Des soirées plus légères, des matins meilleurs",
    description: "Une routine du soir plus calme pour se réveiller avec plus de contrôle le lendemain.",
    image: "https://i.postimg.cc/VsKWYYfS/2148334435.jpg",
    type: "pdf",
    pdfUrl: "https://drive.google.com/file/d/1zmxJm5DnUWEnj8r50Vp_0a5lvVtRsR-n/preview",
    category: "bonus",
  },
  {
    id: "bonus-regularite",
    title: "Le plan directeur de la cohérence",
    description: "Des systèmes simples pour continuer même quand la motivation baisse.",
    image: "https://i.postimg.cc/0jKjRd5Y/253278.jpg",
    type: "pdf",
    pdfUrl: "https://drive.google.com/file/d/1xaJEf0PmK7nF2dH8V_Qa_7Tw23UeN2jg/preview",
    category: "bonus",
  },
];

const STORAGE_KEY = "stylo-maison-app-progress";

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
