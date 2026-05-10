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
            Retour
          </button>
        </div>
      </header>

      <main className="mx-auto flex max-w-md flex-col gap-4 px-4 py-6">
        <div className="mb-2 flex items-center gap-3">
          <HelpCircle size={24} className="text-primary" />
          <h1 className="font-display text-xl font-bold text-foreground">Aide et support</h1>
        </div>

        <div className="rounded-lg border border-primary/30 bg-card p-5">
          <h3 className="mb-4 font-display font-semibold text-foreground">Aide rapide</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-green-500" />
              <div>
                <p className="text-sm font-medium text-foreground">Impossible d'acceder a une lecon ?</p>
                <p className="text-xs text-muted-foreground">Connectez-vous a nouveau et actualisez la page.</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-green-500" />
              <div>
                <p className="text-sm font-medium text-foreground">La video ne s'ouvre pas ?</p>
                <p className="text-xs text-muted-foreground">Verifiez votre connexion puis reessayez.</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-green-500" />
              <div>
                <p className="text-sm font-medium text-foreground">Votre progression a disparu ?</p>
                <p className="text-xs text-muted-foreground">
                  La progression est enregistree dans ce navigateur. Effacer les donnees peut tout reinitialiser.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="mt-2 font-display font-semibold text-foreground">Contact</h3>

        <div className="rounded-lg border border-primary/30 bg-card p-5">
          <div className="mb-3 flex items-center gap-2">
            <Mail size={18} className="text-primary" />
            <h3 className="font-display font-semibold text-foreground">E-mail</h3>
          </div>
          <p className="mb-4 text-sm text-muted-foreground">Envoyez votre question, notre equipe repond des que possible.</p>
          <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open("mailto:contact@maigre.online")}>
            <Mail size={14} />
            Envoyer un e-mail
          </Button>
        </div>

        <div className="rounded-lg border border-primary/30 bg-card p-5">
          <div className="mb-3 flex items-center gap-2">
            <MessageCircle size={18} className="text-primary" />
            <h3 className="font-display font-semibold text-foreground">WhatsApp</h3>
          </div>
          <p className="mb-4 text-sm text-muted-foreground">Utilisez WhatsApp pour les questions rapides sur l'acces ou les lecons.</p>
          <Button size="sm" className="gap-2" onClick={() => window.open("https://wa.link/ko4kn8", "_blank")}>
            <MessageCircle size={14} />
            Ouvrir WhatsApp
          </Button>
        </div>

        <div className="rounded-lg border border-primary/30 bg-card p-5">
          <div className="mb-3 flex items-center gap-2">
            <Clock size={18} className="text-primary" />
            <h3 className="font-display font-semibold text-foreground">Assistance</h3>
          </div>
          <div className="space-y-1 text-sm text-muted-foreground">
            <p>
              <span className="font-medium text-foreground">E-mail :</span> reponse sous 24 heures
            </p>
            <p>
              <span className="font-medium text-foreground">WhatsApp :</span> du lundi au vendredi, aux heures de bureau
            </p>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default HelpPage;
