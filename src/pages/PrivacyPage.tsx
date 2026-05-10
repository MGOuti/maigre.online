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
            Retour
          </button>
        </div>
      </header>

      <main className="mx-auto flex max-w-md flex-col gap-4 px-4 py-6">
        <div className="mb-2 flex items-center gap-3">
          <Shield size={24} className="text-primary" />
          <h1 className="font-display text-xl font-bold text-foreground">Confidentialite et securite</h1>
        </div>

        <div className="rounded-lg border border-primary/30 bg-card p-5">
          <div className="mb-3 flex items-center gap-2">
            <Shield size={18} className="text-primary" />
            <h3 className="font-display font-semibold text-foreground">Donnees utilisees</h3>
          </div>
          <p className="mb-3 text-sm text-muted-foreground">
            L'application utilise seulement les donnees necessaires pour ameliorer l'experience :
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />Progression des lecons</li>
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />Recette personnalisee enregistree dans le navigateur</li>
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />E-mail saisi uniquement pour liberer l'acces local</li>
          </ul>
        </div>

        <div className="rounded-lg border border-primary/30 bg-card p-5">
          <div className="mb-3 flex items-center gap-2">
            <Lock size={18} className="text-primary" />
            <h3 className="font-display font-semibold text-foreground">Stockage local</h3>
          </div>
          <p className="mb-3 text-sm text-muted-foreground">Votre progression reste enregistree sur votre appareil.</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />Les donnees restent dans ce navigateur</li>
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />Aucune inscription sensible obligatoire</li>
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />Vous pouvez effacer les donnees depuis le navigateur</li>
          </ul>
        </div>

        <div className="rounded-lg border border-primary/30 bg-card p-5">
          <div className="mb-3 flex items-center gap-2">
            <Eye size={18} className="text-primary" />
            <h3 className="font-display font-semibold text-foreground">Bonnes pratiques</h3>
          </div>
          <p className="mb-3 text-sm text-muted-foreground">La confidentialite de l'eleve passe en premier.</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />Pas de cookies de suivi dans l'app</li>
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />Aucune vente d'informations personnelles</li>
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />Support par e-mail uniquement sur demande</li>
          </ul>
        </div>

        <div className="rounded-lg border border-primary/30 bg-card p-5">
          <h3 className="mb-2 font-display font-semibold text-foreground">Questions sur la confidentialite ?</h3>
          <p className="text-sm text-muted-foreground">Contactez le support :</p>
          <a href="mailto:contact@maigre.online" className="mt-2 inline-block text-sm text-primary underline">
            contact@maigre.online
          </a>
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default PrivacyPage;
