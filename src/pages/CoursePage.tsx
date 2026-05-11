import { useParams, useNavigate } from "react-router-dom";
import { courses, markStarted, markCompleted } from "@/lib/courses";
import {
  buildRecipeFullContent,
  buildRecipeProtocolHeader,
  loadSavedRecipe,
  saveRecipe,
  type RecipeFormData,
} from "@/lib/gelatinRecipe";
import { ArrowLeft, Mail, MessageCircle, Download, Pencil } from "lucide-react";
import { useEffect, useState } from "react";
import BottomNav from "@/components/BottomNav";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const defaultRecipeForm: RecipeFormData = {
  age: "30",
  height: "165",
  weight: "70",
  waist: "85",
  goal: "Perdre du poids avec plus de regularite",
  sleep: "7 heures par nuit",
  healthConditions: "",
  medications: "",
};

const videosLocked = true;

const AccessPlaceholder = () => (
  <div className="flex aspect-video flex-col items-center justify-center rounded-lg border border-primary/30 bg-card px-6 text-center">
    <p className="font-display text-xl font-semibold text-primary">Accorder l'accès</p>
    <p className="mt-2 text-sm text-muted-foreground">
      Ce contenu sera disponible bientot.
    </p>
  </div>
);

const CoursePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === id);
  const currentIndex = course ? courses.findIndex((c) => c.id === course.id) : -1;
  const nextLesson =
    course?.category === "lesson" && currentIndex >= 0
      ? courses.slice(currentIndex + 1).find((c) => c.category === "lesson") ?? null
      : null;

  const isUpWithLessons = course?.category === "up" && course.upLessons && course.upLessons.length > 0;
  const [selectedUpLessonIndex, setSelectedUpLessonIndex] = useState(0);

  const isRecipeModule = course?.id === "recette-personnalisee";
  const [recipeModalOpen, setRecipeModalOpen] = useState(false);
  const [savedRecipe, setSavedRecipe] = useState<RecipeFormData | null>(null);
  const [recipeForm, setRecipeForm] = useState<RecipeFormData>(defaultRecipeForm);

  useEffect(() => {
    if (isRecipeModule) setSavedRecipe(loadSavedRecipe());
  }, [course?.id, isRecipeModule]);

  useEffect(() => {
    if (course && course.category !== "up") markStarted(course.id);
  }, [course]);

  useEffect(() => {
    if (isUpWithLessons) setSelectedUpLessonIndex(0);
  }, [course?.id, isUpWithLessons]);

  const openRecipeModal = () => {
    setRecipeForm(savedRecipe ?? defaultRecipeForm);
    setRecipeModalOpen(true);
  };

  const updateRecipeForm = (key: keyof RecipeFormData, value: string) => {
    setRecipeForm((previous) => ({ ...previous, [key]: value }));
  };

  const confirmRecipe = () => {
    saveRecipe(recipeForm);
    setSavedRecipe(recipeForm);
    setRecipeModalOpen(false);
  };

  const downloadRecipePdf = () => {
    if (!savedRecipe) return;
    import("jspdf").then(({ jsPDF }) => {
      const doc = new jsPDF({ format: "a4", unit: "mm" });
      const header = `Stylo Maison Happ\n${buildRecipeProtocolHeader(savedRecipe)}\n\n`;
      const body = buildRecipeFullContent(savedRecipe);
      const lines = doc.splitTextToSize(header + body, 180);
      doc.setFontSize(10);
      doc.text(lines, 14, 20);
      doc.save("stylo-maison-happ-recette.pdf");
    });
  };

  if (!course) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p className="text-muted-foreground">Lecon introuvable.</p>
      </div>
    );
  }

  const handleNextOrHome = () => {
    if (course.category !== "up") markCompleted(course.id);
    if (nextLesson) navigate(`/course/${nextLesson.id}`);
    else navigate("/");
  };

  if (isUpWithLessons && course.upLessons) {
    const selectedLesson = course.upLessons[selectedUpLessonIndex] ?? course.upLessons[0];

    return (
      <div className="min-h-screen bg-background pb-20">
        <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
          <div className="mx-auto flex max-w-md items-center gap-3 px-4 py-4">
            <button onClick={() => navigate(-1)} className="text-muted-foreground transition-colors hover:text-foreground">
              <ArrowLeft size={22} />
            </button>
            <h1 className="truncate font-display text-lg font-semibold text-foreground">{course.title}</h1>
          </div>
        </header>

        <main className="mx-auto max-w-md px-4 py-6">
          {selectedLesson.pdfUrl ? (
            <div className="aspect-video overflow-hidden rounded-lg border border-border">
              <iframe
                key={selectedUpLessonIndex}
                src={selectedLesson.pdfUrl}
                className="h-full w-full"
                title={selectedLesson.title}
              />
            </div>
          ) : !videosLocked && selectedLesson.videoUrl ? (
            <div className="aspect-video overflow-hidden rounded-lg border border-border">
              <iframe
                key={selectedUpLessonIndex}
                src={selectedLesson.videoUrl}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={selectedLesson.title}
              />
            </div>
          ) : (
            <AccessPlaceholder />
          )}

          <p className="mt-6 text-center font-display font-medium text-foreground">Choisissez la lecon :</p>
          <div className="mt-3 flex flex-col gap-2">
            {course.upLessons.map((lesson, i) => (
              <button
                key={lesson.title}
                onClick={() => setSelectedUpLessonIndex(i)}
                className={`w-full rounded-lg py-3 font-display font-semibold transition-colors ${
                  i === selectedUpLessonIndex
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-card text-foreground hover:bg-accent/50"
                }`}
              >
                {lesson.title}
              </button>
            ))}
          </div>

          <div className="mt-8">
            <button
              onClick={() => navigate("/")}
              className="w-full rounded-lg gradient-primary py-4 font-display font-semibold text-primary-foreground transition-opacity hover:opacity-90 active:opacity-80"
            >
              Retour a l'accueil
            </button>
          </div>
        </main>
        <BottomNav />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-md items-center gap-3 px-4 py-4">
          <button onClick={() => navigate(-1)} className="text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft size={22} />
          </button>
          <h1 className="truncate font-display text-lg font-semibold text-foreground">{course.title}</h1>
        </div>
      </header>

      <main className="mx-auto max-w-md px-4 py-6">
        {course.pdfUrl ? (
          <div className="aspect-video overflow-hidden rounded-lg border border-border">
            <iframe src={course.pdfUrl} className="h-full w-full" title={course.title} />
          </div>
        ) : !videosLocked && course.videoUrl ? (
          <div className="aspect-video overflow-hidden rounded-lg border border-border">
            <iframe
              src={course.videoUrl}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={course.title}
            />
          </div>
        ) : (
          <AccessPlaceholder />
        )}

        {!videosLocked && isRecipeModule && (
          <>
            <div className="mt-6">
              <button
                type="button"
                onClick={openRecipeModal}
                className="w-full rounded-lg border border-primary bg-transparent py-3 font-display font-semibold text-primary transition-colors hover:bg-primary/10"
              >
                {savedRecipe ? "Modifier ma recette" : "Generer ma recette personnalisee"}
              </button>
            </div>

            {savedRecipe && (
              <div className="mt-6 rounded-lg border border-border bg-card p-5">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-base font-semibold text-foreground">Votre protocole</h3>
                  <button
                    type="button"
                    onClick={openRecipeModal}
                    className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    <Pencil size={14} />
                    Modifier
                  </button>
                </div>
                <p className="mb-4 text-sm text-muted-foreground">{buildRecipeProtocolHeader(savedRecipe)}</p>
                <pre className="whitespace-pre-wrap font-sans text-sm text-foreground">
                  {buildRecipeFullContent(savedRecipe)}
                </pre>
                <button
                  type="button"
                  onClick={downloadRecipePdf}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg gradient-primary py-3 font-display font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <Download size={18} />
                  Telecharger le PDF
                </button>
              </div>
            )}

            <Dialog open={recipeModalOpen} onOpenChange={setRecipeModalOpen}>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Personnalisez votre recette</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-2">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label htmlFor="age">Age</Label>
                      <Input id="age" type="number" min={1} max={120} value={recipeForm.age} onChange={(e) => updateRecipeForm("age", e.target.value)} className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="height">Taille (cm)</Label>
                      <Input id="height" type="number" min={100} max={250} value={recipeForm.height} onChange={(e) => updateRecipeForm("height", e.target.value)} className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="weight">Poids (kg)</Label>
                      <Input id="weight" type="number" min={30} max={250} value={recipeForm.weight} onChange={(e) => updateRecipeForm("weight", e.target.value)} className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="waist">Tour de taille (cm)</Label>
                      <Input id="waist" type="number" min={40} max={200} value={recipeForm.waist} onChange={(e) => updateRecipeForm("waist", e.target.value)} className="mt-1" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="goal">Objectif</Label>
                    <Input id="goal" value={recipeForm.goal} onChange={(e) => updateRecipeForm("goal", e.target.value)} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="sleep">Sommeil</Label>
                    <Input id="sleep" value={recipeForm.sleep} onChange={(e) => updateRecipeForm("sleep", e.target.value)} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="healthConditions">Maladies/conditions de sante</Label>
                    <Textarea id="healthConditions" value={recipeForm.healthConditions} onChange={(e) => updateRecipeForm("healthConditions", e.target.value)} className="mt-1 min-h-20" />
                  </div>
                  <div>
                    <Label htmlFor="medications">Medicaments/complements</Label>
                    <Textarea id="medications" value={recipeForm.medications} onChange={(e) => updateRecipeForm("medications", e.target.value)} className="mt-1 min-h-20" />
                  </div>
                </div>
                <DialogFooter className="gap-2 sm:gap-0">
                  <Button type="button" variant="outline" onClick={() => setRecipeModalOpen(false)}>
                    Annuler
                  </Button>
                  <Button type="button" onClick={confirmRecipe} className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Confirmer
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </>
        )}

        <div className="mt-8">
          <button
            onClick={handleNextOrHome}
            className="flex w-full items-center justify-center gap-2 rounded-lg gradient-primary py-4 font-display font-semibold text-primary-foreground transition-opacity hover:opacity-90 active:opacity-80"
          >
            {nextLesson ? "Lecon suivante >" : "Retour a l'accueil"}
          </button>
        </div>

        {course.id === "commencez-ici" && (
          <div className="mt-6 rounded-lg border border-border bg-card p-5">
            <h3 className="mb-4 text-center font-display font-semibold text-foreground">Besoin d'aide ?</h3>
            <div className="space-y-4">
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <Mail size={18} className="shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground">E-mail de support :</span>
                </div>
                <a href="mailto:contact@maigre.online" className="text-sm text-primary underline hover:opacity-90">
                  contact@maigre.online
                </a>
              </div>
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <MessageCircle size={18} className="shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground">Support via WhatsApp :</span>
                </div>
                <a
                  href="https://wa.link/ko4kn8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary underline hover:opacity-90"
                >
                  Ouvrir l'assistance
                </a>
              </div>
            </div>
          </div>
        )}
      </main>
      <BottomNav />
    </div>
  );
};

export default CoursePage;
