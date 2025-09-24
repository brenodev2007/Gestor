import { useState } from "react";
import Login from "./components/login";
import Register from "./components/register";
import ForgotPassword from "./components/forgot-passowrd";

export type Screens = "login" | "forgot-password" | "register";

export default function Index() {
  const [screen, setScreens] = useState<Screens>();

  switch (screen) {
    case "login":
      return <Login changeScreen={setScreens} />;

    case "register":
      return <Register changeScreen={setScreens} />;

    case "forgot-password":
      return <ForgotPassword changeScreen={setScreens} />;

    default:
      return <Login changeScreen={setScreens} />;
  }
}
