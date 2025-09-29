
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold text-emerald-500">Control-Fy</h1>
            <p className="text-balance text-muted-foreground">
              Faça o login para continuar
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                className="border-emerald-500"
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Senha</Label>
                <Link
                  to="/forgot-password"
                  className="ml-auto inline-block text-sm text-emerald-500 underline"
                >
                  Esqueceu sua senha?
                </Link>
              </div>
              <Input id="password" type="password" required className="border-emerald-500" />
            </div>
            <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">
              Login
            </Button>
            <Button variant="outline" className="w-full border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white">
              Login com Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Não tem uma conta?{" "}
            <Link to="/sign-up" className="underline text-emerald-500">
              Cadastre-se
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <img
          src="https://i.imgur.com/Jvh1O2j.png"
          alt="Image"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
