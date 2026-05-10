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
    id: "comece-aqui",
    title: "Comece aqui",
    description: "Visao geral do metodo, como usar as aulas e como acompanhar sua evolucao.",
    image: "https://i.postimg.cc/ZY1jZ7jX/imagem_1.png",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/qd6WJfoFwnI",
    category: "lesson",
  },
  {
    id: "entenda-seu-corpo",
    title: "Entenda seu corpo",
    description: "Os dados essenciais para personalizar o plano sem complicar a rotina.",
    image:
      "https://i.postimg.cc/6pG8KcjL/obesity-problems-plus-size-female-hate-her-body-beauty-standards-bands-centimeter-measuring-tape-ins.jpg",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/sHKQxh0KYao",
    category: "lesson",
  },
  {
    id: "receita-personalizada",
    title: "Receita personalizada",
    description: "Gere uma receita guia com base em idade, peso, altura, cintura, sono e saude.",
    image: "https://i.postimg.cc/mDdLC1pf/11825.jpg",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/NT2i9diAtvI",
    category: "lesson",
  },
  {
    id: "erros-que-atrasam",
    title: "Erros que atrasam o resultado",
    description: "O que observar no dia a dia para evitar estagnar durante o processo.",
    image:
      "https://i.postimg.cc/tgqGkCxz/sad-woman-with-fat-upset-bored-dieting-weight-loss-fail-fat-diet-scale-sad-asian-woman-weight-scale.jpg",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/88YXTO1tyiQ",
    category: "lesson",
  },
  {
    id: "manter-resultados",
    title: "Como manter resultados",
    description: "Ajustes simples para continuar leve, consistente e sem efeito sanfona.",
    image: "https://i.postimg.cc/KYpcggHh/beautiful-young-woman-looking-herself-reflection-mirror-home.jpg",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/8qk7EKhJrUU",
    category: "lesson",
  },
  {
    id: "historias-reais",
    title: "Historias reais",
    description: "Referencias e motivacao para atravessar as fases mais dificeis do processo.",
    image: "https://i.postimg.cc/9X6MpZFt/sporty-belly-woman-standing-isolated-dark-background.jpg",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/9_wAUK5czH0",
    category: "lesson",
  },
  {
    id: "continue",
    title: "Continue firme",
    description: "O proximo passo para transformar o plano em um habito sustentavel.",
    image: "https://i.postimg.cc/sgv8WRXR/10163.jpg",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/dDIhGbbBKxw",
    category: "lesson",
  },
  {
    id: "acelerador",
    title: "Acelerador 7X",
    description: "Aulas extras para organizar foco, consistencia e energia durante o plano.",
    image: "https://i.postimg.cc/P5kCtZgf/up1-7x-accelerator.png",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "up",
    upLessons: [
      { title: "Aula 1", videoUrl: "https://www.youtube.com/embed/ZqTLwQQ7sbk" },
      { title: "Aula 2", videoUrl: "https://www.youtube.com/embed/JvShTSYvbEg" },
      { title: "Aula 3", videoUrl: "https://www.youtube.com/embed/Pgq9KsVgN8s" },
      { title: "Aula 4", videoUrl: "https://www.youtube.com/embed/JwAKkaK5Hc4" },
    ],
  },
  {
    id: "controle-glicemico",
    title: "Emagrecimento e acucar no sangue",
    description: "Um material extra para mulheres que precisam de mais atencao nesse ponto.",
    image: "https://i.postimg.cc/dVYPMSQP/up2-blood-sugar.png",
    type: "pdf",
    pdfUrl: "https://drive.google.com/file/d/11-yh3W5FflKIzaN1bILQ2hbQaRB7h3gn/preview",
    category: "up",
    upLessons: [
      { title: "Material", pdfUrl: "https://drive.google.com/file/d/11-yh3W5FflKIzaN1bILQ2hbQaRB7h3gn/preview" },
    ],
  },
  {
    id: "pele-firme",
    title: "Pele firme",
    description: "Como cuidar da pele e reduzir a preocupacao com flacidez durante o processo.",
    image: "https://i.postimg.cc/hP0MjC80/up3-zero-sagging.png",
    type: "pdf",
    pdfUrl: "https://drive.google.com/file/d/1ZBWQqKpkSOAH17mPGHhu0nnGLrJJOkWL/preview",
    category: "up",
    upLessons: [
      { title: "Material", pdfUrl: "https://drive.google.com/file/d/1ZBWQqKpkSOAH17mPGHhu0nnGLrJJOkWL/preview" },
    ],
  },
  {
    id: "bonus-compulsao",
    title: "Controle da vontade de comer",
    description: "Habitos simples para lidar melhor com fome emocional, beliscos e ansiedade.",
    image: "https://i.postimg.cc/T3zcZCRK/2149459204.jpg",
    type: "pdf",
    pdfUrl: "https://drive.google.com/file/d/1voWK55iQRWcxyaHEUlCd96DVSKtnPptg/preview",
    category: "bonus",
  },
  {
    id: "bonus-noite",
    title: "Noites leves, manhas melhores",
    description: "Uma rotina noturna mais calma para acordar com mais controle no dia seguinte.",
    image: "https://i.postimg.cc/VsKWYYfS/2148334435.jpg",
    type: "pdf",
    pdfUrl: "https://drive.google.com/file/d/1gEgZW3HafrddDI-4DohLcwkDIMc_XDHh/preview",
    category: "bonus",
  },
  {
    id: "bonus-consistencia",
    title: "Mapa da consistencia",
    description: "Sistemas simples para continuar mesmo quando a motivacao cair.",
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
