import { useNavigate } from "react-router-dom";
import AppHeader from "@/components/AppHeader";
import BottomNav from "@/components/BottomNav";
import { lessonCourses, getCompletedLessonCount } from "@/lib/courses";
import { BarChart3, Shield, HelpCircle, LogOut } from "lucide-react";

const SettingsPage = () => {
  const completedCount = getCompletedLessonCount();
  const total = lessonCourses.length;
  const percent = total > 0 ? Math.round((completedCount / total) * 100) : 0;
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      <AppHeader title="Ajustes" />
      <main className="mx-auto max-w-md px-4 py-6 flex flex-col gap-4">
        <div className="rounded-lg border border-border bg-card p-5">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 size={20} className="text-primary" />
            <h3 className="font-display font-semibold text-foreground">Progresso</h3>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Progresso geral</span>
            <span className="text-sm font-semibold text-primary">{percent}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full gradient-primary transition-all duration-500"
              style={{ width: `${percent}%` }}
            />
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            {completedCount} de {total} aulas concluidas.
          </p>
        </div>

        <button
          onClick={() => navigate("/privacy")}
          className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 text-left hover:border-primary/30 transition-colors"
        >
          <Shield size={20} className="text-muted-foreground" />
          <div>
            <p className="text-sm font-medium text-foreground">Privacidade e seguranca</p>
            <p className="text-xs text-muted-foreground">Veja como os dados ficam salvos</p>
          </div>
        </button>

        <button
          onClick={() => navigate("/help")}
          className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 text-left hover:border-primary/30 transition-colors"
        >
          <HelpCircle size={20} className="text-muted-foreground" />
          <div>
            <p className="text-sm font-medium text-foreground">Ajuda e suporte</p>
            <p className="text-xs text-muted-foreground">Fale com o atendimento</p>
          </div>
        </button>

        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-3 rounded-lg border border-destructive/30 bg-destructive/10 p-4 text-left hover:bg-destructive/20 transition-colors"
        >
          <LogOut size={20} className="text-destructive" />
          <div>
            <p className="text-sm font-medium text-destructive">Sair</p>
            <p className="text-xs text-muted-foreground">Voltar para a tela de acesso</p>
          </div>
        </button>
      </main>
      <BottomNav />
    </div>
  );
};

export default SettingsPage;
