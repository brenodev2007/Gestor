
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
         <div className="hidden bg-muted lg:block">
        <img
          src="https://i.imgur.com/Jvh1O2j.png"
          alt="Image"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold text-emerald-500">Control-Fy</h1>
            <p className="text-balance text-muted-foreground">
              Insira suas informações para criar uma conta
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">Primeiro nome</Label>
                <Input id="first-name" placeholder="Max" required className="border-emerald-500" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Último nome</Label>
                <Input id="last-name" placeholder="Robinson" required className="border-emerald-500" />
              </div>
            </div>
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
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" className="border-emerald-500"/>
            </div>
            <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">
              Criar conta
            </Button>
            <Button variant="outline" className="w-full border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white">
              Cadastre-se com o Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Já tem uma conta?{" "}
            <Link to="/login" className="underline text-emerald-500">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
