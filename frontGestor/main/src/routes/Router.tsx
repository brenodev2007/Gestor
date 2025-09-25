import { ContainerRoot } from "@/layout/ContainerRoot";
import Login from "@/pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        {/* Rotas protegidas TODO-ADICIONAR PRIVATE ROUTES PARA VALIDAÇÃO*/}
        {/* <Route element={<ContainerRoot />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
};
