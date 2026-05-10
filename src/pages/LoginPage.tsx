import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoImg from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const isValidEmail = (val: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setError("Digite um email valido.");
      return;
    }
    setError("");
    navigate("/");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <div className="mb-8 flex flex-col items-center gap-2">
        <img src={logoImg} alt="Stylo Maison Happ logo" className="h-16 w-16 object-contain" />
        <span className="font-display text-2xl font-bold text-foreground">
          Stylo <span style={{ color: "#2debd1" }}>Maison Happ</span>
        </span>
      </div>

      <div className="w-full max-w-sm">
        <h1 className="mb-2 text-center font-display text-xl font-bold text-foreground">
          Bem-vinda ao Stylo Maison Happ
        </h1>
        <p className="mb-6 text-center text-sm text-muted-foreground">
          Digite o email usado na compra para acessar
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            type="email"
            placeholder="Seu email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError("");
            }}
          />
          {error && <p className="text-sm text-destructive">{error}</p>}
          <Button type="submit" className="w-full">Entrar</Button>
        </form>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          Seu email nao e armazenado. Ele serve apenas para liberar o acesso.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
