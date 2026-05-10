import logoImg from "@/assets/logo.png";

interface AppHeaderProps {
  title?: string;
}

const AppHeader = ({ title }: AppHeaderProps) => {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-md items-center justify-center py-4">
        <div className="flex items-center gap-2">
          <img src={logoImg} alt="Stylo Maison Happ logo" className="h-8 w-8 object-contain" />
          <span className="font-display text-xl font-bold text-foreground">
            {title ?? (
              <>
                Stylo <span style={{ color: "#2debd1" }}>Maison Happ</span>
              </>
            )}
          </span>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
