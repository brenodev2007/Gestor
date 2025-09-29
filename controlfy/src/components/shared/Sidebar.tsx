import {
  Landmark,
  LayoutGrid,
  PiggyBank,
  ReceiptText,
  Settings,
} from "lucide-react";
import { NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <aside className="col-start-1 row-start-2 border-r border-r-black/5 bg-white p-8">
      <nav className="flex flex-col gap-4">
        <NavLink
          to="/"
          className="flex items-center gap-3 rounded-md px-4 py-2 text-zinc-900 transition-colors hover:bg-zinc-100"
        >
          <LayoutGrid className="h-5 w-5" />
          <span className="font-medium">Dashboard</span>
        </NavLink>

        <NavLink
          to="/accounts"
          className="flex items-center gap-3 rounded-md px-4 py-2 text-zinc-900 transition-colors hover:bg-zinc-100"
        >
          <Landmark className="h-5 w-5" />
          <span className="font-medium">Contas</span>
        </NavLink>

        <NavLink
          to="/transactions"
          className="flex items-center gap-3 rounded-md px-4 py-2 text-zinc-900 transition-colors hover:bg-zinc-100"
        >
          <ReceiptText className="h-5 w-5" />
          <span className="font-medium">Transações</span>
        </NavLink>

        <NavLink
          to="/reports"
          className="flex items-center gap-3 rounded-md px-4 py-2 text-zinc-900 transition-colors hover:bg-zinc-100"
        >
          <PiggyBank className="h-5 w-5" />
          <span className="font-medium">Relatórios</span>
        </NavLink>

        <NavLink
          to="/settings"
          className="mt-auto flex items-center gap-3 rounded-md px-4 py-2 text-zinc-900 transition-colors hover:bg-zinc-100"
        >
          <Settings className="h-5 w-5" />
          <span className="font-medium">Configurações</span>
        </NavLink>
      </nav>
    </aside>
  );
}
