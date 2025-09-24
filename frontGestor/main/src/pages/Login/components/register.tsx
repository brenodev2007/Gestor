import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.png";
import aside from "@/assets/aside-img.png";
import type { Screens } from "..";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "O username precisa ter mais que 2 caracteres",
  }),
  password: z
    .string()
    .min(1, { message: "A senha precisa ter mais que 2 caracteres" }),
});
interface RegisterProps {
  changeScreen: (value: Screens) => void;
}

export default function Register({ changeScreen }: RegisterProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="min-h-screen flex">
      {/* Aside - imagem corporativa */}
      <aside
        className="flex-1 bg-cover bg-center hidden lg:block relative"
        style={{
          backgroundColor: "#003A2C",
        }}
      >
        <img
          src={aside}
          alt=""
          className="object-contain  h-screen  w-full absolute bottom-0 pt-10"
        />
      </aside>

      {/* Main - formulário */}
      <main className="flex-1 flex justify-center items-center p-8 bg-gray-50">
        <div className="w-full max-w-md  rounded-lg  p-8 space-y-6">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src={logo} alt="Logo" />
          </div>

          <h1 className="text-3xl font-semibold text-gray-800 text-center">
            Registrar-se
          </h1>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Digite seu nome de usuário"
                        {...field}
                        className="border-emerald-600"
                      />
                    </FormControl>
                    <FormDescription>
                      Este é seu nome de usuário público.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Digite sua senha"
                        {...field}
                        className="border-emerald-600"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
              >
                Cadastrar-se
              </Button>

              <div className="flex flex-col flex-initial">
                <Button
                  variant="link"
                  onClick={() => changeScreen("forgot-password")}
                >
                  Esqueceu a senha?
                </Button>
                <Button variant="link" onClick={() => changeScreen("login")}>
                  Login
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </main>
    </div>
  );
}
