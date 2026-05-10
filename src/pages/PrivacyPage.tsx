import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import { ChevronLeft, Shield, Lock, Eye } from "lucide-react";

const PrivacyPage = () => {
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
          <Shield size={24} className="text-primary" />
          <h1 className="font-display text-xl font-bold text-foreground">Privacidade e seguranca</h1>
        </div>

        <div className="rounded-lg border border-primary/30 bg-card p-5">
          <div className="mb-3 flex items-center gap-2">
            <Shield size={18} className="text-primary" />
            <h3 className="font-display font-semibold text-foreground">Dados usados</h3>
          </div>
          <p className="mb-3 text-sm text-muted-foreground">
            O app usa apenas dados necessarios para melhorar a experiencia:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />Progresso das aulas</li>
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />Receita personalizada salva no navegador</li>
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />Email digitado apenas para liberar o acesso local</li>
          </ul>
        </div>

        <div className="rounded-lg border border-primary/30 bg-card p-5">
          <div className="mb-3 flex items-center gap-2">
            <Lock size={18} className="text-primary" />
            <h3 className="font-display font-semibold text-foreground">Armazenamento local</h3>
          </div>
          <p className="mb-3 text-sm text-muted-foreground">Seu progresso fica salvo no proprio dispositivo.</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />Os dados ficam neste navegador</li>
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />Nao ha cadastro sensivel obrigatorio</li>
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />Voce pode limpar os dados pelo navegador</li>
          </ul>
        </div>

        <div className="rounded-lg border border-primary/30 bg-card p-5">
          <div className="mb-3 flex items-center gap-2">
            <Eye size={18} className="text-primary" />
            <h3 className="font-display font-semibold text-foreground">Boas praticas</h3>
          </div>
          <p className="mb-3 text-sm text-muted-foreground">A privacidade da aluna vem primeiro.</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />Sem cookies de rastreamento no app</li>
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />Sem venda de informacoes pessoais</li>
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />Suporte por email somente quando solicitado</li>
          </ul>
        </div>

        <div className="rounded-lg border border-primary/30 bg-card p-5">
          <h3 className="mb-2 font-display font-semibold text-foreground">Duvidas sobre privacidade?</h3>
          <p className="text-sm text-muted-foreground">Fale com o suporte:</p>
          <a href="mailto:suporte@maigre.online" className="mt-2 inline-block text-sm text-primary underline">
            suporte@maigre.online
          </a>
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default PrivacyPage;
