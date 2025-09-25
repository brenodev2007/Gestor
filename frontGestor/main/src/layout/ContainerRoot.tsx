import { Outlet } from "react-router-dom";
import { SideBar } from "./SideBar/sidebar";

export const ContainerRoot = () => {
  return (
    <div className="containerRoot">
      <SideBar />

      <div
        className="d-flex flex-column w-100"
        style={{
          background: "#f2f3f8",
          overflowX: "clip",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};
