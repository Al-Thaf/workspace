import Home from "../views/home";
import { NavLinkProps } from "./types";

const navLinks: Array<NavLinkProps> = [
  {
    path: "Home",
    component: <Home />,
  },
];

export default navLinks;
