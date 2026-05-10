import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import { ChevronLeft, HelpCircle, Mail, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const HelpPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-md items-center px-4 py-4">
          <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-sm text-foreground">
            <ChevronLeft size={18} />
            Voltar
          </button>
        </div>
      </header>

      <main className="mx-auto flex max-w-md flex-col gap-4 px-4 py-6">
        <div className="mb-2 flex items-center gap-3">
          <HelpCircle size={24} className="text-primary" />
          <h1 className="font-display text-xl font-bold text-foreground">Ajuda e suporte</h1>
        </div>

        <div className="rounded-lg border border-primary/30 bg-card p-5">
          <h3 className="mb-4 font-display font-semibold text-foreground">Ajuda rapida</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-green-500" />
              <div>
                <p className="text-sm font-medium text-foreground">Nao consegue acessar uma aula?</p>
                <p className="text-xs text-muted-foreground">Entre novamente e atualize a pagina.</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-green-500" />
              <div>
                <p className="text-sm font-medium text-foreground">Video nao abre?</p>
                <p className="text-xs text-muted-foreground">Confira sua conexao e tente novamente.</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-green-500" />
              <div>
                <p className="text-sm font-medium text-foreground">Progresso sumiu?</p>
                <p className="text-xs text-muted-foreground">
                  O progresso fica salvo neste navegador. Limpar os dados do navegador pode reiniciar tudo.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="mt-2 font-display font-semibold text-foreground">Contato</h3>

        <div className="rounded-lg border border-primary/30 bg-card p-5">
          <div className="mb-3 flex items-center gap-2">
            <Mail size={18} className="text-primary" />
            <h3 className="font-display font-semibold text-foreground">Email</h3>
          </div>
          <p className="mb-4 text-sm text-muted-foreground">Envie sua duvida e nossa equipe responde assim que possivel.</p>
          <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open("mailto:suporte@maigre.online")}>
            <Mail size={14} />
            Enviar email
          </Button>
        </div>

        <div className="rounded-lg border border-primary/30 bg-card p-5">
          <div className="mb-3 flex items-center gap-2">
            <MessageCircle size={18} className="text-primary" />
            <h3 className="font-display font-semibold text-foreground">WhatsApp</h3>
          </div>
          <p className="mb-4 text-sm text-muted-foreground">Use o WhatsApp para perguntas rapidas sobre acesso ou aulas.</p>
          <Button size="sm" className="gap-2" onClick={() => window.open("https://wa.link/ko4kn8", "_blank")}>
            <MessageCircle size={14} />
            Abrir WhatsApp
          </Button>
        </div>

        <div className="rounded-lg border border-primary/30 bg-card p-5">
          <div className="mb-3 flex items-center gap-2">
            <Clock size={18} className="text-primary" />
            <h3 className="font-display font-semibold text-foreground">Atendimento</h3>
          </div>
          <div className="space-y-1 text-sm text-muted-foreground">
            <p>
              <span className="font-medium text-foreground">Email:</span> resposta em ate 24 horas
            </p>
            <p>
              <span className="font-medium text-foreground">WhatsApp:</span> segunda a sexta, horario comercial
            </p>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default HelpPage;
