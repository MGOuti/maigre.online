interface AppHeaderProps {
  title?: string;
}

const AppHeader = ({ title }: AppHeaderProps) => {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-md items-center justify-center py-4">
        <div className="flex items-center">
          <span className="font-display text-xl font-bold text-foreground">
            {title ?? (
              <>
                Stylo <span style={{ color: "hsl(var(--primary))" }}>Maison App</span>
              </>
            )}
          </span>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
