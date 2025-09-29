import { LogOut, Menu, User } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed left-0 top-0 flex h-20 w-full items-center justify-between border-b bg-white px-8">
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-bold text-zinc-900">control.fy</h1>
      </div>

      <div className="flex items-center gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2">
              <img
                src="https://github.com/matheus-santos-2.png"
                alt="Avatar"
                className="h-8 w-8 rounded-full"
              />
              <div className="flex flex-col items-start">
                <span className="text-sm font-medium text-zinc-900">
                  Matheus Santos
                </span>
                <span className="text-xs text-zinc-500">
                  matheus.santos@email.com
                </span>
              </div>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Perfil</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Sair</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="ghost">
          <Menu className="h-6 w-6 text-zinc-900" />
        </Button>
      </div>
    </header>
  );
}
