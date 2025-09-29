import { Outlet } from "react-router-dom";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export function Layout() {
  return (
    <div className="min-h-screen antialiased">
      <Header />

      <div className="grid min-h-screen grid-cols-app">
        <Sidebar />

        <main className="px-4 pb-12 pt-24">
          <Outlet />
        </main>
      </div>
    </div>
  );
}